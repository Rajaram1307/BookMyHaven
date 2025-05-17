import { useNavigate } from "react-router-dom";
import "./viewRoom.css";
import img1 from "./homeimg.jpg";
import Navigation from "../Navigation";
import Footer from "../footer/Footer";
import Button from "../../Button/Button";
const ViewRoom = (props) => {
  let pet = props.pet;
  const navigate = useNavigate();
  return (
    <>
     <Navigation/>
      <div className="container-fluid homePage2 p-0">
        <div className="homeBody2">
          <div className="row align-items-center g-0">
            <div className="col-lg-7 col-md-8 col-12">
              <div className="content2 text-md-start p-4">
                <h1 className="display-4 fw-bold mb-3 text-center">Our Rooms</h1>
                <div className="text-center">
                <a onClick={() => navigate("/rooms")} className="btn btn-primary btn-lg ">
                  Back To Rooms
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 mb-3 imgContainer">
            <img src={props.preimg1} alt="Room" />
          </div>
          <div className="col-12 col-md-4 mb-3 imgContainer">
            <img src={props.preimg2} alt="Room" />
          </div>
          <div className="col-12 col-md-4 mb-3 imgContainer">
            <img src={props.preimg3} alt="Room"  />
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6 mt-4 ps-5 w-100">
            <h4>Details:</h4>
            <p style={{maxWidth:"90vw"}} className="gap-1">
             {props.details}
            </p>
          </div>
          <div className="col-12 col-md-6 mt-4 ps-5">
            <h4>Information:</h4>
            <p className="pt-2">Price: ${props.price}</p>
            <p className="pt-2">Size: {props.size}SQFT</p>
            <p className="pt-2">Max Capacity: {props.size} person</p>
            <p className="pt-2"> {pet ? "pets allowed":"No pets allowed" } </p>
          </div>
        </div>
      </div>
     <div className="container pb-5">
  <div className="row">
    <h4 className="pb-2 ps-4">Extras:</h4>
    {props.extra.map((item, index) => (
      <div className="col-12 col-md-4 ps-5" key={index}>
        <p>{item}</p>
      </div>
    ))}
  </div>
</div>
<div onClick={()=>alert("Booked")} className="my-5" style={{ display: "flex",
    justifyContent: "center",
    alignItems: "center"}}>
<Button/>
</div>
     <Footer/>
    </>
  );
};

export default ViewRoom;
