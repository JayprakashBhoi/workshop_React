import React,{userState} from 'react';
function DataBuinding(){
    const [data,setData]= userState({
        name : "Mohan",
        age:25
    })
    const handleChenge = (event)=> {
        let value = event.terget.value ;
        setData({...data,name:value});
    }
    return(
        <div> 
            <  h2> Data Buinding </h2>
            <h4> 
                One Why Binding: {data.name},
            {data.age}
            </h4>
            <div>
                <input type='text' value={data.name} onChange={handleChenge}/>
            </div>
        </div>
    )
}


export default DataBuinding;
