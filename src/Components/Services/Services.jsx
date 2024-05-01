import React, { useState } from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

function Services() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  };
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div
              className="services-format"
              key={index}
              onClick={() => openModal(service)}
            >
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{truncateString(service.s_desc, 75)}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>

      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {selectedService && (
              <>
                <h3>{selectedService.s_no}</h3>
                <h2>{selectedService.s_name}</h2>
                <p>{selectedService.s_desc}</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
