import axios from "axios";


const url = "http://localhost:3003/user";
export var getUsers = async(id) =>{
    id=id || "";
    return  await axios.get(`${url}/${id}`);
}
export var addUser = async(user) =>{
    return  await axios.post(url,user);
}

export const editUser =async(id,user)=>{
    return await axios.put(`${url}/${id}`,user);
}

export const deleteUser =async(id)=>{
    return await axios.delete(`${url}/${id}`);
}
