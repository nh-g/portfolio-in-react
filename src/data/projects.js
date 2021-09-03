import vegan from "../assets/images/projects/vegan.jpg";
import packageTracker from "../assets/images/projects/package.jpg";
import todo from "../assets/images/projects/todo.jpg";
import ecommerce from "../assets/images/projects/ecommerce.jpg";
import bbq from "../assets/images/projects/bbq.jpg";
import learning from "../assets/images/projects/learning.jpg";
import netflix from "../assets/images/projects/netflix.jpg";

export function getProjects() {
  let locked = false;

  return [
    {
      description: "Description",
      skills: ["Some", "other", "third"],
      isLocked: false,
      name: "Vegan Restaurant Website",
      image: vegan,
      hosting: "https://github.com/nh-g",
      repository: "https://github.com/nh-g/portfolio-in-react",
    },
    {
      description: "some",
      skills: ["Some", "other", "third"],
      isLocked: locked,
      name: "Package Tracker",
      image: packageTracker,
      hosting: "https://github.com/nh-g",
      repository: "https://github.com/nh-g/portfolio-in-react",
    },
    {
      description: "some",
      skills: ["Some", "other", "third"],
      isLocked: locked,
      name: "Todo list TDD",
      image: todo,

      hosting: "https://github.com/nh-g",
      repository: "https://github.com/nh-g/portfolio-in-react",
    },
    {
      description: "some",
      skills: ["Some", "other", "third"],
      isLocked: locked,
      name: "e-Commerce website",
      image: ecommerce,

      hosting: "https://github.com/nh-g",
      repository: "https://github.com/nh-g/portfolio-in-react",
    },
    {
      description: "some",
      skills: ["Some", "other", "third"],
      isLocked: locked,
      name: "BBQ restaurant website",
      image: bbq,
      hosting: "https://github.com/nh-g",
      repository: "https://github.com/nh-g/portofolio",
    },
    {
      description: "some",
      skills: ["Some", "other", "third"],
      isLocked: locked,
      name: "Learning platform",
      image: learning,
      hosting: "https://github.com/nh-g",
      repository: "https://github.com/nh-g/portofolio",
    },
    {
      description: "some",
      skills: ["Some", "other", "third"],
      isLocked: locked,
      name: "Netflix clone",
      image: netflix,
      hosting: "https://github.com/nh-g",
      repository: "https://github.com/nh-g/portofolio",
    },
  ];
}
