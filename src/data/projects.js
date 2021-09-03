import vegan from "../images/vegan.jpg";
import packageTracker from "../images/package.jpg";
import todo from "../images/todo.jpg";
import ecommerce from "../images/ecommerce.jpg";
import bbq from "../images/bbq.jpg";
import learning from "../images/learning.jpg";
import netflix from "../images/netflix.jpg";

export function getProjects() {
  let locked = false;

  return [
    {
      description: "Description",
      skills: ["Some", "other", "third"],
      isLocked: false,
      name: "Vegan Restaurant Website",
      image: vegan,
      hosting: "https://github.com/DizdarArmin",
      repository: "https://github.com/DizdarArmin/portofolio",
    },
    {
      description: "some",
      skills: ["Some", "other", "third"],
      isLocked: locked,
      name: "Package Tracker",
      image: packageTracker,
      hosting: "https://github.com/DizdarArmin",
      repository: "https://github.com/DizdarArmin/portofolio",
    },
    {
      description: "some",
      skills: ["Some", "other", "third"],
      isLocked: locked,
      name: "Todo list TDD",
      image: todo,

      hosting: "https://github.com/DizdarArmin",
      repository: "https://github.com/DizdarArmin/portofolio",
    },
    {
      description: "some",
      skills: ["Some", "other", "third"],
      isLocked: locked,
      name: "e-Commerce website",
      image: ecommerce,

      hosting: "https://github.com/DizdarArmin",
      repository: "https://github.com/DizdarArmin/portofolio",
    },
    {
      description: "some",
      skills: ["Some", "other", "third"],
      isLocked: locked,
      name: "BBQ restaurant website",
      image: bbq,
      hosting: "https://github.com/DizdarArmin",
      repository: "https://github.com/DizdarArmin/portofolio",
    },
    {
      description: "some",
      skills: ["Some", "other", "third"],
      isLocked: locked,
      name: "Learning platform",
      image: learning,
      hosting: "https://github.com/DizdarArmin",
      repository: "https://github.com/DizdarArmin/portofolio",
    },
    {
      description: "some",
      skills: ["Some", "other", "third"],
      isLocked: locked,
      name: "Netflix clone",
      image: netflix,
      hosting: "https://github.com/DizdarArmin",
      repository: "https://github.com/DizdarArmin/portofolio",
    },
  ];
}
