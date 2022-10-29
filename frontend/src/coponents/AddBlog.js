import { Button, InputLabel, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const labeStyle ={mb:1, mt:2, fontSize : "24px" , fontWeight :"bold"}
const AddBlog = () => {
  const navigate = useNavigate()
  const [inputs, setinputs] = useState({
    title:"",
    description:"",
    imageUrl:""
  })
  const sendRequest = async () =>{
    const res = await axios.post("http://localhost:5000/api/blog/add",{
      title:inputs.title,
      description :inputs.description,
      image:inputs.imageUrl,
      user:localStorage.getItem("userId")
    }).catch(err => console.log(err))
    const data = res.data;
    return data

  }

  const handleChange = (e) => {
    setinputs((prevState) =>({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(inputs);
    sendRequest().then(()=>navigate('/blogs')).then(()=>navigate("/blogs"))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box border={3} borderColor = "blue" borderRadius={10} boxShadow ="10px 10px 20px #ccc" padding={3} margin = {"auto"} marginTop ={3} display="flex" flexDirection = {"column"} width={"80%"}>
          <Typography fontWeight="bold" padding ={3} color = "gray"  variant='h2' textAlign={"center"}>Post Your Blog</Typography>
          <InputLabel sx={labeStyle} >Title</InputLabel>
          <TextField onChange ={handleChange} name='title' value={inputs.title} margin='normal' variant='outlined' />
          <InputLabel sx={labeStyle} >Description</InputLabel>
          <TextField onChange ={handleChange} name='description' value={inputs.description} margin='normal' variant='outlined' />
          <InputLabel sx={labeStyle} >ImageUrl</InputLabel>
          <TextField onChange ={handleChange} name='imageUrl' value={inputs.imageUrl} margin='normal' variant='outlined' />
          <Button type='submit' sx={{mt:2,borderRadius:4}}variant ="contained" color = "warning">Submit</Button>
        </Box>
      </form>
    </div>
  )
}

export default AddBlog