import React, { useState } from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icone from "../../assets/arrow_icon.svg";

function MyWork() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const openModal = (work) => {
    setSelectedWork(work);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedWork(null);
  };

  // ✅ handle click outside modal content
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("mywork-modal")) {
      closeModal();
    }
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
                  <button onClick={() => window.open(selectedWork.w_github)}>
                    GitHub
                  </button>
                  <button onClick={() => window.open(selectedWork.w_demo)}>
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
