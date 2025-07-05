import project1_img from "../assets/project_1.svg";
import project2_img from "../assets/project_2.svg";
import project3_img from "../assets/project_3.svg";
import project4_img from "../assets/project_4.svg";
import project5_img from "../assets/project_5.svg";
import project6_img from "../assets/project_6.svg";
import newProject from "../assets/newProject.png";
import mentora from "../assets/mentora.png";
import secenek from "../assets/Secenek.png";
import tercihbot from "../assets/Tercihbot.png";

const mywork_data = [
  {
    w_no: 1,
    w_name: "Web design",
    w_desc:
      "As part of my job, I utilized PHP Symfony framework and MySQL to develop the backend service for an educational platform. The platform includes an admin panel for adding programs, managing course content, creating classes, and registering students. It also features an LMS page for parents, students, and teachers to access their current program, participate in live conferences, and view exam assignments, among other functionalities.",
    w_github: "https://github.com/daniyalnamdar",
    w_demo: "https://admin.mymentora.com/",
    w_img: mentora,
  },
  {
    w_no: 2,
    w_name: "Web design",
    w_desc:
      "Our platform allows students to register via phone or web, offering different packages that can be purchased either by the students themselves or by schools. We also integrated services for in-app purchases across Android and iOS, leveraging Apple Connect and Google APIs to manage payments. The system provides a student panel, an exam center panel, and an admin panel, enabling full control over exam centers and facilitating smooth exam processes.",
    w_github: "https://github.com/daniyalnamdar",
    w_demo: "https://app.secenek.club/login",
    w_img: secenek,
  },
  {
    w_no: 3,
    w_name: "Web design",
    w_desc:
      "I developed the complete backend for TercihBot, an online platform that helps students find and compare the best education options tailored to their preferences. Using PHP and Symfony 7, I designed and implemented a robust, maintainable backend architecture with MySQL as the database. My work focused on building efficient APIs, handling complex filtering and scoring logic, and ensuring smooth, secure interactions for thousands of users exploring schools and programs that best match their goals.",
    w_github: "https://github.com/daniyalnamdar",
    w_demo: "https://tercihbot.com/",
    w_img: tercihbot,
  },
  // {
  //   w_no: 3,
  //   w_name: "Web design",
  //   w_desc: "example of work you can find the link to the demo and github.",
  //   w_github: "https://github.com/daniyalnamdar",
  //   w_demo: "https://dev.secenek.club/login",
  //   w_img: project3_img,
  // },
  // {
  //   w_no: 4,
  //   w_name: "Web design",
  //   w_desc: "example of work you can find the link to the demo and github.",
  //   w_github: "https://github.com/daniyalnamdar",
  //   w_demo: "empty",
  //   w_img: project4_img,
  // },
  // {
  //   w_no: 5,
  //   w_name: "Web design",
  //   w_desc: "example of work you can find the link to the demo and github.",
  //   w_github: "https://github.com/daniyalnamdar",
  //   w_demo: "empty",
  //   w_img: project5_img,
  // },
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
