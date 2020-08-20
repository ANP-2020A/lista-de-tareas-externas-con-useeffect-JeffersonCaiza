import React, {useState} from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';




// class App extends React.Component{
//
//      user = {
//      firstName: "Eduardo",
//      lastName: "Caiza"
//      }
//
//     formatName = (user) => {
//         return user.firstName + ' ' + user.lastName;
//     }
//
//     render(){
//         return (
//             <>
//                 <div>
//                     Hola {this.formatName(this.props.user)}!
//                 </div>
//
//                 <div>
//                     {this.props.question}
//                 </div>
//             </>
//         );
//     }
// }


const App = (props) => {




    const [users, setUsers]=useState(props.users);

    const formatName=(user)=>{
        return user.firstName + ' ' +user.lastName;
    };

    const handleAddUser=()=>{
        const firstName=document.querySelector('#firstName').value;
        const lastName=document.querySelector('#lastName').value;

        const newUser={
            firstName,
            lastName
        };



        setUsers((prevState )=>{
           return [
               ...prevState,
               newUser
           ];
        });

    };




 return (
     <>
         <div>
             <label htmlFor='firstName'>Nombre</label>
             <input type='text' id='firstName'/>
         </div>

         <div>
             <label htmlFor='lastName'>Apellido</label>
             <input type='text' id='lastName'/>

             <button onClick={handleAddUser}>Agregar</button>
         </div>

         <ul>
             {
                 users.map((user, index) => {
                     return<li key={`user-${index}`}>{formatName(user)}</li>

                 })
             }
         </ul>
     </>
 );

}

export default App;
