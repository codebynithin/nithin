import React, { useState, useEffect } from 'react';
import './Home.scss';
import { useDialog } from '../../dialog/Dialog';

const Home: React.FC = () => {
  const { showDialog } = useDialog();
  const [keyCombination, setKeyCombination] = useState<string[]>([]);

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
    <div className="w-full flex flex-col items-center justify-center gap-3 pt-6 md:px-8 md:flex-row md:gap-8 md:pt-0">
      <div className="col flex items-end justify-end md:items-center pb-4 md:pb-0">
        <div className="grid grid-nogutter">
          <div className="col-12 p-0 md:m-2 text-6xl text-center md:text-right text-900 font-bold">
            Nithin
          </div>
          <div className="col-12 p-0 md:m-2 text-6xl text-center md:text-right text-900 font-medium">
            Viswanathan
          </div>
        </div>
      </div>
      <div className="w-1rem hidden md:flex">&nbsp;</div>
      <div className="col text-center md:text-left">
        <div className="col-12 text-2xl">
          A <span className="text-900 font-bold">Full-Stack Developer</span>
        </div>
        <div className="col-12 text-2xl line-height-3 pt-0">
          who enjoys crafting digital experiences
        </div>
        <div className="col-12 line-height-3 mt-4">
          <div
            className="flex items-center justify-center md:justify-start gap-2 cursor-pointer"
            onClick={() => {
              if (navigator.userAgent.toLowerCase().includes('mobile')) {
                showDialog();
              }
            }}
          >
            {keyCombination.map((key: string, index: number) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="mx-2">+</span>}
                <span className="inline-flex border-round md:border-round-xl px-3 py-2 tap-bg">
                  {key}
                </span>
              </React.Fragment>
            ))}
            <span>to start</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
