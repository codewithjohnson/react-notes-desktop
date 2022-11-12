import "./App.scss";
import SideBar from "./components/sideBar/SideBar";
import Header from "./components/header/Header";
import NoteList from "./components/noteList/NoteList";
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    return navigate("/AddNote/facc15");
  }, []);
  return (
    <div className="App">
      <div className="sidebarContainer">
        <SideBar />
      </div>

      <div className="main">
        <div className="header_container">
          <Header query={query} setQuery={setQuery} />
        </div>

        <div className="content">
          <div className="noteList_container ">
            <NoteList query={query}/>
          </div>
          <div className="notificationsContainer displayPage">
            <Outlet />
          </div>
          <div className="lore"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
