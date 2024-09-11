import "./Nav.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export const Nav = () => {
  const [search, setSearch] = useState(false);
  function setHandleSearch(e) {
    setSearch(e);
  }
  return (
    <div className="nav-container">
      <div className="nav">
        <FontAwesomeIcon icon={faBox} className="icon logo" />
        <a href="#" className="nav-item">
          Sobre nosotros
        </a>
        <a href="#" className="nav-item">
          Juegos
        </a>
        <label className={"nav-search" + (search ? " search" : "")}>
          <input
            type="text"
            placeholder="Buscar juegos"
            onFocus={() => setHandleSearch(true)}
            onBlur={() => setHandleSearch(false)}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </label>
        <FontAwesomeIcon icon={faUser} className="icon" size="lg" />
      </div>
    </div>
  );
};
