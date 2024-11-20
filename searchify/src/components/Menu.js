import React, { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}>
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>
      {isOpen && (
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/results">Results</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Menu;
