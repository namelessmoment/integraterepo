import "../../styles/client/clientpage.css"
import Navigation from "../../components/Navigation";
import { Link } from "react-router-dom";

export default function Projects()
{
    const arr=[{Title:"t1",Description:"D1",pstatus:"completed"},{Title:"t2",Description:"D2",pstatus:"pending"},{Title:"t3",Description:"D3",pstatus:"completed"}]
    return(

        <div className="projects">
           <Navigation/>
           <Link to={'PostProject'} className="btn">
                    <button >Post Project</button>
                </Link>
           <div className="cards">
              {
                
                arr.map((item)=>(
                    <div key={item.Title} className="card">
                    <body className="cardbody">
                    <h4>{item.Title}</h4>
                    <h4>{item.Description}</h4>
                    <h4>status:{item.pstatus}</h4>
                    <Link to={'./bids'}>
                    <button >Show Bids</button>
                    </Link>
                    </body>
                    </div>
                ))
              }
           </div>

        </div>
    )
}