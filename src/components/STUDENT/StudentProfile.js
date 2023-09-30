import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { context_Api } from "../../App";

function SelectedStudentProfile() {

  //? useContext...
  const {Student_data}= useContext(context_Api);

  //?Router useHistory...
  const history=useHistory();
  
  //? useParams...
  const { index } = useParams();
  const SelectedIndex = Student_data[index];

  return (

    <div className="selected-profile">

      <h1 className="profile">DETAILS OF STUDENT PROFILE</h1>

      <div className="selected-cards" key={SelectedIndex.index}>
      
        <img
          className="card-image"
          src="https://img.myloview.com/stickers/student-icon-vector-male-person-profile-avatar-with-mortar-board-hat-symbol-for-school-college-and-university-graduation-degree-in-flat-color-glyph-pictogram-illustration-700-180613596.jpg"
          alt="404">
        </img>

        <div className="card-info">

           <div ><span className="text-title">NAME:</span> <span className="text-body">{SelectedIndex.firstname} {SelectedIndex.lastname}</span></div>   
           <div ><span className="text-title">BATCH:</span> <span className="text-body">{SelectedIndex.batch}</span></div>
           <div ><span className="text-title">GENDER:</span> <span className="text-body">{SelectedIndex.gender}</span></div>
           <div ><span className="text-title">COURSE:</span> <span className="text-body">{SelectedIndex.course}</span></div>
           <div ><span className="text-title">EMAIL:</span> <span className="text-body">{SelectedIndex.email}</span></div>
           <div ><span className="text-title">HOMETOWN:</span> <span className="text-body">{SelectedIndex.hometown}</span></div>
           <button type="button" className="back-btn" onClick={()=>history.push("/studentDetails")}>BACK</button>

        </div>
      </div>
    </div>
  );
}

export default SelectedStudentProfile;
