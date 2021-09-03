import { useState } from "react";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Modal from "./components/atoms/Modal";

import {getProjects} from './data/projects'
import NavigationBar from "./components/NavigationBar";
import "./styles/styles.scss";
export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalItem, setModalItem] = useState(getProjects()[0]);

  function toggleModal() {
    setShowModal(!showModal);
  }

  function setModalData(item) {
    setModalItem(item);
    console.log(JSON.stringify(item));
    setShowModal(true);
  }
  return (
    <div className="App">
      <NavigationBar />
      <div className="main">
        <Hero />
        <About />
        <Projects projects={getProjects()} setModalData={setModalData} />
        {showModal && <Modal modalItem={modalItem} toggleModal={toggleModal} />}
      </div>
    </div>
  );
}
