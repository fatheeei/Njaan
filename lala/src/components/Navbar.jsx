import { AppBar, Toolbar,Typography, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <AppBar>
      <Toolbar>
        <Typography variant="h3">Home</Typography>
        <Button variant="contained">Login</Button> &nbsp;
        <Button variant="contained">
          <Link to='/reg' >signup</Link>
        </Button>
        <Button variant='contained'>
          <Link to='/u' >Button</Link>
        </Button>
        
        <Button variant='contained'>
          <Link to='/c'>counter</Link>
        </Button>
        <Button variant='contained'>
          <Link to='/use'>use</Link>
        </Button>
        <Button variant='contained'>
          <Link to='/view'>view</Link>
        </Button>
        </Toolbar>
    </AppBar>
    </div>
  )
}

export default Navbar