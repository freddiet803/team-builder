import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

  const [members, setMembers] = useState({fName: '', lName: '', email: '', role: ''});

  const addNewMember = event => {
    setMembers({...members, [event.target.name]: event.target.value});
  }
  return (
    <div className="App">
      <MyForm addMem={addNewMember}/>
    </div>
  );
}

export default App;
