import React, { createContext, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import BaseRender from "./BaseComponent/BaseComponent";
import StudentDashboard from "./components/Dashboard";
import LoginPage from "./components/Login-signup";
import PageNotFound from "./components/page-404";
import AddStudentData from "./components/STUDENT/AddStudent";
import EditStudentData from "./components/STUDENT/EditStudent";
import { Studentdetails } from "./components/STUDENT/StudentDetails";
import SelectedStudentProfile from "./components/STUDENT/StudentProfile";
import { studentData } from "./Data/StudentData";

//? creating a new context...
export const context_Api = createContext(null);

function App() {
  //? hooks state...
  const [Student_data, setStudent_data] = useState(studentData);

  return (
    //? we should provide value to the created context...
    <context_Api.Provider value={{ Student_data, setStudent_data }}>
      <div className="App">
        {/* To navigate different path Switch element is used... */}
        <Switch>
          {/* Router element should be defined in => (index.js)...  */}
          {/* Route is used to navigate the path which we defined... */}
          {/* exact path is the default path  */}

          {/* DASHBOARD page */}
          <Route exact path="/">
            {/* Inside the Route element which functional component  we invoked to be displayed... */}
            <BaseRender>
              {/* This is children component... */}
              <StudentDashboard />
            </BaseRender>
          </Route>

          {/* LOGIN page */}
          <Route path="/loginPage">
            <BaseRender>
              <LoginPage />
            </BaseRender>
          </Route>

          {/* ADD STUDENT DATA page */}
          <Route path="/addData">
            <BaseRender Title="ADD STUDENT DATA" Sub_Title="">
              <AddStudentData />
            </BaseRender>
          </Route>

          {/* EDIT STUDENT DATA page */}
          <Route path="/editProfile/:CardIndex">
            <BaseRender Title="EDIT STUDENT PROFILE" Sub_Title="">
              <EditStudentData />
            </BaseRender>
          </Route>

          {/* STUDENT DETAILS page */}
          <Route path="/StudentDetails">
            <BaseRender Title="STUDENTS LIST" Sub_Title="">
              <Studentdetails />
            </BaseRender>
          </Route>

          {/* STUDENT PROFILE page */}
          <Route path="/SelectedProfile/:index">
            <BaseRender>
              <SelectedStudentProfile />
            </BaseRender>
          </Route>

          {/* 404 page */}
          {/* This (**) => will be last after this if we define any path means it will not render */}
          {/* If we define path (**) => it is for undefined path  */}
          <Route path="**">
            <BaseRender Title="THE PAGE YOU REQUESTED IS INVALID" Sub_Title="">
              <PageNotFound />
            </BaseRender>
          </Route>
        </Switch>
      </div>
    </context_Api.Provider>
  );
}

export default App;
