import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
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

const DialogController: React.FC = () => {
  const { isDialogVisible, showDialog, hideDialog } = useDialog();
  const dataViewRef = useRef<DataView>(null);
  const [filter, setFilter] = useState('');

  const quickLinks = [
    {
      name: 'Download Resume',
      icon: 'cbn-download',
      href: `${process.env.PUBLIC_URL}/downloads/resume-nithin-v.pdf`,
      target: '_blank',
    },
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

  const filteredQuickLinks = quickLinks.filter((link) =>
    link.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const dataviewHeader = (
    <div className="h-4rem flex justify-content-end">
      <InputText
        className="w-full h-full bg-black-alpha-10 search-filter px-3"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Type what you want to know about me..."
      />
    </div>
  );

  const itemTemplate = ({
    name,
    icon,
    href,
    target,
  }: {
    name: string;
    icon: string;
    href: string;
    target?: string;
  }) => {
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
        const container = (dataViewRef.current as any).getElement();
        if (container) {
          const firstItem = container.querySelector('.p-dataview-content .p-grid .col-12');
          if (firstItem) {
            (firstItem as HTMLElement).focus();
          }
        }
      }
    }, 0);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isMac = navigator.platform.toLowerCase().includes('mac');
      if (event.key === 'Enter' && (isMac ? event.metaKey : event.ctrlKey)) {
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
      if (!isDialogVisible) return;

      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();

        if (dataViewRef.current) {
          const container = (dataViewRef.current as any).getElement();
          if (container) {
            const items = Array.from(
              container.querySelectorAll('.p-dataview-content .p-grid .col-12'),
            ) as HTMLElement[];

            if (items.length === 0) return;

            const activeElement = document.activeElement as HTMLElement;
            let currentIndex = items.findIndex((item) => item === activeElement);

            if (currentIndex === -1) {
              if (event.key === 'ArrowDown') {
                items[0].focus();
              }
              return;
            }

            let nextIndex;
            if (event.key === 'ArrowDown') {
              nextIndex = (currentIndex + 1) % items.length;
            } else {
              nextIndex = (currentIndex - 1 + items.length) % items.length;
            }

            items[nextIndex].focus();
          }
        }
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
      className="surface-50 w-9 max-w-30rem dialog-list"
      maskClassName="bg-black-alpha-50"
      position="top"
      onHide={hideDialog}
      onShow={handleDialogShow}
    >
      <DataView
        ref={dataViewRef}
        value={filteredQuickLinks}
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
      <main className="content-container w-full relative flex align-items-start md:ml-8 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiences" element={<Experience />} />
          <Route path="/educations" element={<Education />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* Add other routes here */}
        </Routes>
        <DialogController />
      </main>
    </DialogProvider>
  );
};

export default Content;
