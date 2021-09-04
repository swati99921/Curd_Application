import { FormControl, InputLabel,FormGroup,Input,Button,makeStyles, Typography } from "@material-ui/core"

import { useState,useEffect } from "react";
import { editUser, getUsers } from "../Sevice/api";
import { useHistory, useParams } from "react-router";
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
const EditUser = ()=>{
    const [user, setUsers]=useState(intialValue);
    const {name,username,email,phone} = user;
    const {id} = useParams();
    const classes = useStyle();
    const history = useHistory();

    useEffect(()=>{
        loaduserData();
    }, []);
    const loaduserData =async()=>{
       const response =  await getUsers(id);
       setUsers(response.data);
    }

    const onValueChange =(e)=>{
        console.log(e.target.value)
        setUsers({...user,[e.target.name]:e.target.value})
        console.log(user);
    }

    const editUserDetail = async() =>{
         await editUser(id,user);
         history.push('./all');
        // history.push('./edit');

    
    }
    return(
        
        
        <FormGroup className={classes.container}>
            <Typography variant='h4'>Edit User</Typography>
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
            <Button variant='contained' onClick={()=>editUserDetail()} color='primary'>Edit User</Button>
        </FormGroup>
       
    )

}
export default EditUser;