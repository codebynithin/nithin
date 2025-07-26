/* eslint-disable no-unused-vars, no-undef */
import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
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
import { apiFetch } from '../../http';
import { QuickLinkModel } from '@/model/quick-link.model';

const DialogController: React.FC = () => {
  const { isDialogVisible, showDialog, hideDialog } = useDialog();
  const dataViewRef = useRef<DataView>(null);
  const [filter, setFilter] = useState('');
  const [value, setValue] = useState<QuickLinkModel | null>(null);
  const [quickLinks, setQuickLinks] = useState<any[]>([]);
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
      const params: { [key: string]: string } = {};

      if (query) {
        params['name'] = query;
      }

      const response = await apiFetch(
        `/api/v1/quick-links?${new URLSearchParams(params).toString()}`,
      );
      const data = await response.json();
      setQuickLinks(data);
    } catch (error) {
      console.error('Error fetching quick links:', error);
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
        let currentIndex = items.findIndex((item) => item === activeElement);

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
      className="surface-50 w-9 max-w-30rem dialog-list"
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
