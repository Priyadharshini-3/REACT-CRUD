import { AccountCircle, EmailOutlined } from "@mui/icons-material";
import NumbersIcon from '@mui/icons-material/Numbers';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CabinIcon from '@mui/icons-material/Cabin';
import WcIcon from '@mui/icons-material/Wc';
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { context_Api } from "../../App";

const EditStudentData = () => {

  //? useContext...
  const {Student_data,setStudent_data}= useContext(context_Api);

  //? history is keyword in that it will hold the current path address...
  const history = useHistory();
  
  //? In <Route path=("/:CardIndex") After colon(:)=>It will take the parameter value...
  //? useParams();=> It is used to tell that  we have to use this parameter value...
  //? same parameter name will be used in useParams();
  const { CardIndex } = useParams();

  const [id, setid] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [batch, setBatch] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [hometown, setHomeTown] = useState("");

  /* -----------------------------------------------------------------------        */
  //? editing student data...

  //? After functional component initialization
  //? this mounting useEffect will be applied First...
  //? After checking this useEffect then only other functions and jsx will be executed...
  //? Here useEffect is used => after edit button is clicked
  //? we have to set the input box (empty value => default value)...
  //? For that reason useEffect is used and it will be executed first....
  // state hooks...
  const Edit_Card_Data = Student_data[CardIndex];

  useEffect(() => {
    setid(Edit_Card_Data.id);
    setFirstName(Edit_Card_Data.firstname);
    setLastName(Edit_Card_Data.lastname);
    setEmail(Edit_Card_Data.email);
    setBatch(Edit_Card_Data.batch);
    setGender(Edit_Card_Data.gender);
    setCourse(Edit_Card_Data.course);
    setHomeTown(Edit_Card_Data.hometown);
  }, []);

  //? []=> in this square bracket we have to give dependencies like
  //? (index,name,id etc..) whenever this dependency changed useEffect will applied...

  // -----------------------------------------------------------------------

  //? updating student data...

  function updateStudentData() {
    //? whenever the input is changed onChange is called and we are updating the input value...
    //?That input value will be updated in (key:value) pairs in the below object...
    //? If (key name and value) are same means we can use (shorthand property) like key name only...

    const update_object = {
      id: id,
      firstname: firstname,
      lastname: lastname,
      email: email,
      batch: batch,
      gender: gender,
      course: course,
      hometown: hometown,
    };
    //? After updated object is created => we have to update this object
    //? to the student_data respective card index...
    Student_data[CardIndex] = update_object;

    //? After that we have to use spread operator to update the the updated values...
    //? Bcoz if we spread and setStudent_data it will map again and upadated to card...
    setStudent_data([...Student_data]);
    //? After update we have to empty the input field...
    setid("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setBatch("");
    setGender("");
    setCourse("");
    setHomeTown("");

    history.push("/StudentDetails");
  }

  // -----------------------------------------------------------------------

  return (
    <div className="student-container">

      <div className="student-input-area">

      <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" },}}
          noValidate
          autoComplete="off"
        >
       
       {/* -----------------------------------------------------------------------        */}
          <div className="text-area">
            {/* First Name */}
            <TextField
              required
              fullWidth
              label="Enter your FirstName"
              id="fullWidth"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle className="account-circle" />
                  </InputAdornment>
                  ),
              }}
              //whenever the input field changes this onChange event function is called and 
              //(input) is parameter =>if we console means it will return onChange event's property=>(value will be object)
              //In that onChange property => target is one of the property (the value is input field)
              //In that target property  => value is one of the property (the value is input field value)
              onChange={(input) => setFirstName(input.target.value)}
              value={firstname}
              type="text"
            />
            {/* Last Name */}
            <TextField
              required
              fullWidth
              label="Enter your LastName"
              id="fullWidth"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle className="account-circle"/>
                  </InputAdornment>
                ),
              }}
              onChange={(input) => setLastName(input.target.value)}
              value={lastname}
              type="text"
              variant="filled"
            />
          </div>
          {/* -----------------------------------------------------------------------        */}

          {/* -----------------------------------------------------------------------        */}
          <div className="text-area">
            {/* ID */}
           
            <TextField
              required
              fullWidth
              label="Enter the id"
              id="outlined-required fullWidth"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <NumbersIcon className="account-circle"/>
                  </InputAdornment>
                ),
              }}
              onChange={(input) => setid(input.target.value)}
              value={id}
              variant="filled"
              type="number"
              />
             {/* Email */}
            <TextField
              required
              fullWidth
              label="Enter the Email"
              type="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined className="account-circle"/>
                  </InputAdornment>
                ),
              }}
              onChange={(input) => setEmail(input.target.value)}
              value={email}
              variant="filled"
              id="outlined-required fullWidth"
            />
          </div>

          {/* -----------------------------------------------------------------------        */}

          <div className="text-area">
            {/* Batch */}
            <TextField
              required
              id="outlined-required fullWidth"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BatchPredictionIcon className="account-circle"/>
                  </InputAdornment>
                ),
              }}
              fullWidth
              label="Enter your Batch"
              onChange={(input) => setBatch(input.target.value)}
              value={batch}
              variant="filled"
              type="text"
            />
            {/* Gender */}
            <TextField
              required
              id="outlined-required fullWidth"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <WcIcon className="account-circle"/>
                  </InputAdornment>
                ),
              }}
              fullWidth
              label="Enter your Gender"
              onChange={(input) => setGender(input.target.value)}
              value={gender}
              variant="filled"
              type="text"
            />
          </div>
          {/* -----------------------------------------------------------------------        */}
          <div className="text-area">
            {/* Course */}
            <TextField
              required
              id="outlined-required fullWidth"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AutoStoriesIcon className="account-circle"/>
                  </InputAdornment>
                ),
              }}
              fullWidth
              label="Enter your Course"
              onChange={(input) => setCourse(input.target.value)}
              value={course}
              variant="filled"
            />
            {/* HomeTown */}
            <TextField
              required
              id="outlined-required fullWidth"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CabinIcon className="account-circle"/>
                  </InputAdornment>
                ),
              }}
              fullWidth
              label="Enter your HomeTown"
              onChange={(input) => setHomeTown(input.target.value)}
              value={hometown}
              variant="filled"
            />
          </div>

          {/* -----------------------------------------------------------------------        */}
        </Box>
         {/* Update data Button */}
        <Button
          variant="contained"
          size="large"
          onClick={() => updateStudentData()}
        >
          UPDATE DATA
        </Button>

      </div>

    </div>
  );
};

export default EditStudentData;
