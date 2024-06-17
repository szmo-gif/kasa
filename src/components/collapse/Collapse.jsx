import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './collapse.css';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`collapse-toggle ${isOpen ? 'rotate' : ''}`}
        />
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        <p>{children}</p>
      </div>
    </div>
  );
};
export default Collapse;

