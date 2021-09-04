import { FormControl, InputLabel,FormGroup,Input,Button,makeStyles, Typography } from "@material-ui/core"

import { useState } from "react";
import { addUser } from "../Sevice/api";
const useStyle = makeStyles({
    container:{
            width:'50%',
            margin:'5% 0 0 25%',
            '& >*':{
                marginTop:'20px'
            }
    }
})

const intialValue = {
    name:"",
    username:"",
    email:"",
    phone:"",
}
const Adduser = ()=>{
    const [user, setUsers]=useState(intialValue);
    const {name,username,email,phone} = user;
    const classes = useStyle();

    const onValueChange =(e)=>{
        console.log(e.target.value)
        setUsers({...user,[e.target.name]:e.target.value})
        console.log(user);
    }

    const addUserDetail = async() =>{
         await addUser(user);
    }
    return(
        
        
        <FormGroup className={classes.container}>
            <Typography variant='h4'>Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name ='name' value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name ='username' value={username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='email' value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name ='phone' value={phone}/>
            </FormControl>
            <Button variant='contained' onClick={()=>addUserDetail()} color='primary'>Add User</Button>
        </FormGroup>
       
    )

}
export default Adduser;