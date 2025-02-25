// import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";

const Experience = () => {
  const experiences = [
    {
      job: "Front-End Developer",
      company: "Alex Apps",
      date: "2022 - Present",
      responsibilities: [
        "Implementing reusable components.",
        "Participating in large scale application.",
        "Working on the performance of web applications.",
        "Generating new ideas for better user experience.",
      ],
    },
    {
      job: "Course Instructor",
      company: "Nucamp",
      date: "2023 - Present",
      responsibilities: [
        "Explaining and facilitating web development concepts.",
        "Help students with their assignments and grade them weekly.",
        "Provide support for students through their learning journey.",
      ],
    },
    {
      job: "Course Instructor",
      company: "Sprints",
      date: "2024 - Present",
      responsibilities: [
        "Teaching JavaScript, React and TailwindCSS.",
        "Participating in preparing course materials.",
        "Helping students through their way in learning web development technologies.",
      ],
    },
  ];
  interface ExperienceInfoProps {
    number: string | number;
    text: string;
  }

  const ExperienceInfo = ({ number, text }: ExperienceInfoProps) => {
    return (
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold text-6xl text-cyan">{number}</p>
        <p className="font-bold text-xl text-lightGrey uppercase -mt-4">{text}</p>
      </div>
    );
  };
  interface Experience {
    job: string;
    company: string;
    date: string;
    responsibilities: string[];
  }
  
  // Interface for SingleExperience Props
  interface SingleExperienceProps {
    experience: Experience;
  }
  
  const SingleExperience = ({ experience }: SingleExperienceProps) => {
    
    return (
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4 bg-white bg-opacity-10 backdrop-blur-sm"
      >
        <p className="font-bold text-cyan">{experience.job}</p>
        <p className="text-orange">{experience.company}</p>
        <p className="text-lightGrey">{experience.date}</p>
        <ul className="list-disc mt-4 pl-4">
          {experience.responsibilities.map((resp: string, index: number) => {
            return <li key={index}>{resp}</li>;
          })}
        </ul>
      </motion.div>
    );
  };

  const AllExperiences = () => {
    return (
      <div className="flex md:flex-row sm:flex-col items-center justify-between">
        {experiences.map((experience, index) => {
          return (
            <>
              <SingleExperience key={index} experience={experience} />
              {index < 2 ? (
                <motion.div
                  variants={fadeIn("right", 0)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                >
                  {/* <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" /> */}
                </motion.div>
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
    );
  };

  const ExperienceText = () => {
    return (
      <div className="flex flex-col items-center mt-[100px]">
        <h2 className="text-6xl text-cyan mb-10">Experience</h2>
      </div>
    );
  };

  const ExperienceTopLeft = () => {
    return (
      <div className="flex flex-col gap-6 w-[300px]">
        <p className="text-orange font-bold uppercase text-3xl font-special text-center">
          Since 2022
        </p>
        <div className="flex justify-center items-center gap-4">
          <ExperienceInfo number="3" text="Years" />
          <p className="font-bold text-6xl text-lightBrown">-</p>
          <ExperienceInfo number="23" text="Websites" />
        </div>
        <p className="text-center">
          With 3 years of experience building dynamic and user-friendly web
          applications.
        </p>
        <ExperienceInfo number="$100k" text="Max Budget" />
      </div>
    );
  };

  const ExperienceTopMiddle = () => {
    return (
      <div className="lg:w-[35%] md:w-[50%] sm:w-[80%] ">
        <img src="../../public/images/ex.png" alt="my experience" className=" rounded-xl w-[450px] h-[3s50px]" />
      </div>
    );
  };

  const ExperienceTopRight = () => {
    return (
      <div className="xl:w-[25%] lg:w-[30%] border border-lightBrown p-4 rounded-xl bg-white bg-opacity-10 backdrop-blur-sm">
        <p className="text-lg text-center text-lightGrey">
          I specialize in{" "}
          <span className="font-bold text-white">React and modern JavaScript</span>
          , leveraging best practices to create scalable and maintainable
          solutions. <br />
          My experience spans working on diverse projects, from small business
          websites to{" "}
          <span className="font-bold text-white">complex front-end systems</span>,
          always aiming for clean code and exceptional user experiences.
        </p>
      </div>
    );
  };

  const ExperienceTop = () => {
    return (
      <div className="flex lg:flex-row sm:flex-col gap-2 items-center justify-center">
        <ExperienceTopLeft />
        <ExperienceTopMiddle />
        <ExperienceTopRight />
      </div>
    );
  };

  return (
    <div
      id="experience"
      className=" mx-auto px-4 py-16 bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-500"
    >
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ExperienceText />
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ExperienceTop />
      </motion.div>
      <div className="w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden"></div>
      <AllExperiences />
    </div>
  );
};

export default Experience;