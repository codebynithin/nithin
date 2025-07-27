/* eslint-disable no-unused-vars, no-undef */
import React, { useState, useEffect } from 'react';
import './About.scss';
import { apiFetch } from '../../../http';
import { SkillModel } from '../../../common/model/skill.model';
import { SkillCategoryEnum } from '../../../common/enum/skill-category.enum';

const About: React.FC = () => {
  const [skills, setSkills] = useState<Record<SkillCategoryEnum, SkillModel[]>>();

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await apiFetch('/api/v1/skills');
        const data = await response.json();
        const groupedSkills = data.reduce(
          (acc: Record<SkillCategoryEnum, SkillModel[]>, skill: SkillModel) => {
            const { category } = skill;

            if (!acc[category]) {
              acc[category] = [];
            }

            acc[category].push(skill);

            return acc;
          },
          {},
        );

        console.log(groupedSkills);
        setSkills(groupedSkills);
      } catch (error) {
        console.error('Failed to fetch skills:', error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="about-page w-full px-5 md:px-8">
      <div className="w-full grid grid-nogutter gap-4">
        <h1 className="col-12 p-0 text-4xl text-900 font-bold m-0">About Me</h1>
        <hr className="col-12 p-0 m-0 border-50" />
        <div className="w-full flex flex-column md:flex-row gap-8">
          <div className="col p-0">
            <h2 className="text-2xl text-900 font-bold mb-4">Biography</h2>
            <p>
              I&apos;m a passionate and results-oriented Full Stack Developer with a solid
              foundation in building end-to-end digital solutions across both product-driven and
              corporate environments. With hands-on experience in architecting, developing, and
              deploying full-scale web and mobile applications, I bring a strong blend of technical
              expertise and business awareness to every project I take on.{' '}
            </p>
            <p>
              In product development, I focus on delivering intuitive, high-performance applications
              that solve real user problems and scale with business growth. From ideation to
              release, I actively contribute to UX decisions, code quality, performance
              optimization, and continuous improvement.
            </p>
            <p>
              Within corporate teams, I thrive in structured, goal-oriented environments where
              collaboration, efficiency, and innovation drive success. I&apos;ve led and worked in
              cross-functional teams, delivering under tight deadlines while maintaining high
              standards of quality and security.
            </p>
            <p>
              I&apos;m a fast learner, creative thinker, and problem-solver who embraces challenges
              and adapts quickly to evolving technologies. Whether leading initiatives or working
              independently, I remain committed to delivering impactful results.
            </p>

            <hr className="my-4 border-50" />

            <h2 className="text-2xl text-900 font-bold mb-4">Personal Information</h2>

            <ul className="info list-none p-0 m-0">
              <li className="flex align-items-center py-2">
                <strong className="w-7rem md:w-12rem font-medium">Age</strong>
                <span>{new Date().getFullYear() - 1986}</span>
              </li>
              <li className="flex align-items-center py-2">
                <strong className="w-7rem md:w-12rem font-medium">Mobile</strong>
                <a href="tel:+919496334758">+91 9496 334 758</a>
              </li>
              <li className="flex align-items-center py-2">
                <strong className="w-7rem md:w-12rem font-medium">Email</strong>
                <a href="mailto:maili2nithin@gmail.com">mails2nithin@gmail.com</a>
              </li>
              <li className="flex align-items-center py-2">
                <strong className="w-7rem md:w-12rem font-medium">Address</strong>
                <span>Ernakulam, Kerala</span>
              </li>
              <li className="flex align-items-center py-2">
                <strong className="w-7rem md:w-12rem font-medium">Residence</strong>
                <span>Indian</span>
              </li>
            </ul>

            {skills && skills[SkillCategoryEnum.PROFICIENCY] && (
              <div className="col-12 md:col-6 py-4 px-0 mt-4">
                <h3 className="text-xl text-900 font-bold mt-0 mb-4">Language Proficiency</h3>
                {skills[SkillCategoryEnum.PROFICIENCY].map((skill: any, index: number) => (
                  <div
                    key={index}
                    className={
                      index < skills[SkillCategoryEnum.PROFICIENCY].length - 1 ? 'mb-4' : ''
                    }
                  >
                    <div className="flex justify-content-between mb-2">
                      <span>{skill.name}</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1rem h-1rem border-circle ${
                            i < skill.percentage / 10 ? 'bg-primary' : 'surface-50'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="col p-0 relative" id="skills">
            <hr className="my-4 border-50 md:absolute md:top-0 md:left-0 md:h-full md:my-0 spacer" />
            <h2 className="text-2xl text-900 font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-4">
              {skills && skills[SkillCategoryEnum.CODING] && (
                <div className="w-full md:w-6">
                  <div className="p-4 border-1 border-solid border-round border-50">
                    <h3 className="text-xl text-900 font-bold mt-0 mb-4">
                      FrameWorks &amp; Coding
                    </h3>
                    <div className="flex gap-4 justify-content-center">
                      {skills[SkillCategoryEnum.CODING]
                        .slice(0, 2)
                        .map((skill: any, index: number) => (
                          <div key={index} className="text-center">
                            <div
                              className="w-8rem h-8rem border-circle surface-50 flex align-items-center justify-content-center mb-2 mx-auto"
                              style={{
                                background: `conic-gradient(var(--p-primary-color) ${skill.percentage}%, var(--surface-50) 0)`,
                              }}
                            >
                              <div className="w-6rem h-6rem border-circle surface-0 flex align-items-center justify-content-center font-bold text-2xl">
                                {skill.percentage}%
                              </div>
                            </div>
                            <span>{skill.name}</span>
                          </div>
                        ))}
                    </div>
                    <div className="flex gap-4 justify-content-center mt-4">
                      {skills[SkillCategoryEnum.CODING]
                        .slice(2, 4)
                        .map((skill: any, index: number) => (
                          <div key={index} className="text-center">
                            <div
                              className="w-8rem h-8rem border-circle surface-50 flex align-items-center justify-content-center mb-2 mx-auto"
                              style={{
                                background: `conic-gradient(var(--p-primary-color) ${skill.percentage}%, var(--surface-50) 0)`,
                              }}
                            >
                              <div className="w-6rem h-6rem border-circle surface-0 flex align-items-center justify-content-center font-bold text-2xl">
                                {skill.percentage}%
                              </div>
                            </div>
                            <span>{skill.name}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}

              {skills && skills[SkillCategoryEnum.DESIGN] && (
                <div className="w-full md:w-5">
                  <div className="p-4 border-1 border-solid border-round border-50">
                    <h3 className="text-xl text-900 font-bold mt-0 mb-4">Design</h3>
                    {skills[SkillCategoryEnum.DESIGN].map((skill: any, index: number) => (
                      <div
                        key={index}
                        className={
                          index < skills[SkillCategoryEnum.DESIGN].length - 1 ? 'mb-4' : ''
                        }
                      >
                        <div className="flex justify-content-between mb-1">
                          <span>{skill.name}</span>
                        </div>
                        <div className="surface-50 border-round" style={{ height: '8px' }}>
                          <div
                            className="bg-primary border-round"
                            style={{ width: `${skill.percentage}%`, height: '8px' }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {skills && skills[SkillCategoryEnum.KNOWLEDGE] && (
                <div className="w-full md:w-6">
                  <div className="p-4 border-1 border-solid border-round border-50">
                    <h3 className="text-xl text-900 font-bold mt-0 mb-4">Knowledge</h3>
                    <ul className="list-none p-0 m-0">
                      {skills[SkillCategoryEnum.KNOWLEDGE].map((skill: any, index: number) => (
                        <li
                          key={index}
                          className={`flex align-items-center my-3 ${
                            index < skills[SkillCategoryEnum.KNOWLEDGE].length - 1 ? 'mb-2' : ''
                          }`}
                        >
                          <i className="icon cbn-target text-primary mr-2"></i>
                          <span>{skill.name}</span>
                        </li>
                      ))}
                    </ul>
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
