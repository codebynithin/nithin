import React, { useState, useEffect, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { DataView } from 'primereact/dataview';
import { InputText } from 'primereact/inputtext';
import './Home.scss';

const Home: React.FC = () => {
  const dataViewRef = useRef<DataView>(null);

  const [filter, setFilter] = useState('');
  const projects = [
    { name: 'Download Resume', icon: 'cbn-download' },
    { name: 'Know my career', icon: 'cbn-user' },
    { name: 'See my skills', icon: 'cbn-target' },
    { name: 'See my github', icon: 'cbn-github' },
    { name: 'View my source code', icon: 'cbn-code' },
  ];
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(filter.toLowerCase()),
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
  const itemTemplate = ({ name, icon }: { name: string; icon: string }) => {
    return (
      <div className="col-12" tabIndex={0}>
        <div className="flex align-items-center justify-content-start p-3 gap-3">
          <i className={icon}></i>
          <div className="font-bold">{name}</div>
        </div>
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
  const [keyCombination, setKeyCombination] = useState<string[]>([]);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    const handleNavigation = (event: KeyboardEvent) => {
      if (!isOverlayVisible) return;

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
  }, [isOverlayVisible]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isMac = navigator.platform.toLowerCase().includes('mac');
      if (event.key === 'Enter' && (isMac ? event.metaKey : event.ctrlKey)) {
        event.preventDefault();
        setIsOverlayVisible(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const platform = navigator.platform.toLowerCase();
    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes('mobile')) {
      setKeyCombination(['Tap']);
    } else if (platform.includes('mac')) {
      setKeyCombination(['Command', 'Enter']);
    } else {
      setKeyCombination(['Ctrl', 'Enter']);
    }
  }, []);

  return (
    <>
      <div className="flex flex-column gap-3 md:gap-8 md:flex-row">
        <div className="col">
          <div className="grid">
            <div className="col-12 p-0 md:m-2 text-6xl text-center text-white md:text-right font-bold">
              Nithin
            </div>
            <div className="col-12 p-0 md:m-2 text-6xl text-center text-white md:text-right font-bold">
              Viswanathan
            </div>
          </div>
        </div>
        <div className="col hidden md:flex">&nbsp;</div>
        <div className="col text-center md:text-left">
          <div className="col-12 text-2xl">
            A <span className="font-bold text-white">Full-Stack Developer</span>
          </div>
          <div className="col-12 text-2xl line-height-3 pt-0">
            who enjoys crafting digital experiences
          </div>
          <div className="col-12 line-height-3">
            <div
              className="flex align-items-center justify-content-center md:justify-content-start gap-2 cursor-pointer"
              onClick={() => {
                if (navigator.userAgent.toLowerCase().includes('mobile')) {
                  setIsOverlayVisible(true);
                }
              }}
            >
              {keyCombination.map((key: string, index: number) => (
                <React.Fragment key={index}>
                  {index > 0 && <span className="mx-2">+</span>}
                  <span className="surface-50 inline-flex border-round md:border-round-xl px-3 py-2">
                    {key}
                  </span>
                </React.Fragment>
              ))}
              <span>to start</span>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        modal
        showHeader={false}
        dismissableMask={true}
        visible={isOverlayVisible}
        className="surface-50 w-9 max-w-30rem dialog-list"
        maskClassName="bg-black-alpha-50"
        position="top"
        onHide={() => setIsOverlayVisible(false)}
        onShow={handleDialogShow}
      >
        <DataView
          ref={dataViewRef}
          value={filteredProjects}
          itemTemplate={itemTemplate}
          header={dataviewHeader}
          emptyMessage="Nothing here, try again."
          alwaysShowPaginator={false}
          lazy={true}
        ></DataView>
      </Dialog>
    </>
  );
};

export default Home;
