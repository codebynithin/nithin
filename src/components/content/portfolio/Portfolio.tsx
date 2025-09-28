import React from 'react';
import './Portfolio.scss';

const Portfolio: React.FC = () => {
  const portfolios = [
    {
      title: "PAPPY'S NEST",
      category: 'Website',
      imageUrl: 'pappys-600.gif',
      thumbnailUrl: 'pappys-300.gif',
    },
    {
      title: 'Translation Creator',
      category: 'Website',
      imageUrl: 'impex-600.gif',
      thumbnailUrl: 'impex-300.gif',
    },
    {
      title: 'Vivid Diagnostic',
      category: 'Website',
      imageUrl: 'vivid-diagnostic-640.png',
      thumbnailUrl: 'vivid-diagnostic-320.png',
    },
    {
      title: 'Beach Plum Villa',
      category: 'Website',
      imageUrl: 'beachplumvilla-640.png',
      thumbnailUrl: 'beachplumvilla-320.png',
    },
    { title: 'LSG', category: 'Website', imageUrl: 'lsg-600.png', thumbnailUrl: 'lsg-300.png' },
    {
      title: 'Design Factory Qatar',
      category: 'Website',
      imageUrl: 'designfactory-640.png',
      thumbnailUrl: 'designfactory-320.png',
    },
    {
      title: 'vivid',
      category: 'Website',
      imageUrl: 'vivid-600.jpg',
      thumbnailUrl: 'vivid-300.jpg',
    },
    {
      title: 'UniArk',
      category: 'Website',
      imageUrl: 'uniark-600.jpg',
      thumbnailUrl: 'uniark-300.jpg',
    },
    {
      title: 'Dekazle',
      category: 'Website',
      imageUrl: 'dekazledesign-640.jpg',
      thumbnailUrl: 'dekazledesign-320.jpg',
    },
    {
      title: 'Review My Legal Bill',
      category: 'Website',
      imageUrl: 'reviewmylegalbill-600.png',
      thumbnailUrl: 'reviewmylegalbill-300.png',
    },
    {
      title: 'Patanjali Divya Yoga',
      category: 'Website',
      imageUrl: 'patanjali-divya-yoga-600.png',
      thumbnailUrl: 'patanjali-divya-yoga-300.png',
    },
    {
      title: 'Its Ella',
      category: 'Website',
      imageUrl: 'itsella-600.jpg',
      thumbnailUrl: 'itsella-300.jpg',
    },
    {
      title: 'Magrum Holidays',
      category: 'Website',
      imageUrl: 'magrum-holidays-600.png',
      thumbnailUrl: 'magrum-holidays-300.png',
    },
    {
      title: 'Flip book',
      category: 'Website',
      imageUrl: 'newsletter-600.png',
      thumbnailUrl: 'newsletter-300.png',
    },
    {
      title: 'Praxiva',
      category: 'Logo',
      imageUrl: 'praxiva-600.png',
      thumbnailUrl: 'praxiva-300.png',
    },
    { title: 'ICT', category: 'Logo', imageUrl: 'ict-600.png', thumbnailUrl: 'ict-300.png' },
    {
      title: 'KP Metrix',
      category: 'Logo',
      imageUrl: 'kp-metrix-logo-600.png',
      thumbnailUrl: 'kp-metrix-logo-300.png',
    },
    {
      title: 'Panel Partnership',
      category: 'Logo',
      imageUrl: 'panel-partnership-600.png',
      thumbnailUrl: 'panel-partnership-300.png',
    },
  ];

  return (
    <div className="portfolio-page w-full px-5 md:px-8">
      <div className="grid gap-4">
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
