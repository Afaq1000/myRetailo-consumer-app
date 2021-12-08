import axios from "axios";

// const BASE_URL = "http://localhost:3000"; // For Local
const BASE_URL = "http://ec2-3-250-184-123.eu-west-1.compute.amazonaws.com:3000"; //For AWS

export const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers:{
        "x-auth-token": localStorage.getItem('x-auth-token')
      }
  });