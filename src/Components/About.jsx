import React from "react";
import "./Font.css";

const accordionData = [
  {
    id: 1,
    title: "01 Programming Languages",
    content: [
      "React JS",
      "React Native",
      "Kotlin",
      "Java",
      "Python",
      "C",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    id: 2,
    title: "02 Work Experience",
    content: [
      "Intro to Internet Technology - FTI Laboratory Assistant",
      "Database - FTI Laboratory Assistant",
    ],
  },
  {
    id: 3,
    title: "03 Organization Experience",
    content: [
      "UMN FESTIVAL 2024 - Web Coordinator",
      "Ultimagz - IT Department",
      "Commfest UMN - Security and Equipment",
      "OMB UMN - Person in Charge",
    ],
  },
  {
    id: 4,
    title: "04 Languages",
    content: [
      "Indonesian (Native)",
      "English (Professional working proficiency)",
    ],
  },
];

function About() {
  return (
    <div
      className="box-border w-full h-fit p-10 md:px-20 md:py-10 bg-[#E5E5E5] text-[#7f8692]"
      id="About"
    >
      <h1
        style={{ fontFamily: "Neue Normal, sans-serif" }}
        className="text-5xl"
      >
        About Me
      </h1>
      <div className="w-full mt-6 border-b-[3px] border-[#000000]"></div>

      <div className="box-border flex flex-col w-full h-full gap-12 pt-10 md:flex-row">
        <div className="items-center w-full aboutMeContainer md:w-2/5">
          <h1
            style={{ fontFamily: "Neue Normal, sans-serif" }}
            className="text-md md:text-lg lg:text-2xl"
          >
            I am an undergraduate student majoring in Informatics with a strong
            passion for application development, web development, and software
            engineering.
          </h1>
          <br />
          <h1
            style={{ fontFamily: "Neue Normal, sans-serif" }}
            className="text-md md:text-lg lg:text-2xl"
          >
            My academic background has equipped me with a solid foundation in
            programming and problem-solving, while hands-on projects have
            allowed me to apply these skills practically. My goal is to continue
            developing my technical abilities and contribute to innovative tech
            solutions.
          </h1>
          <div className="inline-flex justify-center mt-4 sm:ml-auto sm:justify-start">
            <a
              href="https://www.facebook.com/edwin.fedoral/"
              target="_blank"
              className="text-black-500"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/edwinflolo/"
              target="_blank"
              className="ml-3 text-black-500"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/edwin-fedora-lolo/"
              target="_blank"
              className="ml-3 text-black-500"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
            <a
              href="https://github.com/EdwinLolo"
              target="_blank"
              className="ml-3 text-black-500"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="w-full accordion md:w-3/5">
          <h1
            style={{ fontFamily: "Neue Normal, sans-serif" }}
            className="text-lg md:text-3xl"
          >
            Your one stop for:
          </h1>
          <div className="w-full join join-vertical">
            {accordionData.map((item) => (
              <div
                key={item.id}
                className="border collapse collapse-arrow join-item border-base-300"
              >
                <input
                  type="radio"
                  name="my-accordion-4"
                  defaultChecked={item.id === 1}
                />
                <div className="text-xl font-medium collapse-title border-b-[3px] border-[#000000]">
                  <h1 style={{ fontFamily: "Neue Normal, sans-serif" }}>
                    {item.title}
                  </h1>
                </div>
                <div className="collapse-content">
                  <ul className="flex flex-wrap">
                    {item.content.map((point, index) => (
                      <li
                        key={index}
                        className={`${
                          item.id === 1 ? "w-1/2" : "w-full"
                        } mb-2 break-words`}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
