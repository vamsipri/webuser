//import logo from './logo.svg';
import './App.css';
//import AddUser from './AddUser';
import Userlist from './components/Userlist';
import AddUser from './components/AddUser';
import { useState } from 'react';
function App() {
  
  const [showAddForm,setShowAddForm] =useState(false)
  const [showList,setShowList] =useState(false)
  
   const addHandler = () => {
     setShowAddForm(true)
     setShowList(false)
   }

   const listHandler = () => {
    setShowList(true)
    setShowAddForm(false)
  }
  
  return (
    <div className="App">
      <button onClick={addHandler}>Add User</button>
      <button onClick={listHandler}>Users List</button> 
    {showAddForm ? (<AddUser></AddUser>):(<Userlist></Userlist>) }
    {/* {showList && (<Userlist></Userlist>)} */}
    </div>
  );
}

export default App;
