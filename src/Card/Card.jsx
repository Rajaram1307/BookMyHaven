import logo1 from "./homeimg.png";
import './card.css';
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate()
    return (
        <>
<div className="card my-4 ms-3" onClick={()=>navigate(`/FeaturedProduct/${props.id}`)}>
  <div className="sub-card category">
    <span className="text_span text-center"><h5>{props.type}</h5></span>
  </div>
  <div className="card_container">
    <img src={props.image} alt="Background" className="background-image" />
  </div>
  <div className="sub-card named">
    <span className="text_span"><h5>Price : $ {props.price}</h5></span>
  </div>
</div>
        </>
    );
}

export default Card;