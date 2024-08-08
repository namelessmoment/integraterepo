import "../styles/client/clientpage.css";
export default function Fl(props)
{
    return(
    <div className="card">
    <body className="cardbody">
        <h4>{props.name}</h4>
        <h4>{props.email}</h4>
        <h4>{props.skills}</h4>
        </body>
    </div>
    )
}