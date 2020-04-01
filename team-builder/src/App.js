import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import MyForm from './components/MyForm.js';
import MemberArray from './components/MemberArray.js';


function App() {

  const [memberList, setMemberList] = useState([{id: 1, fName: 'Freddie', lName: 'Thompson', email: 'fthompson803@live.com', role: 'Software Developer'}]);
  

  const addNewMember = member  => {
    const newMember = {
      id: Date.now(),
      fName: member.fName,
      lName: member.lName,
      email: member.email,
      role: member.role
    };
    setMemberList([...memberList, newMember]); //brackets extremly important for map functions to iterate because state is array of objects
    
  };



  return (
    
    
    <div className="App">
      <h2>Members List</h2>
      <MyForm addMem={addNewMember}/>
      <MemberArray memList={memberList}/>
      
    </div>
  );

  
  }
  

export default App;
