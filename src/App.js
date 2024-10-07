import React from "react";  
import Api from "./components/Fakestore/Fakestore"
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { BrowserRouter, Routes , Route } from "react-router-dom";
export default class App extends React.Component{
  render(){
    return(
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/api" element={<Api/>}/>
      </Routes>
      
      </BrowserRouter>

      </>
    )
  }
}