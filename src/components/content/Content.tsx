import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import './Content.scss';
import Home from './home/Home';
import About from './about/About';
import Experience from './experience/Experience';
import Education from './education/Education';
import Portfolio from './portfolio/Portfolio';
import { QuickLinkModel } from '@/model/quick-link.model';

const DialogController: React.FC = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const dataViewRef = useRef<{ getElement: () => HTMLElement }>(null);
  const [filter, setFilter] = useState('');
  const [quickLinks, setQuickLinks] = useState<any[]>([]);
  const allQuickLinks = [
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
  ];

  const showDialog = useCallback(() => {
    setIsDialogVisible(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const hideDialog = useCallback(() => {
    setIsDialogVisible(false);
    document.body.style.overflow = 'auto';
  }, []);
  const filteredQuickLinks = useCallback(
    (filterValue: string) => {
      setFilter(filterValue);
      if (filterValue) {
        setQuickLinks(
          allQuickLinks.filter((link) =>
            link.name.toLowerCase().includes(filterValue.toLowerCase()),
          ),
        );
      } else {
        setQuickLinks(allQuickLinks);
      }
    },
    [allQuickLinks],
  );
  const dataviewHeader = (
    <div className="h-4rem flex justify-content-end">
      <input
        type="text"
        className="w-full h-full bg-black-alpha-10 search-filter px-3"
        value={filter}
        onChange={(e) => filteredQuickLinks(e.target.value)}
        placeholder="Type what you want to know about me..."
      />
    </div>
  );
  const itemTemplate = ({ name, icon, href, target }: QuickLinkModel) => {
    const navigate = () => {
      window.open(href, target || '_self');
      hideDialog();
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === 'Enter') {
        navigate();
      }
    };

    return (
      <div
        tabIndex={0}
        className="col-12 flex align-items-center justify-content-start p-3 gap-3 cursor-pointer"
        onClick={navigate}
        onKeyDown={handleKeyDown}
        role="link"
      >
        <i className={icon}></i>
        <div className="font-bold">{name}</div>
      </div>
    );
  };
  const handleDialogShow = useCallback(() => {
    setTimeout(() => {
      const firstItem = dialogRef.current?.querySelector('[tabindex="0"]') as HTMLElement;
      firstItem?.focus();
    }, 10);
  }, []);
  useEffect(() => {
    setQuickLinks(allQuickLinks);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
        event.preventDefault();
        showDialog();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showDialog]);

  useEffect(() => {
    const handleNavigation = (event: KeyboardEvent) => {
      if (!isDialogVisible || !dataViewRef.current) return;

      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();

        const container = (dataViewRef.current as any).getElement();
        const items = Array.from(container.querySelectorAll('[tabindex="0"]')) as HTMLElement[];

        if (items.length === 0) return;

        const activeElement = document.activeElement as HTMLElement;
        const currentIndex = items.findIndex((item) => item === activeElement);

        let nextIndex;
        if (event.key === 'ArrowDown') {
          nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % items.length;
        } else {
          nextIndex = currentIndex <= 0 ? items.length - 1 : currentIndex - 1;
        }
        items[nextIndex].focus();
      }
    };

    window.addEventListener('keydown', handleNavigation);
    return () => {
      window.removeEventListener('keydown', handleNavigation);
    };
  }, [isDialogVisible]);

  // Handle click outside to close dialog
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        hideDialog();
      }
    };

    if (isDialogVisible) {
      document.addEventListener('mousedown', handleClickOutside);
      handleDialogShow();
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDialogVisible, handleDialogShow, hideDialog]);

  // Handle Escape key to close dialog
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isDialogVisible) {
        hideDialog();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isDialogVisible, hideDialog]);

  if (!isDialogVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={hideDialog}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        className="relative w-full max-w-3xl bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
      >
        {/* Header with search */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="relative">
            <input
              type="text"
              className="w-full px-4 py-3 pl-10 text-sm bg-gray-100 dark:bg-gray-700 border-0 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Type what you want to know about me..."
              value={filter}
              onChange={(e) => filteredQuickLinks(e.target.value)}
              autoFocus
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-h-[60vh] overflow-y-auto">
          {quickLinks.length > 0 ? (
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {quickLinks.map((link, index) => (
                <li key={index}>{itemTemplate(link)}</li>
              ))}
            </ul>
          ) : (
            <div className="p-6 text-center text-gray-500 dark:text-gray-400">
              Nothing here, try again.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Content: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [location]);

  return (
    <>
      <DialogController />
      <div className="content-container w-full relative">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experiences" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Content;
