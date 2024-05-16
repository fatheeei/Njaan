import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    //var name="fathima"
    var [name,fname]=useState("fathima")

    var[val,setval]=useState()
    var[sub,setsub]=useState()

    const handleInput=(e)=>{
        setval(e.target.value);
    }
    const submitHandler=()=>{
        console.log("clicked")
        setsub(val)
    }
  return (
    <div style={{margin:'70px'}}>
        <Typography varient='h3'>welcome to {sub}</Typography>
        <br/>
        <TextField varient="outlined" onChange={handleInput}/>
        <Button variant='contained' onClick={submitHandler}>submit</Button>

    </div>
  )
}

export default Statebasics