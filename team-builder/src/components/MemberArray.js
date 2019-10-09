import React from 'react';


const MemberArray = props => {
    
    // {props.memList.forEach(element => {
    //     console.log(element.fName);
        
    // });}
    // {props.memList.map(mem => {
    //     console.log(mem);
    // })}
    return (
        <div>
            {props.memList.map(mem => {
                return (
                    <div key={mem.id}>
                        <h2>{mem.fName + ' '+ mem.lName}</h2>
                        <p>{mem.email}</p>
                        <p>{mem.role}</p>
                    </div>
                );
            }
                
            )}
            
        </div>
    )

}


export default MemberArray;