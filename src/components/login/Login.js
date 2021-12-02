// import axios from "axios";
// // import './style.css'
// import React, { useState, useEffect } from "react";
// import LogInService from "../../services/LogInService";

// export const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [people, setPeople] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = { email, password };
//     const response = LogInService(data);
//     // console.log(response);
//     setPassword("");
//     setEmail("");

//     // if (password && email) {
//     //   const person = { id: new Date().getTime().toString(), password, email };
//     //   // console.log(person);
//     //   setPeople((people) => {
//     //     return [...people, person];
//     //   });
//     //   setPassword("");
//     //   setEmail("");
//     // } else {
//     //   console.log("empty values");
//     // }
//   };

//   return (
//     <>
//       <article>
//         <form className="form" onSubmit={handleSubmit}>
//           <div className="row">
//             <label htmlFor="email">Email : </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="row">
//             <label htmlFor="email">Password : </label>
//             <input
//               type="text"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button type="submit">Login</button>
          
//         </form>
//         {/* {people.map((person) => {
//           const { id, email, password } = person;
//           return (
//             <div className="item" key={id}>
//               <h4>{email}</h4>
//               <p>{password}</p>
//             </div>
//           );
//         })} */}
//       </article>
//     </>
//   );
// };


///////////
import React, { useState, useEffect } from "react";
import LogInService from "../../services/LogInService";

import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


export const Login=()=>{

  //

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { email, password };
    const response = LogInService(data);
    // console.log(response);
    setPassword("");
    setEmail("");
  };


  //
    const paperStyle={padding :20,height:'80vh',width:300, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(


      
        <Grid>
            <Paper elevation={14} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Email' placeholder='Enter email' value={email}
              onChange={(e) => setEmail(e.target.value)} fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' value={password}
              onChange={(e) => setPassword(e.target.value)} fullWidth required/>
        
                <Button type='submit' onClick= {handleSubmit} color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                
                
      
                <Typography > Do you have an account ?
                     <Link href="/register" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}


