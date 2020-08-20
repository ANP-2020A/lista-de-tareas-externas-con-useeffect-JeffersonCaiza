import React, {useState} from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import UserList from './UserList';




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


const App = () => (
    <>
        <UserList />
    </>
);

export default App;