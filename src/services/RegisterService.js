import axios from "axios";

const BASE_URL = "http://localhost:3000";

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

 function RegisterService(data) {
     console.log({...data});

    instance.post('/signUp',{...data})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
   
  }
  export default RegisterService;