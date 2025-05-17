import { useNavigate } from "react-router-dom";
import "./homeBody.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid homePage p-0">
      <div className="homeBody">
        <div className="row align-items-center g-0">
          <div className="col-lg-7 col-md-8 col-12">
            <div className="content">
              <h1 className="display-4 fw-bold mb-3">Luxurious Rooms</h1>
              <h5 className="mb-lg-4">Deluxe Rooms Starting at $299</h5>
              <button onClick={() =>navigate("./rooms")} className="btn btn-primary btn-lg">Our Rooms</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;