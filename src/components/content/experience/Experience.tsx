import React, { useEffect, useState } from 'react';
import './Experience.scss';
import { ExperienceModel } from '../../../common/model/experience.model';
import { apiFetch } from '../../../http';

const Experience: React.FC = () => {
  const [experiences, setExperiences] = useState<ExperienceModel[]>([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await apiFetch('/api/v1/experiences');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data: ExperienceModel[] = await response.json();

        setExperiences(data);
      } catch (error) {
        console.error('Failed to fetch experiences:', error);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <div className="experience-page w-full px-5 md:px-8">
      <div className="grid grid-nogutter gap-4">
        <h1 className="col-12 p-0 text-4xl text-900 font-bold m-0">Experience</h1>
        <hr className="col-12 p-0 m-0 border-50" />
        <div className="experience-items grid grid-nogutter">
          {experiences.map((item, index) => (
            <div key={index} className="experience-item col-12 md:col-6 lg:col-4 p-3">
              <div className="timeline-content p-3 border-1 border-solid border-round border-50">
                <p className="text-sm text-800 mx-0 my-2">{item.date}</p>
                <p className="text-xl text-900 font-bold mx-0 my-2">{item.title}</p>
                <p className="text-sm text-800 mx-0 my-2">{item.company}</p>
                <p className="mx-0 my-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
