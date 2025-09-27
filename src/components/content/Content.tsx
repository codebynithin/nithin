import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { DataView } from 'primereact/dataview';
import { InputText } from 'primereact/inputtext';
import './Content.scss';
import Home from './home/Home';
import About from './about/About';
import Experience from './experience/Experience';
import Education from './education/Education';
import Portfolio from './portfolio/Portfolio';
import { DialogProvider, useDialog } from '../dialog/Dialog';
import { QuickLinkModel } from '@/model/quick-link.model';

const DialogController: React.FC = () => {
  const { isDialogVisible, showDialog, hideDialog } = useDialog();
  const dataViewRef = useRef<DataView>(null);
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
  const filteredQuickLinks = (filter: string) => {
    setFilter(filter);
    fetchQuickLinks(filter);
  };
  const dataviewHeader = (
    <div className="h-4rem flex justify-content-end">
      <InputText
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
  const handleDialogShow = () => {
    setTimeout(() => {
      if (dataViewRef.current) {
        const firstItem = (dataViewRef.current as any)
          .getElement()
          .querySelector('[tabindex="0"]') as HTMLElement;

        if (firstItem) {
          firstItem.focus();
        }
      }
    }, 10);
  };
  const fetchQuickLinks = async (query?: string) => {
    try {
      if (query) {
        setQuickLinks(
          allQuickLinks.filter((link) => link.name.toLowerCase().includes(query.toLowerCase())),
        );
      } else {
        setQuickLinks(allQuickLinks);
      }
    } catch (error) {
      console.error('Error filtering quick links:', error);
    }
  };

  useEffect(() => {
    if (isDialogVisible) {
      fetchQuickLinks();
    }
  }, [isDialogVisible]);

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

  return (
    <Dialog
      modal
      showHeader={false}
      dismissableMask={true}
      visible={isDialogVisible}
      className="w-9 max-w-30rem dialog-list"
      maskClassName="bg-black-alpha-50"
      position="top"
      onHide={hideDialog}
      onShow={handleDialogShow}
    >
      <DataView
        ref={dataViewRef}
        value={quickLinks}
        itemTemplate={itemTemplate}
        header={dataviewHeader}
        emptyMessage="Nothing here, try again."
        alwaysShowPaginator={false}
        lazy={true}
      ></DataView>
    </Dialog>
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
    <DialogProvider>
      <main className="content-container w-full relative flex align-items-start">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiences" element={<Experience />} />
          <Route path="/educations" element={<Education />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <DialogController />
      </main>
    </DialogProvider>
  );
};

export default Content;
