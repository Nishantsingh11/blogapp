import React,{useState} from 'react'
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography} from "@mui/material"
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authAction } from '../store';
const Header = () => {
  const dispath = useDispatch();
  const isLogedIn = useSelector(state  => state.isLogedIn );
  const [value, setValue] = useState()
  return (
  
<AppBar position='sticky' sx={{background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(221,42,42,1) 50%, rgba(252,176,69,1) 100%)"}}>
  <Toolbar>
    <Typography variant='h4'>Blog</Typography>
    { isLogedIn && <Box marginLeft = "auto" display="flex">
      <Tabs textColor='primary' value={value} onChange ={(e,val)=>setValue(val)}>
        <Tab LinkComponent={Link} to  = "/Blogs" label ="All Blogs" />
        <Tab LinkComponent={Link} to = "/myblogs" label = "My Blogs"/>
        <Tab LinkComponent={Link} to = "/blogs/add" label = "Add blog"/>
      </Tabs>
    </Box>}
    <Box display="flex" marginLeft= "auto">
      { !isLogedIn && <><Button LinkComponent={Link} to  = "/auth" variant='conatained' sx={{margin:1,borderRadius:10}} color='white'>Login</Button>
      <Button LinkComponent={Link} to  = "/auth" variant='conatanied' sx={{margin:1,borderRadius:10}} color='white'>SignUp</Button>  </> }
      { isLogedIn && <Button onClick={()=>dispath(authAction.logout())} LinkComponent={Link} to  = "/auth" variant='conatanied' sx={{margin:1,borderRadius:10}} color='white'>Log out</Button>}
        </Box>
  </Toolbar>
  
  </AppBar>

  )
}

export default Header