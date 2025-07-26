import React, { useEffect, useState } from 'react';
import './Portfolio.scss';
import { PortfolioModel } from '../../../common/model/portfolio.model';
import { apiFetch } from '../../../http';

const Portfolio: React.FC = () => {
  const [portfolios, setPortfolios] = useState<PortfolioModel[]>([]);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const response = await apiFetch('/api/v1/portfolios');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: PortfolioModel[] = await response.json();
        setPortfolios(data);
      } catch (error) {
        console.error('Failed to fetch portfolios:', error);
      }
    };

    fetchPortfolios();
  }, []);

  return (
    <div className="portfolio-page w-full px-5 md:px-8">
      <div className="grid grid-nogutter gap-4">
        <h1 className="col-12 p-0 text-4xl text-900 font-bold m-0">Portfolio</h1>
        <hr className="col-12 p-0 m-0 border-50" />
        <div className="portfolio-items grid grid-nogutter">
          {portfolios.map((item, index) => (
            <div key={index} className="col-12 md:col-4 lg:col-2 p-3">
              <div className="portfolio-item-card border-1 border-solid border-round border-50">
                <img
                  src={`${process.env.PUBLIC_URL}/images/portfolio/${item.thumbnailUrl}`}
                  alt={item.title}
                  className="w-full"
                />
                <div className="p-3">
                  <h3 className="text-lg text-900 m-0">{item.title}</h3>
                  <p className="text-sm text-800 mt-1 mb-0">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
