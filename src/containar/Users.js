import {userState} from "react";
function Users(){
    const [users,setUser]=userState(
        [
            {name:"jay",age:21},
            {name : "vinay", age:25}

        ]
    );
    return(
        <div>
            <h1>Users</h1>
            <h2>{users.name}</h2>
        </div>
    )
}
export default Users;