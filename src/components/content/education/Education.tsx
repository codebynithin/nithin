import React, { useEffect, useState } from 'react';
import './Education.scss';
import { EducationModel } from '../../../common/model/education.model';
import { apiFetch } from '../../../http';

const Education: React.FC = () => {
  const [educations, setEducations] = useState<EducationModel[]>([]);

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const response = await apiFetch('/api/v1/educations');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data: EducationModel[] = await response.json();

        setEducations(data);
      } catch (error) {
        console.error('Failed to fetch educations:', error);
      }
    };

    fetchEducations();
  }, []);

  return (
    <div className="education-page w-full px-5 md:px-8">
      <div className="grid grid-nogutter gap-4">
        <h1 className="col-12 p-0 text-4xl font-bold m-0">Education</h1>
        <hr className="col-12 p-0 m-0 border-50" />
        <div className="timeline">
          {educations.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content p-3 border-1 border-solid border-round border-50">
                <p className="text-sm text-500 mt-0 mb-2">{item.date}</p>
                <h3 className="text-xl m-0">{item.title}</h3>
                <p className="text-sm text-500 mt-1 mb-2">{item.institution}</p>
                <p className="m-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
