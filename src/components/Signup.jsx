import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';

const Signup = ({user}) => {
    const[form,setForm] = useState({
        myname:user.myname,
        email:user.email,
        phone:'',
        address:'',
        password:'',
        conPass:''
    })
    const display = ()=>{
        // console.log(form);
        axios.post('https://dummyjson.com/users/add', form).then((res) =>{
            // console.log(res)
            alert(res.data.id)
        })
    }

  return (
    <>
        <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 3, width: '25ch' } }}
        noValidate
        autoComplete="off"
        style={{textAlign:"center"}}
        >
            <div>
                <h1>Student Registration Form</h1>
                <TextField
                required
                id="outlined-required"
                label="Name"
                value={form.myname}
                onChange={(e) =>{
                    setForm({...form,myname:e.target.value})
                }}
                />

                <TextField
                required
                id="outlined-required"
                label="Email"
                value={form.email}
                onChange={(e) =>{
                    setForm({...form,email:e.target.value})
                }}
                
                /><br></br>

                <TextField
                required
                id="outlined-required"
                label="Phone Number"
                value={form.phone}
                onChange={(e) =>{
                    setForm({...form,phone:e.target.value})
                }}
                />
                <TextField
                required
                id="outlined-required"
                label="Address"
                value={form.address}
                onChange={(e) =>{
                    setForm({...form,address:e.target.value})
                }}
                
                /><br></br>
                <TextField
                required
                id="outlined-required"
                label="Password"
                type="password"
                value={form.password}
                onChange={(e) =>{
                    setForm({...form,password:e.target.value})
                }}
                
                />
                <TextField
                required
                id="outlined-required"
                label="Confirm Password"
                type="password"
                value={form.conPass}
                onChange={(e) =>{
                    setForm({...form,conPass:e.target.value})
                }}
               
                /><br></br>
                <Button variant="contained" onClick={display}>Sign Up</Button>
            </div>

        </Box>
    </>
  )
}

export default Signup