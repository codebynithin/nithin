import React, { useEffect, useState } from 'react';
import './Education.scss';
import { EducationModel } from '../../../common/model/education.model';

const Education: React.FC = () => {
  const [educations, setEducations] = useState<EducationModel[]>([]);

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const data: EducationModel[] = [
          {
            date: '2008 - 2009',
            title: 'Web Designing and Animation',
            institution: 'Cochin CADD Center, Kochi',
            description: 'Completed certification course in Web Designing and Animation.',
          },
          {
            date: '2003 - 2006',
            title: 'Diploma in Polymer Technology',
            institution: 'Technical Education Department Kerala',
            description: 'Completed 3 year diploma course with 73% of marks.',
          },
          {
            date: '2001 - 2003',
            title: 'VHSE in Refrigerator and Air Conditioning',
            institution: 'Technical Education Department Kerala',
            description:
              'Completed 2 year vocational and higher secondary course in Refrigerator and Air Conditioning with 67% of marks.',
          },
        ];

        setEducations(data);
      } catch (error) {
        console.error('Failed to fetch educations:', error);
      }
    };

    fetchEducations();
  }, []);

  return (
    <div className="education-page w-full px-5">
      <div className="grid gap-4">
        <h1 className="col-12 p-0 text-4xl text-900 font-bold m-0">Education</h1>
        <hr className="col-12 p-0 m-0 border-50" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {educations.map((item, index) => (
            <div key={index} className="p-3">
              <div className="h-full p-3 border border-solid rounded-lg border-50">
                <p className="text-sm text-800 mt-0 mb-2">{item.date}</p>
                <p className="text-2xl text-900 font-bold m-0">{item.title}</p>
                <p className="text-xl text-800 font-semibold mt-1 mb-2">{item.institution}</p>
                <p className="text-base text-800 mt-1 mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
