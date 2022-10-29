import React from 'react'
import {CardContent,CardMedia,Avatar, Card,CardHeader, Typography, Box, IconButton} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {useNavigate} from "react-router-dom"
import axios from 'axios';

const Blog = ({title,description,imageURL,userName,isUser,id}) => {
  const navigate = useNavigate()
  console.log(title,isUser);
  const handleEdit =  () =>{
    navigate(`/myBlogs/${id}`)
  }
  const deleteRequest = async () =>{
    const res = await axios.delete(`http://localhost:5000/api/blog/${id}`).catch(err => console.log(err))
    const data = await res.data;
    return data;
  }
  const handleDelete = ()=>{
deleteRequest().then(() => navigate("/")).then(()=>navigate("/blogs"))
  }


  return (
    <div>
              
      <Card sx={{ width: "40%", margin :"auto" ,marginTop:2,padding:2,boxShadow:"5px 5px 10px #ccc",":hover:":{
        boxShadow:"10px 10px 20px #ccc"
      }}}>

        {isUser && (
          <Box display="flex">
            <IconButton onClick={handleEdit} sx={{marginLeft:"auto"}}><EditIcon color='warning'/></IconButton>
            <IconButton onClick={handleDelete}><DeleteForeverIcon color='error'/></IconButton>
          </Box>
        )}
      <CardHeader 
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {userName}
          </Avatar>
         }
        title= {title}
      />
      <CardMedia 
        component="img"
        height="194"
        image={imageURL}
      />
      <CardContent>
        <hr/>
        <br />

        <Typography variant="body2" color="text.secondary" >
        <b>{userName}</b> : {description}
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default Blog