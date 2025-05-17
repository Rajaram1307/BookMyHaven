import { useNavigate } from "react-router-dom";
import logo from "./image/logo.png"

function Navigation ()
{
  const navigate= useNavigate();
    
    return(
     <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <img className="mx-3 " src={logo} alt="" height={"70px"} width={"100px"}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav  w-50 mx-auto text-center" style={{fontSize:"22px", cursor:"pointer"}}>
        <a className="nav-link active me-5" aria-current="page" onClick={()=>navigate("/")}>Home</a>
        <a className="nav-link me-5 " onClick={()=>navigate("/rooms")}>Rooms</a>
      </div>
    </div>
  </div>
</nav>
     </>
    );
}
export default Navigation