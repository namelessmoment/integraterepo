import axios from "axios";
import { useState } from "react"

export default function Signup(){


    const [firstname,setfirstname]=useState("");
    const [lastname,setlastname]=useState("");
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [confirmpass,setconfirmpass]=useState("");
    const handleForm=()=>{
        const userdata={
            firstname:firstname,
            lastname:lastname,
            username:username,
            password:password,
            confirmpass:confirmpass
        }
        axios.post("/storeuser",userdata)
        .then((res)=>{console.log("data added successfully");}
        )
    };

    return(
        <div>
               <form>
               <label>FirstName:</label><br/>
               <input type="text" name="firstname" onChange={(e)=>
               {setfirstname(e.target.value);
               console.log(firstname);
               }}/><br/>
               <label>LastName:</label><br/>
               <input type="text" name="lastname" onChange={(e)=>
               {setlastname(e.target.value);
               console.log(lastname);
               }}/><br/>
                <label>Username:</label><br/>
                <input type="text" id="username" name="username" onChange={(e)=>
               {setusername(e.target.value);
               console.log(username);
               }}/><br/>
                <label>Password:</label><br/>
                <input type="password" id="password" name="password" onChange={(e)=>
               {setpassword(e.target.value);
               console.log(password);
               }}/><br/>
                <label>Confirm Password:</label><br/>
                <input type="password" id="confirmpassword" name="confirmpassword" onChange={(e)=>
               {setconfirmpass(e.target.value);
               console.log(confirmpass);
               }}></input>
                <br/>
                <button onClick={handleForm}>register</button>
               </form> 
        </div>
    )
}