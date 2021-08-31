//Projects Section
// import SNS from './images/landingpage groups.png'

//About
import Avatar from "./images/Giang Cycle.jpg"

// Skills Icons
import htmlIcon from "./images/skills/html5.svg"
import cssIcon from "./images/skills/css.svg"
import reactIcon from "./images/skills/react-2.svg"
import jsIcon from "./images/skills/javascript.svg"
import designIcon from "./images/skills/figma.svg"
import gatsbyIcon from "./images/skills/gatsby.svg"

// Social Icon
import githubIcon from "./images/skills/github.svg"
import linkedinIcon from "./images/linkedin.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Giang",
  headerTagline: [
    //Line 1 For Header
    "A curious",
    //Line 2 For Header
    "front-end",
    //Line 3 For Header
    "developer",
  ],
  //   Header Paragraph
  headerParagraph:
    // "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    " ",
  //Contact Email
  contactEmail: "giangngohong@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Parcel Tracking App", //Project Title - Add Your Project Title Here
      para:
        "A parcel tracking app that allows its users to login and view their packages and the packages progress. It has live tracking with a web map and also a world view to show where all the packages currently are.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: "ptracker.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://reactbox-sda.web.app/",
    },
    {
      title: "Blog", //Project Title - Add Your Project Title Here
      para:
        "A clean minimalist styled blog and of course, responsive; where I practice CSS Grids, Flex Box, React Hooks, Pagination", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: "blog.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/nh-g/parenting-blog",
    },
      
    {
      title: "Cake Shop Website", //Project Title - Add Your Project Title Here
      para:
        "A proposal website for a cake shop that sells cup cakes and wedding cakes. It has a products page as well as about us page and contact us page.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: "cakery desktop.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://cakery-ngo.web.app",
    },
    {
      title: "Social Media Platform", //Project Title - Add Your Project Title Here
      para:
        "A user-generated content platform that focuses on group developments. Users can create, edit, delete their own login credentials and profile information. Users can create, search, and join or leave groups as well as get group' feeds. Users can also create, edit, and delete their own posts, comments.",
      //Project Image - Add Your Project Image Here
      imageSrc: "landingpage groups.jpg",
      // "../../images/landingpage groups.png",
      //Project URL - Add Your Project Url Here
      url: "https://landing-page-23e74.web.app/",
    }
    // {
    //   title: "Project Five", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },
    // {
    //   title: "Project Six", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutPara0: "Hi, I am Giang.",
  aboutPara1:
    "Grew up in Vietnam. After university graduation, I moved to Tokyo where I worked in consulting, business development, project management for major players in HR and IT there.",
  aboutPara2:
    "Moving to Stockholm in 2018, I took a challenge starting a family in a new continent.",
  aboutPara3:
    "With a beautiful chaos since the born of my child and what-called new mom crisis, I find programming as a meditation to connect to my own sanity. ",
  aboutPara4:
    "My field of expertise which maybe of use to you, dear visitor, lies in the following: ",
  aboutPara5: "ー  UI/UX design ",
  aboutPara6: "ー  Responsive and interactive design",
  aboutPara7: "ー  Web development ",
  aboutImage: Avatar,
  // "./images/Giang Cycle.JPG",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para: "HTML",
    },
    {
      img: cssIcon,
      para: "CSS - SCSS - SASS",
    },
    {
      img: jsIcon,
      para: "Javascript",
    },
    {
      img: reactIcon,
      para: "React",
    },
    {
      img: designIcon,
      para: "Figma",
    },
    {
      img: gatsbyIcon,
      para: "Gatsby",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Say Hi for find me on other platforms:",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/nh-g" },
    // {
    //   img: codepenIcon,
    //   url: "https://www.codepen.com/",
    // },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/nh-g/",
    },
    // {
    //   img: instagramIcon,
    //   url: "https://www.instagram.com/",
    // },
  ],

  // End Contact Section ---------------
}
