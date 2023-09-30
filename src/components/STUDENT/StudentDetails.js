
import React, { useContext } from "react";
import "./StudentLists.css"
import { useHistory } from "react-router-dom";
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { context_Api } from "../../App";


/* -----------------------------------------------------------------------        */

export function Studentdetails() {

  //? useContext...
  const {Student_data,setStudent_data}= useContext(context_Api);
  
  //? Router useHistory...
  const history=useHistory();
  
 /* -----------------------------------------------------------------------        */
  //? Deleting added student data...

  function deleteButton(cardIndex) {
    //? Here we use filter method by using condition...
    //? condition => selected card index and student_data index are not equal...
    //? it will return remaining array of objects and the selected card will be removed... 
    const remove = Student_data.filter((select, idx) => idx !== cardIndex);
    //? Then we setStudent_data means that selected card will be removed...
    setStudent_data(remove);
  }

// ----------------------------------------------------------------------- 
  
  return (

      <div className="cards">
      {/* map method is used to get the each object data dynamically... */}
      {/* --------------------------------------------------------------------------- */}
        {Student_data.map((item, index) => (

          <div className="card" key={index}>
           
              <div className="card-border-top"></div>

              <div>
                <img className="img" src="https://img.myloview.com/stickers/student-icon-vector-male-person-profile-avatar-with-mortar-board-hat-symbol-for-school-college-and-university-graduation-degree-in-flat-color-glyph-pictogram-illustration-700-180613596.jpg" alt="404"></img>
              </div>

              <div className="content">

              <div ><span className="details">NAME:</span> <span className="data">{item.firstname} {item.lastname}</span></div>
              
              <div ><span className="details">BATCH:</span> <span className="data">{item.batch}</span></div>
            
              <button type="button" className="edit-btn card-btn" onClick={()=>history.push(`/editProfile/${index}`)}>
              <BorderColorSharpIcon className="edit-icon"/> EDIT
              </button>

              <button
                type="button"
                className="delete-btn card-btn"
                onClick={() => deleteButton(index)}>
                <DeleteForeverIcon className="delete-icon"/> DELETE
              </button>

              <button type="button" className="view-btn card-btn" onClick={()=>history.push(`/SelectedProfile/${index}`)}>
                VIEW DETAILS
              </button>

          </div> 

      </div>
  

   ))}
      
    </div>
  );
}
