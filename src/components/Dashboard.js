import React from "react";
import { useHistory } from "react-router-dom";
import "./Dashboard.css";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import LoginIcon from "@mui/icons-material/Login";

function StudentDashboard() {
  const history = useHistory();

  //----------------------------------------------------------
  //? Add Student data button...
  const addingData = () => {
    if (!localStorage.getItem("user_name")) {
      history.replace("/loginPage");
    } else {
      history.push("./addData");
    }
  };
  //----------------------------------------------------------
  //? student lists button...
  const viewingStudentLists = () => {
    if (!localStorage.getItem("user_name")) {
      history.replace("/loginPage");
    } else {
      history.push("./StudentDetails");
    }
  };
  //----------------------------------------------------------

  return (
    <div className="Dashboard">
      <h1 className="dash-title">Welcome to Student Database</h1>
      <span className="h3">CRUD APPLICATION</span>

      <div className="icons">
        <button
          type="button"
          className="dash-btn"
          onClick={() => history.push("/loginPage")}
        >
          <LoginIcon className="dash-icon" />
          <br></br>
          <span className="dash-txt">LOGIN</span>
        </button>

        <button type="button" className="dash-btn" onClick={() => addingData()}>
          <GroupAddIcon className="dash-icon" />
          <br></br>
          <span className="dash-txt">ADD Student</span>
        </button>

        <button
          type="button"
          className="dash-btn"
          onClick={() => viewingStudentLists()}
        >
          <RecentActorsIcon className="dash-icon" />
          <br></br>
          <span className="dash-txt">STUDENT LISTS</span>
        </button>
        
      </div>
    </div>
  );
}

export default StudentDashboard;
