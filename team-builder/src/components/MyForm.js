import React, {useState} from 'react';

const MyForm = props => {

    const [member, setMember] = useState({fName: '', lName: '', email: '', role: '' });
   
    
    const addTheFormMember = event => {
        setMember({...member, [event.target.name]: event.target.value });
        //console.log(event.target.name);
        //console.log(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        //debugger
        props.addMem(member);
        //debugger
        //console.log(member);
        //debugger
        //alert({member});
        setMember({fName: '', lName: '', email: '', role: ''});
    }

    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                <label htmlFor="fName">First Name: </label>
                <input value={member.fName} onChange={addTheFormMember} type="text" name="fName" id="fName"/>
                </div>

                <div className="form-group">
                <label htmlFor="lName">Last Name: </label>
                <input  value={member.lName} onChange={addTheFormMember} type="text" name="lName" id="lName"/>
                </div>

                <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input value={member.email}onChange={addTheFormMember} type="text" id="email" name="email"/>
                </div>

                <div className='for-group'>
                <label htmlFor="role">Role: </label>
                
                <select value={member.role} id="role" name="role" onChange={addTheFormMember}>
                    <option>select a role</option>
                    <option value="Software Developer">Software Developer</option>
                    <option value="Senior Software Engineer">Senior Software Engineer</option>
                    <option value="Chief Technology Officer">Chief Technology Officer</option>
                    <option value="Help Desk Technician">Help Desk Technician</option>
                    <option value="Janitor">Janitor</option>
                </select>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );

}



export default MyForm;