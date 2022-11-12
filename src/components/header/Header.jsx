import React from "react";
import "./Header.scss";
import { FiSearch } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import seyi from "./head.jpg";
import { useCallback } from "react";
import { useNotesContext } from "../../context/NoteContext.jsx";

const Header = ({ query, setQuery }) => {
  const NOTES = useNotesContext();

  const HandlechangedQuery = useCallback(
    (e) => {
      setQuery(e.target.value);
    },
    [setQuery]
  );

  return (
    <div className="header">
      <div className="left">
        <div className="searchContainer">
          <FiSearch className="searchIcon" />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            value={query}
            onChange={HandlechangedQuery}
          />
        </div>
      </div>

      <div className="right">
        <div className="notification">
          <a href="">
            <IoIosNotificationsOutline className="notificationIcon" />
          </a>
          <div className="notificationValue">{NOTES.length}</div>
        </div>
        <div className="notification message">
          <a href="">
            <FiMessageSquare className="notificationIcon messageIcon" />
          </a>
          <div className="notificationValue messageValue">5</div>
        </div>

        <div className="profile">
          <img src={seyi} alt="profileImage" />
        </div>
      </div>
    </div>
  );
};

export default Header;
