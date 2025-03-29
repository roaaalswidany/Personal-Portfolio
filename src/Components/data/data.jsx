import React from "react";
import project1 from "../../assets/image/project1.jpg";
import project2 from "../../assets/image/project2.jpg";
import project3 from "../../assets/image/project3.jpg";
import project4 from "../../assets/image/project4.jpg";
import project5 from "../../assets/image/project5.jpg";
import project6 from "../../assets/image/project6.jpg";

const projects = [
  {
    id: 1,
    link: "https://roaaalswidany.github.io/project-1/",
    repo: "https://github.com/roaaalswidany/project-1.git",
    images: project1,
    title: "EduPress",
    languages: ["HTML", "CSS"],
    libraries: ["Bootstrap"],
    description:
      "This website is an online platform for displaying courses in an organized and visually appealing way. It is developed using HTML, CSS, and Bootstrap to ensure a responsive and user-friendly design. The platform offers a seamless experience, allowing users to browse courses, view details, and register easily. It also includes a section for sharing articles and educational content, along with a map feature to help users locate course venues. The design is flexible and fully responsive, ensuring an optimal browsing experience across different devices.",
  },
  {
    id: 2,
    link: "https://roaaalswidany.github.io/project-2/",
    repo: "https://github.com/roaaalswidany/project-2.git",
    images: project2,
    title: "Blog",
    libraries: ["React", "React Router"],
    languages: ["HTML", "CSS", "JavaScript"],
    description:
      "A simple blog platform developed using React, HTML, CSS, and JavaScript. It allows users to browse all posts, along with a sign-in and sign-up system. The project features a responsive and user-friendly design, providing a seamless experience for reading and interacting with blog posts.",
  },
  {
    id: 3,
    link: "https://roaaalswidany.github.io/project-3/",
    repo: "https://github.com/roaaalswidany/project-3.git",
    images: project3,
    title: "Demo Site",
    languages: ["HTML", "CSS", "JavaScript"],
    description:
      "An interactive website I'm developing to showcase my front-end programming skills using HTML, CSS, and JavaScript. It features a dynamic interface that allows for changing lighting settings, customizing text colors, and an interactive image gallery that displays images on click. The project combines simplicity and professionalism, reflecting my ability to implement creative ideas with a flexible and seamless user experience.",
  },
  {
    id: 4,
    link: "https://roaaalswidany.github.io/project-4/",
    repo: "https://github.com/roaaalswidany/project-4.git",
    images: project4,
    title: "Cozy",
    languages: ["HTML", "CSS", "JavaScript"],
    description:
      "The site is characterized by searching for the favorite product easily through a fast search engine. Cart. Add products to the cart with the click of a button and manage its contents (delete/modify the quantity). Special offers. Benefit from exclusive discounts on selected products. Interactive experience. Elegant user interface with smooth animations and responsive design. Easy management. Complete control over the shopping process from selection to confirmation.",
  },
  {
    id: 5,
    link: "#",
    repo: "https://github.com/roaaalswidany/project-5.git",
    images: project5,
    title: "Manage Posts",
    languages: ["HTML", "CSS", "JavaScript"],
    description:
      "It was developed using basic web technologies (HTML, CSS, JavaScript) to offer an intuitive interface that combines advanced functionality with a seamless user experience. Once you're inside the platform, you'll notice that everything is designed to save you time: from creating a new post via a clear add form, to editing existing content with the auto-save feature, to deleting posts with the click of a button.",
  },
  {
    id: 6,
    link: "https://roaaalswidany.github.io/Dashboard/",
    repo: "https://github.com/roaaalswidany/Dashboard.git",
    images: project6,
    title: "Dashboard",
    libraries: ["React", "React Router"],
    languages: ["HTML", "CSS", "JavaScript"],
    description:
      "An administrative platform developed with React technologies for a smooth and secure experience. It enables secure login and a secure login/logout system that ensures the privacy of your data.A dynamic dashboard displays products in an organized manner with instant updates. Easily add, edit, or delete new products through an interactive interface. A clean user interface with seamless interactions that adapt to different devices.From login to logout, it transforms administrative tasks into a fun and efficient experience!",
  },
];

export default projects;
