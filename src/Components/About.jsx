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
    title: "02 Experience",
    content: [
      "Intro to Internet Technology - FTI Laboratory Assistant",
      "Database - FTI Laboratory Assistant",
    ],
  },
  {
    id: 3,
    title: "03 Languages",
    content: [
      "Indonesian (Native)",
      "English (Professional working proficiency)",
    ],
  },
];

function About() {
  return (
    <div
      className="box-border w-full h-fit p-10 md:px-20 md:py-10 bg-[#E5E5E5]"
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
              className="text-black-500"
              href="https://www.facebook.com/edwin.fedoral"
              target="_blank"
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
              className="ml-3 text-black-500"
              href="https://www.instagram.com/edwinflolo/"
              target="_blank"
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
              className="ml-3 text-black-500"
              href="https://www.linkedin.com/in/edwin-fedora-lolo"
              target="_blank"
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
              className="ml-3 text-black-500"
              href="https://www.github.com/EdwinLolo"
              target="_blank"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 30 30"
              >
                <path
                  stroke="none"
                  d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
                ></path>
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
                  {/* Gunakan Flexbox untuk menata daftar item dalam 2 kolom per baris */}
                  <ul className="flex flex-wrap">
                    {item.content.map((point, index) => (
                      <li key={index} className="w-1/2 mb-2 break-words">
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