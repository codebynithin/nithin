import React from 'react';
import './Experience.scss';

const Experience: React.FC = () => {
  const experiences = [
    {
      date: '2020 - Present',
      title: 'UI Team Lead',
      company: 'Sorice Solutions Pvt. Ltd.',
      description:
        'Leading a UI team in the healthcare domain, architecting scalable MEAN stack applications used by thousands of medical professionals. Recognized by company leadership with a Certificate of Recognition for outstanding performance, dedication, and positive impact — a distinction awarded by the CEO for consistently going above and beyond. Driving technical decisions, mentoring developers, and delivering enterprise-grade solutions with Angular, NativeScript, NestJS, Node.js, Kubernetes, and Azure.',
      certificate: '/images/certificate-of-recognition.png',
      projects: [
        {
          title: '4medica Portal',
          description:
            "Spearheaded the end-to-end UI architecture of 4medica's flagship client portal — a complex, multi-tenant platform that transformed how healthcare organizations manage patients, products, and services. My work directly enabled clients to gain real-time operational visibility at scale.",
          url: 'https://portal.4medica.io/',
        },
        {
          title: '4Health',
          description:
            'Led the UI development of 4Health, a patient-facing platform that bridges lab partners and end customers. Streamlined the report delivery pipeline, reducing friction for users and significantly improving the experience of accessing critical health data.',
          url: 'https://4health.me/',
        },
      ],
    },
    {
      date: '2016 - 2020',
      title: 'Senior Software Engineer',
      company: 'Skyonn Technologies Pvt. Ltd.',
      description:
        'Delivered high-impact UI work as a Wipro contract engineer on globally deployed enterprise products. Built performant, cross-browser interfaces using HTML5, CSS3, JavaScript, Grunt, Ajax, Jenkins, Git, Azure, and RequireJS — serving millions of users worldwide.',
      projects: [
        {
          title: 'Philips Store for Business',
          description:
            'Contributed to a global B2B e-commerce portal for Philips Professional Lighting, used by dealers, distributors, and enterprise customers across the world. My UI work helped unify product discovery and purchasing across multiple Philips brands including Signify and Lumileds.',
          url: 'https://www.b2bshop.philips.com/',
        },
        {
          title: 'Dubai Trade',
          description:
            'Built key UI modules for Dubai Trade — a large-scale shipping and logistics tracking platform that connects buyers, sellers, banks, and government agencies across international trade corridors. The platform handles high-volume trade operations across the UAE and beyond.',
          url: 'https://www.dubaitrade.ae/en/',
        },
      ],
    },
    {
      date: '2012 - 2016',
      title: 'Senior Software Engineer',
      company: 'LSG Technologies India Pvt. Ltd.',
      description:
        'Over 4 years, owned the full UI lifecycle — from design to deployment — across multiple client projects. Delivered responsive websites, interactive UIs, and branded digital assets using HTML5, CSS3, JavaScript, jQuery, and Adobe tools.',
      projects: [
        {
          title: 'Legal Bill Review',
          description:
            'Built the UI for a financial transparency platform that modernized how corporations review and manage legal billing. The solution introduced clarity and accountability into a process that was traditionally opaque and manual.',
          url: '#',
        },
        {
          title: 'Beach Plum Villa',
          description:
            "Solely responsible for the complete UI development of Beach Plum Villa's website — a luxury vacation villa in Wellfleet, Massachusetts. Delivered a polished, visually rich experience that captures the premium feel of the property and drives bookings.",
          url: 'https://beachplumvilla.com/',
        },
      ],
    },
    {
      date: '2011 - 2012',
      title: 'Web / Graphic Designer',
      company: 'Geojit Technologies Pvt. Ltd.',
      description:
        "Designed and delivered a range of digital and print assets — websites, Flash animations, Flex UIs, and branded brochures — for one of India's leading financial services technology companies. Built a strong foundation in visual communication and digital design.",
    },
    {
      date: '2007 - 2010',
      title: 'Junior Executive',
      company: 'Geojit BNP Paribas Financial Services Ltd.',
      description:
        "Gained early professional experience in back-office operations at one of India's largest retail broking firms, developing discipline, attention to detail, and a strong understanding of business operations — the foundation that shaped my technical career.",
    },
  ];

  return (
    <div className="experience-page w-full px-5">
      <div className="grid gap-4">
        <h1 className="col-12 p-0 text-4xl text-900 font-bold m-0">Experience</h1>
        <hr className="col-12 p-0 m-0 border-50" />
        <div className="col-12 p-0">
          <p className="text-lg text-800 mx-0 my-2">
            With over {new Date().getFullYear() - 2012} years of experience, I have led and
            delivered UI solutions for enterprise platforms used by millions of users across
            healthcare, logistics, finance, and e-commerce — from a multi-tenant healthcare portal
            managing critical patient data, to a global B2B platform for Philips and a large-scale
            trade facilitation system across the UAE. As a UI Team Lead, I drive architecture
            decisions, mentor engineers, and set the technical direction for scalable front-end
            systems built on Angular, NativeScript, NestJS, and Node.js. My work has consistently
            turned complex business requirements into polished, high-performance interfaces that
            make a measurable difference — whether that&apos;s reducing friction in health data
            delivery, unifying product discovery for enterprise buyers, or modernizing legacy
            workflows through thoughtful UI design.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiences.map((item, index) => (
            <div key={index} className="p-3">
              <div className="h-full py-3 px-6 border border-solid rounded-lg border-50">
                <p className="text-base text-800 mx-0 my-2">{item.date}</p>
                <p className="text-2xl text-900 font-bold mx-0 my-2">{item.title}</p>
                <p className="text-xl text-800 font-semibold mx-0 my-2">
                  {item.company}
                  {item.certificate && (
                    <span className="certificate-badge">
                      🏅
                      <span className="certificate-tooltip">
                        <img src={item.certificate} alt="Certificate of Recognition" />
                        <span className="certificate-tooltip-label">
                          Certificate of Recognition
                        </span>
                      </span>
                    </span>
                  )}
                </p>
                <p className="text-base text-800 mx-0 my-2">{item.description}</p>

                {item.projects?.length && (
                  <p className="text-lg text-900 font-bold mx-0 my-2">Projects:</p>
                )}
                {item.projects?.map((project, projectIndex) => (
                  <div key={projectIndex} className="mt-3">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <p className="text-lg text-900 font-bold mx-0 my-2">{project.title}</p>
                    </a>
                    <p className="text-base text-800 mx-0 my-2">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
