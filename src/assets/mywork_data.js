import newProject from "../assets/newProject.png";
import mentora from "../assets/mentora.png";
import secenek from "../assets/Secenek.png";
import tercihbot from "../assets/Tercihbot.png";
import baumentora from "../assets/BauMentora.png";

const mywork_data = [
  {
    w_no: 1,
    w_name: "Educational Platform – MyMentora",
    w_desc:
      "As part of my job, I utilized PHP Symfony framework and MySQL to develop the backend service for an educational platform. The platform includes an admin panel for adding programs, managing course content, creating classes, and registering students. It also features an LMS page for parents, students, and teachers to access their current program, participate in live conferences, and view exam assignments, among other functionalities.",
    w_github: "https://github.com/daniyalnamdar",
    w_demo: "https://admin.mymentora.com/",
    w_img: mentora,
  },
  {
    w_no: 2,
    w_name: "Language Learning Platform – BAU MyMentora",
    w_desc:
      "BAU MyMentora is a university-level language learning platform designed to help students prepare for exams through courses, assignments, and live messaging. I built the backend with Symfony 7 and MySQL, using Docker and AWS for scalable deployment. The system supports Admin, Teacher, and Student roles with tailored access controls and real-time communication via Mercure and Symfony Messenger. I also wrote comprehensive unit, integration, functional, and smoke tests to ensure reliability and smooth production releases.",
    w_github: "https://github.com/daniyalnamdar",
    w_demo: "https://baumentora.com/login",
    w_img: baumentora,
  },
  {
    w_no: 3,
    w_name: "School Finder Platform – TercihBot",
    w_desc:
      "I developed the complete backend for TercihBot, an online platform that helps students find and compare the best education options tailored to their preferences. Using PHP and Symfony 7, I designed and implemented a robust, maintainable backend architecture with MySQL as the database. My work focused on building efficient APIs, handling complex filtering and scoring logic, and ensuring smooth, secure interactions for thousands of users exploring schools and programs that best match their goals.",
    w_github: "https://github.com/daniyalnamdar",
    w_demo: "https://tercihbot.com/",
    w_img: tercihbot,
  },
  // {
  //   w_no: 4,
  //   w_name: "Secenek",
  //   w_desc:
  //     "Our platform allows students to register via phone or web, offering different packages that can be purchased either by the students themselves or by schools. We also integrated services for in-app purchases across Android and iOS, leveraging Apple Connect and Google APIs to manage payments. The system provides a student panel, an exam center panel, and an admin panel, enabling full control over exam centers and facilitating smooth exam processes.",
  //   w_github: "https://github.com/daniyalnamdar",
  //   w_demo: "https://app.secenek.club/login",
  //   w_img: secenek,
  // },
  // {
  {
    w_no: 6,
    w_name: "Web design",
    w_desc: "example of work you can find the link to the demo and github.",
    w_github: "https://github.com/daniyalnamdar",
    w_demo: "empty",
    w_img: newProject,
  },
];

export default mywork_data;
