import React from "react";
import "./SideBar.scss";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  useNotesContext,
  useNotesDispatchContext,
} from "../../context/NoteContext.jsx";
let currentID = 5;

const SideBar = () => {
  const [showBtn, setShowBtn] = useState(true);

  const NOTES = useNotesContext();
  const dispatch = useNotesDispatchContext();

  const StyleBtn = {
    one: {
      backgroundColor: "#facc15",
      animationDelay: "0.3s",
      cursor: "pointer",
    },
    two: {
      backgroundColor: "#fb7185",
      animationDelay: "0.7s",
      cursor: "pointer",
    },
    three: {
      backgroundColor: "#e879f9",
      animationDelay: "1.1s",
      cursor: "pointer",
    },
    four: {
      backgroundColor: "#38bdf8",
      animationDelay: "1.5s",
      cursor: "pointer",
    },
    five: {
      backgroundColor: "#bef264",
      animationDelay: "2s",
      cursor: "pointer",
    },
  };

  return (
    <div className="sidebar">
      <span className="logo">
        <Link to={"/"} className="logo_text">
          myNotes
        </Link>
      </span>
      <div
        className="addBtn"
        onClick={() => {
          setShowBtn(!showBtn);
        }}
      >
        <IoIosAddCircle className="btn" />
      </div>
      <div className="menuList">
        <Link to={`/AddNote/facc15`}>
          <button
            className={showBtn ? "show" : "menuItems"}
            style={StyleBtn.one}
          />
        </Link>
        <Link to={`/AddNote/fb7185`}>
          <button
            className={showBtn ? "show" : "menuItems"}
            style={StyleBtn.two}
          />
        </Link>
        <Link to={"/AddNote/e879f9"}>
          <button
            className={showBtn ? "show" : "menuItems"}
            style={StyleBtn.three}
          />
        </Link>
        <Link to={"/AddNote/38bdf8"}>
          <button
            className={showBtn ? "show" : "menuItems"}
            style={StyleBtn.four}
          />
        </Link>
        <Link to={"/AddNote/bef264"}>
          <button
            className={showBtn ? "show" : "menuItems"}
            style={StyleBtn.five}
          />
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
