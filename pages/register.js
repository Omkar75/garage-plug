import React ,{useState}from "react";
import { withRouter } from "next/router";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Link from 'next/link'
const Register = () => {
//   constructor() {
//     super();
//     this.state = {
//       loading: false,
//       username: "",
//       password: "",
//       confirmPassword: "",
//     };
//   }
  const [values, setValues] = useState({
    loading: false,
    username: " ",
    password: " ",
    confirmPassword : " ",
  });
  const handleAddFormChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    console.log(values);
  };
  const performAPICall = async () => {
    debugger
    setValues({
        loading: true
      })
    let error = false, response;
     await fetch(``, {
          // Adding method type
          method: "POST",              
          // Adding body or contents to send
          body: JSON.stringify({
            username: values.username,
            password: values.password,
          }),              
          // Adding headers to the request
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
        }).then(async res => {
        response = await res.json()
        }).catch(error => {
          error = true
        })
        setValues({
            loading: false
          })  
        if(validateResponse(error, response) === true) {
          return response;
        }
  };
  const validateInput = () => {
    let username = values.username
    let password = values.password
    let confirmPassword = values.confirmPassword
    var usernameLength= username.length 
    var passwordLength = password.length 
    var confirmPasswordLength = confirmPassword.length
    if(usernameLength === 0 ){
      message.error("Username is a required field")
      return false
    }
    else if( passwordLength === 0 ){
      message.error("Password is a required field")
      return false
    }
    else if(confirmPasswordLength===0){
      message.error("Confirm Password is a required field")
      return false
    }
    else if(usernameLength <6 || usernameLength >32 ){
      message.error("Username length should be between 6 and 32 characters")
      return false
    }
    else if( passwordLength <6 ||  passwordLength >32 ){
      message.error("Password length should be between 6 and 32 characters")
      return false
    }
    else if(password.localeCompare(confirmPassword) !==0){
      message.error("Password and confirm password should be same")
      return false
    }
    return true
  };
  const validateResponse = (errored, response) => {
    if (errored === true) {
      message.error("Registering Failed! Please try again!")
      return false
    }
    else if (errored !== true && response.success === false) {
      message.error(`${response?.message}`)
      return false
    }
    else if (errored !== true && response.success === true) {
      message.success("Registered successfully")
      return true
    }
  };
  const register = async () => {
    const valInput = validateInput();
    if(valInput === true){
      const response = await performAPICall();
      if(response !== null){
        setValues((values)=>({
            ...values,
            username: "",
            password: "",
          }))
      }else{
        message.error("Error occured");
      }
    }    
  };

    return (
      <>
        <Navbar />

        {/* Display Register fields */}
        <div>
        <div className="bg-gray-100 text-gray-800 antialiased px-4 !py-20 flex flex-col justify-center sm:py-12">
          <div className="w-full relative py-3 sm:max-w-xl mx-auto text-center">
            <span className="text-2xl font-light">Register as a User</span>
            <div className="relative mt-4 pb-6 bg-white shadow-md sm:rounded-lg text-left">
              <div className="h-2 bg-indigo-400 rounded-t-md"></div>
              <div className="py-6 px-8">
                <label className="block font-semibold">Username or Email</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                  onChange={handleAddFormChange}
                ></input>
                <label className="block mt-3 font-semibold">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                  onChange={handleAddFormChange}
                ></input>
                <label className="block mt-3 font-semibold">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                  onChange={handleAddFormChange}
                ></input>
                <div className="flex justify-between items-baseline">
                  <button className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg" onClick={register}>
                    Register
                  </button>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
        <Footer />
      </>
    );
  
}

export default withRouter(Register);