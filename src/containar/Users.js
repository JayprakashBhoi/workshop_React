import {useInsertionEffect, useState} from "react";
function Users(){
    const [users,setUser]= useState([]);
    useInsertionEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(Response=>Response.json()).then(data=>{
            setUser(data)
        })
    })
    return(
        <div>
            <h1>Users</h1>
            <ul>{
             
                  users.map((user,index) =>{
                    return <li key = {index}>{user.name},{user.email}</li>
                  })
                }
            </ul>
        </div>
    )
}
export default Users;