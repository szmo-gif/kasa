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
        <h2>{title}</h2>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`collapse-toggle ${isOpen ? 'rotate' : ''}`}
        />
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};
export default Collapse;

