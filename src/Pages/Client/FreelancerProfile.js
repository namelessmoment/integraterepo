
import Fl from '../../components/Fl'
import "../../styles/client/clientpage.css"
import Navigation from "../../components/Navigation";

export default function FreelancerProfile()
{
    
  const arr=[{name:"n1",email:"n1@gmail.com",skills:"React,Express,Nodejs"},{name:"n2",email:"n2@gmail.com",skills:"React,Express,Nodejs"}];
    return(
        <div className="freelancers">
        <div>
            <Navigation/>
        </div>
        <div className="cards">
        {
            arr.map((item)=>
            (
            <Fl name={item.name} email={item.email} skills={item.skills}/>
            ))
        }
        </div>
        </div>
    )

}