import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDialog } from './Dialog';
import { QuickLinkModel } from '@/model/quick-link.model';

// Define QuickLink interface
export interface QuickLink extends Omit<QuickLinkModel, 'icon'> {
  icon: string;
  target?: string;
}

// QuickLinkItem component for rendering individual quick link items
const QuickLinkItem = React.memo(
  ({
    icon,
    name,
    href,
    target = '_self',
    isFocused = false,
    onClick,
    onKeyDown,
  }: QuickLink & {
    isFocused?: boolean;
    onClick: (e: React.MouseEvent) => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
  }) => {
    return (
      <div
        className={`flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors cursor-pointer ${
          isFocused ? 'bg-gray-100 dark:bg-gray-800' : ''
        }`}
        onClick={onClick}
        onKeyDown={onKeyDown}
        tabIndex={-1}
        role="button"
      >
        <i className={`${icon} mr-3 text-lg`} />
        <span>{name}</span>
      </div>
    );
  },
);

QuickLinkItem.displayName = 'QuickLinkItem';

const DialogController: React.FC = () => {
  const { isDialogVisible, hideDialog, showDialog } = useDialog();
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const navigate = useNavigate();

  // Define the quick links
  const allQuickLinks = useMemo<QuickLink[]>(
    () => [
      {
        name: 'Download Resume',
        icon: 'cbn-download',
        href: '/downloads/resume-nithin-v.pdf',
        target: '_blank',
      },
      { name: 'Know me', icon: 'cbn-user', href: '/about' },
      { name: 'Know my career', icon: 'cbn-user', href: '/experiences' },
      { name: 'See my skills', icon: 'cbn-target', href: '/about#skills' },
      {
        name: 'See my github',
        icon: 'cbn-github',
        href: 'https://github.com/codebynithin',
        target: '_blank',
      },
      {
        name: 'View my source code',
        icon: 'cbn-code',
        href: 'https://github.com/codebynithin/nithin',
        target: '_blank',
      },
    ],
    [],
  );

  // Filter quick links based on search input
  const quickLinks = useMemo(() => {
    if (!filter.trim()) return allQuickLinks;
    const searchTerm = filter.toLowerCase();
    return allQuickLinks.filter((link) => link.name.toLowerCase().includes(searchTerm));
  }, [filter, allQuickLinks]);

  // Handle navigation to a link
  const handleNavigateToLink = useCallback(
    (link: QuickLink) => {
      if (link.target === '_blank') {
        window.open(link.href, '_blank', 'noopener,noreferrer');
      } else if (link.href.startsWith('http')) {
        window.location.href = link.href;
      } else {
        navigate(link.href.startsWith('/') ? link.href : `/${link.href}`);
      }
      hideDialog();
    },
    [navigate, hideDialog],
  );

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent | KeyboardEvent) => {
      if (!isDialogVisible) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setFocusedIndex((prev) => {
            const nextIndex = prev < quickLinks.length - 1 ? prev + 1 : 0;
            // Ensure the focused item is visible
            const items = listRef.current?.querySelectorAll<HTMLElement>('[data-item-index]');
            if (items && items[nextIndex]) {
              items[nextIndex].scrollIntoView({ block: 'nearest' });
            }
            return nextIndex;
          });
          break;
        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex((prev) => (prev <= 0 ? quickLinks.length - 1 : prev - 1));
          break;
        case 'Enter':
          if (focusedIndex >= 0 && focusedIndex < quickLinks.length) {
            e.preventDefault();
            const item = quickLinks[focusedIndex];
            if (item) {
              handleNavigateToLink(item);
            }
          }
          break;
        case 'Escape':
          e.preventDefault();
          hideDialog();
          break;
      }
    },
    [isDialogVisible, quickLinks, focusedIndex, handleNavigateToLink, hideDialog],
  );

  // Handle input change for filtering
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    setFocusedIndex(0); // Reset focus to first item when filtering
  }, []);

  // Handle click on quick link
  const handleQuickLinkClick = useCallback(
    (link: QuickLink, e: React.MouseEvent) => {
      e.preventDefault();
      handleNavigateToLink(link);
    },
    [handleNavigateToLink],
  );

  // Focus management
  useEffect(() => {
    if (isDialogVisible) {
      setFocusedIndex(0);
      setFilter('');
      document.body.style.overflow = 'hidden';
      // Focus the input when dialog opens
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    } else {
      document.body.style.overflow = '';
    }
  }, [isDialogVisible]);

  // Close dialog when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        hideDialog();
      }
    };

    if (isDialogVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDialogVisible, hideDialog]);

  // Handle global keyboard shortcuts
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // CMD+Enter or CTRL+Enter to open dialog
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault();
        if (isDialogVisible) {
          hideDialog();
        } else {
          showDialog();
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, [isDialogVisible, hideDialog, showDialog]);

  if (!isDialogVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          hideDialog();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden transform transition-all"
      >
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={filter}
            onChange={handleInputChange}
            className="w-full p-4 text-lg bg-transparent border-0 border-b border-gray-200 dark:border-gray-800 focus:ring-0 focus:border-blue-500 dark:focus:border-blue-400 outline-none"
            placeholder="Search commands..."
            onKeyDown={handleKeyDown}
            aria-label="Search commands"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
            <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Esc</kbd> to close
          </div>
        </div>
        <div
          ref={listRef}
          className="max-h-[60vh] overflow-y-auto p-2"
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          {quickLinks.length > 0 ? (
            <div className="space-y-1">
              {quickLinks.map((link, index) => (
                <div
                  key={link.name}
                  data-item-index={index}
                  className={`rounded-md ${focusedIndex === index ? 'ring-2 ring-blue-500' : ''}`}
                >
                  <QuickLinkItem
                    icon={link.icon}
                    name={link.name}
                    href={link.href}
                    target={link.target}
                    isFocused={focusedIndex === index}
                    onClick={(e) => handleQuickLinkClick(link, e)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleNavigateToLink(link);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500 dark:text-gray-400">No results found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DialogController;
