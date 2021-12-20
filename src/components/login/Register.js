// import React, { useState } from 'react';
// import RegisterService from "../../services/RegisterService";
// import './style.css'

// export const Register = () => {
//   const [firstname, setFirstName] = useState('');
//   const [lastname, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [people, setPeople] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = { firstname,lastname,email, password };
//     const response = RegisterService(data);
//     // console.log(response);
//     setFirstName('');
//     setLastName('');
//     setPassword('');
//     setEmail('');

//     // if (firstName && email && password && lastName ) {
//     //   const person = { id: new Date().getTime().toString(), firstName, email,lastName,password };
//     //   // console.log(person);
//     //   setPeople((people) => {
//     //     return [...people, person];
//     //   });
//     //   setFirstName('');
//     //   setLastName('');
//     //   setPassword('');
//     //   setEmail('');
//     // } else {
//     //   console.log('empty values');
//     // }
//   };
//   return (
//     <>

//       <article>
//       <h1>Sign Up</h1>
//         <form className='form' onSubmit={handleSubmit}>

//           <div className='form-control'>
//             <label htmlFor='firstName'>FirstName : </label>
//             <input
//               type='text'
//               id='firstName'
//               name='firstname'
//               value={firstname}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//           </div>
//           <div className='form-control'>
//             <label htmlFor='lastName'>LastName : </label>
//             <input
//               type='text'
//               id='lastName'
//               name='lastname'
//               value={lastname}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//           </div>
//           <div className='form-control'>
//             <label htmlFor='email'>Email : </label>
//             <input
//               type='email'
//               id='email'
//               name='email'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className='form-control'>
//             <label htmlFor='password'>Password : </label>
//             <input
//               type='text'
//               id='password'
//               name='password'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button type='submit'>add person</button>
//         </form>
//         {people.map((person, index) => {
//           const { id, firstname, email,password,lastname } = person;
//           return (
//             <div className='item' key={id}>
//               <h4>{firstname}</h4>
//               <p>{lastname}</p>
//               <p>{email}</p>
//               <p>{password}</p>
//             </div>
//           );
//         })}
//       </article>
//     </>
//   );
// };



//////////

import React, { useState } from 'react';
import RegisterService from "../../services/RegisterService";


import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button
} from "@material-ui/core";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { NavBar } from '../NavBar';
import Footer from '../Footer';
import NewsLetter from '../NewsLetter';


export const Register = () => {

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { firstname,lastname,email, password };
    const response = RegisterService(data);
    // console.log(response);
    setFirstName('');
    setLastName('');
    setPassword('');
    setEmail('');


  };

  const paperStyle = {
    height: "60vh",
    width: 300,
    padding: 20,
    margin: "20px auto",
  };
  const avtarStyle = { backgroundColor: "green" };
  const btnstyle = { margin: "8px 0" };

  return (
    <>
    <NavBar/>
    <Grid >
      <Paper elevation={14} style={paperStyle}>
        <Grid  align="center">
          <Avatar style={avtarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign Up</h2>
        </Grid>
        <TextField
          label="First Name"
          placeholder="Enter First Name"
          fullWidth
          required
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)} 
        />
        <TextField
          label="Last Name"
          placeholder="Enter Last Name"
          fullWidth
          required
          value={lastname}
          onChange={(e) => setLastName(e.target.value)} 
        />
        <TextField
          label="Email"
          placeholder="Enter Email"
          type="email"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
        <TextField
          label="Password"
          placeholder="Enter Password"
          type="password"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick= {handleSubmit}
        >
          Sign up
        </Button>

      </Paper>
    </Grid>
    <NewsLetter/>
    <Footer/>
    </>

  );
};
