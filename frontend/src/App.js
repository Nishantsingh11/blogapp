import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./coponents/Auth";
import Blogs from "./coponents/Blogs"
import Header from "./coponents/Header";
import UserBlogs from './coponents/UserBlogs'
import BlogDeatils from "./coponents/BlogDeatils"
import AddBlog from "./coponents/AddBlog"
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "./store";

function App() {
  const isLogedIn = useSelector(state  => state.isLogedIn );
  const dispath = useDispatch();
  console.log(isLogedIn)
  useEffect(() => {
    if(localStorage.getItem("userId")){
dispath(authAction.login())
    }
  }, [dispath])
  
  return <React.Fragment>
    <header>
      <Header />
    </header>
    <main>
      <Routes>
       { !isLogedIn ?(
         <Route path="/auth" element = {<Auth/>} />
       ):(
       <>
        <Route path="/blogs" element ={<Blogs/>}/>
      <Route path="/myblogs" element ={<UserBlogs/>}/>
      <Route path="/myblogs/:id" element ={<BlogDeatils />}/>
      <Route path="blogs/add" element = {<AddBlog/>} /> {" "}
      </>
    ) }
      </Routes>
    </main>
  </React.Fragment>
}

export default App;
