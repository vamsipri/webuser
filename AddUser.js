import React from 'react';
import {useState} from 'react';

function AddUser() {
   const [fname,setName]=useState('');
   const [lname,setlName]=useState('');
   const[email,setEmail]=useState('');
   const[password,setPassword]=useState('');
  // const [gender,setGender]=useState('');
//const[userType,setUser]=useState('');
const [error, setError] = useState(false);
 
const[submitted,setSubmitted]=useState(false);
const handleFname = (e) =>{
    setName(e.target.value);
    setSubmitted(false);
};

const handleLname = (e) =>{
    setlName(e.target.value);
   setSubmitted(false);
};
const handleEmail = (e) =>{
    setEmail(e.target.value);
   setSubmitted(false);
};
const handlePassword = (e) =>{
    setPassword(e.target.value);
   setSubmitted(false);
};
// Handling the form submission
const handleSubmit = (e) => {

    localStorage.setItem("fname",JSON.stringify(fname));
    localStorage.setItem("lname",JSON.stringify(lname));
    localStorage.setItem("email",JSON.stringify(email));
    
    e.preventDefault();
    

    if (fname === '' || lname === '' || email === '' || password === '') {
      setError(true);
    } else {
         const User= [{
             fname,
             lname,
             email,
         }]
        console.log(User.fname)
         localStorage.setItem("users",JSON.stringify(User));

        setSubmitted(true);
      setError(false);
    }

  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {fname} successfully registered!!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };


  const resetInputField = () => {
    setName("");
    setlName("");
    setEmail("");
    setPassword("");
    
  };

    return (
   
       <form>
           <h1 className='h1'>Add User</h1>


           <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
           <label className="label">First name:</label>
  <input type="text" id="fname" name="fname" value={fname} onChange={handleFname} /><br/>
  <label className='label'>Last name:</label>
 <input type="text" id="lname" name="lname"  value={lname} onChange={handleLname}/><br/> 
  <label className='label'>Email:</label> 
  <input type="text" id="email" name="email" value={email} onChange={handleEmail} /><br/>
  <label className='label'>Password</label> 
  <input type="password" id="password" name="password"  value={password} onChange={handlePassword}/><br/>
  <label className='label'>Gender:</label>
  <input type="radio" id="male" name="gender" value="Male"/>
  <label>Male</label>
  <input type="radio" id="Female" name="gender" value="Female"/>
  <label >Female</label>
  <label className='label'>UserType</label>
  <select name="UserType" id="UserType" >
    <option value="Admin">Admin</option>
    <option value="Customer">Customer</option>
   
  </select>
  <br></br>
  <br></br>
  <button onClick={handleSubmit} className="btn" type="submit">  
          Submit
        </button>
        <button onClick={resetInputField} className="btn" type="submit">Reset</button>
       </form>
   )
}
export default AddUser;