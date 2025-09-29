/* eslint-disable no-unused-vars, no-undef */
import React from 'react';
import './About.scss';
import { SkillCategoryEnum } from '../../../common/enum/skill-category.enum';

const About: React.FC = () => {
  const skills = {
    design: [
      {
        name: 'Web Designing',
        category: 'design',
        percentage: 95,
        type: 'progress-bar',
      },
      {
        name: 'Photoshop',
        category: 'design',
        percentage: 90,
        type: 'progress-bar',
      },
      {
        name: 'Figma',
        category: 'design',
        percentage: 85,
        type: 'progress-bar',
      },
      {
        name: 'Illustrator',
        category: 'design',
        percentage: 80,
        type: 'progress-bar',
      },
      {
        name: 'InDesign',
        category: 'design',
        percentage: 70,
        type: 'progress-bar',
      },
    ],
    proficiency: [
      {
        name: 'English',
        category: 'proficiency',
        percentage: 90,
        type: 'dots',
      },
      {
        name: 'Malayalam',
        category: 'proficiency',
        percentage: 100,
        type: 'dots',
      },
      {
        name: 'Hindi',
        category: 'proficiency',
        percentage: 70,
        type: 'dots',
      },
    ],
    coding: [
      {
        name: 'HTML5 / CSS3 / SASS / Bootstrap / Tailwind CSS / Markdown',
        category: 'coding',
        percentage: 95,
        type: 'circular-progress',
      },
      {
        name: 'Angular / React / NativeScript / ExpressJs / JavaScript / Typescript',
        category: 'coding',
        percentage: 90,
        type: 'circular-progress',
      },
      {
        name: 'Vue / Flutter / Ionic / Git / Ajax',
        category: 'coding',
        percentage: 80,
        type: 'circular-progress',
      },
      {
        name: 'NestJs / Grunt / Sonar / PHP',
        category: 'coding',
        percentage: 75,
        type: 'circular-progress',
      },
    ],
    knowledge: [
      {
        name: 'Web Application',
        category: 'knowledge',
        type: 'list',
      },
      {
        name: 'Mobile Application',
        category: 'knowledge',
        type: 'list',
      },
      {
        name: 'Website Hosting',
        category: 'knowledge',
        type: 'list',
      },
      {
        name: 'Create Logo Design',
        category: 'knowledge',
        type: 'list',
      },
      {
        name: 'Design for Print',
        category: 'knowledge',
        type: 'list',
      },
      {
        name: 'Modern and Mobile Ready Websites',
        category: 'knowledge',
        type: 'list',
      },
      {
        name: 'Search Engine Marketing',
        category: 'knowledge',
        type: 'list',
      },
      {
        name: 'Graphics and Animations',
        category: 'knowledge',
        type: 'list',
      },
    ],
  };

  return (
    <div className="about-page w-full px-5 md:px-8">
      <div className="w-full flex flex-col gap-4">
        <h1 className="col-12 p-0 text-4xl text-900 font-bold m-0">About Me</h1>
        <hr className="col-12 p-0 m-0 border-50" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col p-0">
            <h2 className="text-2xl text-900 font-bold mb-4">Biography</h2>
            <p>
              I am a UI Team Lead with over {new Date().getFullYear() - 2012} years of experience in
              software development, specializing in the MEAN stack and modern front-end frameworks.
              Currently, I lead UI development in the healthcare domain at Sorice Solutions Pvt.
              Ltd., where I focus on scalable architecture, mentoring teams, and delivering
              user-centric applications. Over the years, I’ve worked on enterprise projects with
              Wipro (via Skynonn Technologies), gaining strong exposure to automation, cloud
              integration, and CI/CD practices, and with LSG Technologies, where I strengthened my
              expertise in responsive web design and UI/UX development.
            </p>
            <p>
              Earlier in my career, I also worked as a Web/Graphic Designer and in operations, which
              gave me a broader perspective in both technology and business processes. This mix of
              technical leadership, hands-on development, and creative problem-solving helps me
              approach projects holistically — balancing user experience, performance, and business
              goals.
            </p>

            <hr className="my-4 border-50" />

            <h2 className="text-2xl text-900 font-bold mb-4">Personal Information</h2>

            <ul className="info list-none p-0 m-0">
              <li className="flex items-center py-2">
                <strong className="w-[9rem] md:w-[12rem] font-medium">Age</strong>
                <span>{new Date().getFullYear() - 1986}</span>
              </li>
              <li className="flex items-center py-2">
                <strong className="w-[9rem] md:w-[12rem] font-medium">Mobile</strong>
                <a href="tel:+919496334758">+91 9496 334 758</a>
              </li>
              <li className="flex items-center py-2">
                <strong className="w-[9rem] md:w-[12rem] font-medium">Email</strong>
                <a href="mailto:maili2nithin@gmail.com">mails2nithin@gmail.com</a>
              </li>
              <li className="flex items-center py-2">
                <strong className="w-[9rem] md:w-[12rem] font-medium">Address</strong>
                <span>Ernakulam, Kerala</span>
              </li>
              <li className="flex items-center py-2">
                <strong className="w-[9rem] md:w-[12rem] font-medium">Residence</strong>
                <span>Indian</span>
              </li>
            </ul>

            <hr className="my-4 border-50" />

            {skills && skills[SkillCategoryEnum.PROFICIENCY] && (
              <div className="col-12 md:col-6 py-4 px-0 mt-4">
                <h3 className="text-xl text-900 font-bold mt-0 mb-4">Language Proficiency</h3>
                {skills[SkillCategoryEnum.PROFICIENCY].map((skill: any, index: number) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 mb-4 ${
                      index < skills[SkillCategoryEnum.PROFICIENCY].length - 1 ? 'mb-4' : ''
                    }`}
                  >
                    <div className="w-[9rem] md:w-[12rem]">
                      <span>{skill.name}</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-[1rem] h-[1rem] rounded-full ${
                            i < skill.percentage / 10
                              ? 'bg-blue-500'
                              : 'bg-gray-200 dark:bg-gray-700'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="col p-0 pl-0 md:pl-8 relative" id="skills">
            <h2 className="text-2xl text-900 font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-5">
              {skills && skills[SkillCategoryEnum.CODING] && (
                <div className="w-full md:w-[48%]">
                  <div className="p-4 border-1 border-solid border-round border-50">
                    <h3 className="text-xl text-900 font-bold mt-0 mb-4">
                      FrameWorks &amp; Coding
                    </h3>
                    <div className="grid grid-cols-2 gap-6 justify-center">
                      {skills[SkillCategoryEnum.CODING].map((skill: any, index: number) => (
                        <div key={index} className="text-center">
                          <div className="flex items-center justify-center mb-4">
                            <div className="relative w-[9rem] h-[9rem] rounded-full bg-gray-200 dark:bg-gray-700">
                              <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                  background: `conic-gradient(#3b82f6 0% ${skill.percentage}%, ${
                                    document.documentElement.classList.contains('dark')
                                      ? '#374151'
                                      : '#e5e7eb'
                                  } ${skill.percentage}% 100%)`,
                                }}
                              ></div>
                              <div className="absolute inset-2 flex items-center justify-center rounded-full bg-white dark:bg-gray-800">
                                <span className="text-blue-500 font-bold">{skill.percentage}%</span>
                              </div>
                            </div>
                          </div>

                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {skills && skills[SkillCategoryEnum.KNOWLEDGE] && (
                <div className="w-full md:w-[48%]">
                  <div className="p-4 border-1 border-solid border-round border-50">
                    <h3 className="text-xl text-900 font-bold mt-0 mb-4">Knowledge</h3>
                    <ul className="list-none p-0 m-0">
                      {skills[SkillCategoryEnum.KNOWLEDGE].map((skill: any, index: number) => (
                        <li
                          key={index}
                          className={`flex items-center my-3 ${
                            index < skills[SkillCategoryEnum.KNOWLEDGE].length - 1 ? 'mb-2' : ''
                          }`}
                        >
                          <i className="icon cbn-target mr-2 text-gray-400"></i>
                          <span>{skill.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {skills && skills[SkillCategoryEnum.DESIGN] && (
                <div className="w-full md:w-[48%]">
                  <div className="p-4 border-1 border-solid border-round border-50">
                    <h3 className="text-xl text-900 font-bold mt-0 mb-4">Design</h3>
                    {skills[SkillCategoryEnum.DESIGN].map((skill: any, index: number) => (
                      <div
                        key={index}
                        className={
                          index < skills[SkillCategoryEnum.DESIGN].length - 1 ? 'mb-4' : ''
                        }
                      >
                        <div className="flex justify-between mb-1">
                          <span>{skill.name}</span>
                        </div>
                        <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded">
                          <div
                            className="h-2 bg-blue-500 rounded transition-all duration-300"
                            style={{ width: `${skill.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
