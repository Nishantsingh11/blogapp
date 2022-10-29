import React, { useEffect,useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'

import { Button, Box,InputLabel, TextField, Typography } from '@mui/material'


const labeStyle ={mb:1, mt:2, fontSize : "24px" , fontWeight :"bold"}


const BlogDeatils = () => {
  const navigate = useNavigate();
  
  const [blog, setBlog] = useState()
  const id = useParams().id;
  
  const [inputs, setInputs] = useState({})
  const handleChange = (e) => {
    setInputs((prevState) =>({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  }
  console.log(id)
  const fatchDetails = async() =>{
    const res = await axios.get(`http://localhost:5000/api/blog/${id}`).catch((err) =>console.log(err))
    const data = await res.data
    return data;
  }
  useEffect(()=>{
   fatchDetails().then((data)=>{

     setBlog(data)
     setInputs({title:data.title,description:data.description})
    }); 
  },[id])
  const sendRequest = async () =>{
    const res = await axios.put(`http://localhost:5000/api/blog/update/${id}`,{
      title:inputs.title,
      description:inputs.description
    }).catch(err => console.log(err))
    const data = await res.data
    return data;
  }
  console.log(blog)
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(inputs);
    sendRequest().then(data => console.log(data)).then(()=>navigate("/myBlogs/"))
  }
  return (
    <div>  usaerblog
      {inputs &&
      <form onSubmit={handleSubmit}>
    <Box border={3} borderColor = "blue" borderRadius={10} boxShadow ="10px 10px 20px #ccc" padding={3} margin = {"auto"} marginTop ={3} display="flex" flexDirection = {"column"} width={"80%"}>
      <Typography fontWeight="bold" padding ={3} color = "gray"  variant='h2' textAlign={"center"}>Update Your Blog</Typography>
      <InputLabel sx={labeStyle} >Title</InputLabel>
      <TextField onChange ={handleChange} name='title' value={inputs.title} margin='normal' variant='outlined' />
      <InputLabel sx={labeStyle} >Description</InputLabel>
      <TextField onChange ={handleChange} name='description' value={inputs.description} margin='normal' variant='outlined' />
      <Button type='submit' sx={{mt:2,borderRadius:4}}variant ="contained" color = "warning">Submit</Button>
    </Box>
  </form> }
  </div>
  )
}

export default BlogDeatils