import React, { useState } from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icone from "../../assets/arrow_icon.svg";
import ReactGA from "react-ga4";

function MyWork() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const openModal = (work) => {
    setSelectedWork(work);
    setModalVisible(true);

    // Log when a project modal is opened
    ReactGA.event({
      category: "Portfolio",
      action: "Opened Project Modal",
      label: work.w_name,
    });
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedWork(null);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("mywork-modal")) {
      closeModal();
    }
  };

  // Track GitHub clicks
  const handleGithubClick = (work) => {
    ReactGA.event({
      category: "Portfolio",
      action: "Clicked GitHub Button",
      label: work.w_name,
    });
    window.open(work.w_github, "_blank");
  };

  // Track Demo clicks
  const handleDemoClick = (work) => {
    ReactGA.event({
      category: "Portfolio",
      action: "Clicked Demo Button",
      label: work.w_name,
    });
    window.open(work.w_demo, "_blank");
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <img
            key={index}
            src={work.w_img}
            alt={work.w_name}
            onClick={() => openModal(work)}
          />
        ))}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icone} alt="" />
      </div>

      {modalVisible && (
        <div className="mywork-modal" onClick={handleOutsideClick}>
          <div className="mywork-modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {selectedWork && (
              <>
                <h3>{selectedWork.w_name}</h3>
                <p>{selectedWork.w_desc}</p>
                <div className="mywork-modal-buttons">
                  <button onClick={() => handleGithubClick(selectedWork)}>
                    GitHub
                  </button>
                  <button onClick={() => handleDemoClick(selectedWork)}>
                    Demo
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MyWork;
