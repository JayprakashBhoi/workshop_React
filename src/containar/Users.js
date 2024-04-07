import React,{userState} from "react";
function Users(){
    const [users,setUser]=userState(
        [
            {name:"jay",age:21},
            {name : "vinay", age:25}

        ]
    );
}
export default Users;