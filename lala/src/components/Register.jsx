import { TextField,Button} from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <div> 
       
       <TextField id="utlined-basic" label="username" variant="outlined" /><br/><br/>
       <TextField id="utlined-basic" label="Email" variant="outlined" /><br/><br/>
       <TextField id="utlined-basic" label="name" variant="outlined" /><br/><br/>
       <TextField id="utlined-basic" label="password" variant="outlined" type="password" />
       <Button variant="contained">signup</Button>

    </div>
  )
}

export default Register