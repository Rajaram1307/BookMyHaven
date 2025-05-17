import { useNavigate } from "react-router-dom";
import "./room.css";
import Card from "../../Card/Card";
import { useEffect, useState } from "react";
import Loading from "../../Loading/Loading";
import Footer from "../../MainComponent/footer/Footer";

const DisplayRooms = () => {
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    size: "",
    breakfast: false,
    pets: false,
    guests: 1
  });

  useEffect(() => {
    fetch("http://localhost:3000/FeaturedProduct")
      .then(data => data.json())
      .then(data => {
        setRooms(data);
        setFilteredRooms(data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, rooms]);

  const applyFilters = () => {
    let result = [...rooms];
    
    result = result.filter(room => 
      room.price >= filters.priceRange[0] && 
      room.price <= filters.priceRange[1]
    );
    
    
    if (filters.size) {
      result = result.filter(room => room.size === filters.size);
    }
    if (filters.breakfast) {
      result = result.filter(room => room.breakfast);
    }
    if (filters.pet) {
      result = result.filter(room => room.pet);
    }
    
    result = result.filter(room => room.capacity >= filters.guests);
    
    setFilteredRooms(result);
  };

  const handlePriceChange = (e, index) => {
    const newPriceRange = [...filters.priceRange];
    newPriceRange[index] = parseInt(e.target.value);
    setFilters({...filters, priceRange: newPriceRange});
  };

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const navigate = useNavigate();

  if (loading) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}>
        <Loading/>
      </div>
    );
  }

  return (
    <>
      <div className="container-fluid homePage1 p-0">
        <div className="homeBody1">
          <div className="row align-items-center g-0">
            <div className="col-lg-7 col-md-8 col-12">
              <div className="content1">
                <h1 className="display-4 fw-bold mb-3">Our Rooms</h1>
                <button onClick={() => navigate("/")} className="btn btn-primary btn-lg">Returns</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-fluid">
        <h1 className="text-center my-5">Search Rooms</h1>
        
        {/* Filter Section */}
        <div className="row mb-5">
          <div className="col-md-3">
            <div className="filter-card p-3 mb-3">
              <h5>Price Range</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>${filters.priceRange[0]}</span>
                
              </div>
              <input
                type="range"
                className="form-range"
                min="0"
                max="1000"
                value={filters.priceRange[0]}
                onChange={(e) => handlePriceChange(e, 0)}
              />
             
            </div>
          </div>
          
          <div className="col-md-3">
            <div className="filter-card p-3 mb-3">
              <h5>Room Size</h5>
              <select 
                className="form-select"
                name="size"
                value={filters.size}
                onChange={handleFilterChange}
              >
                <option value="">All Sizes</option>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
              </select>
            </div>
          </div>
          
          <div className="col-md-3">
            <div className="filter-card p-3 mb-3">
              <h5>Guests</h5>
              <select 
                className="form-select"
                name="guests"
                value={filters.guests}
                onChange={handleFilterChange}
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="col-md-3">
            <div className="filter-card p-3 mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="breakfastCheck"
                  name="breakfast"
                  checked={filters.breakfast}
                  onChange={handleFilterChange}
                />
                <label className="form-check-label" htmlFor="breakfastCheck">
                  Breakfast Included
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="petsCheck"
                  name="pets"
                  checked={filters.pets}
                  onChange={handleFilterChange}
                />
                <label className="form-check-label" htmlFor="petsCheck">
                  Pets Allowed
                </label>
              </div>
            </div>
          </div>
        </div>
        
       
        <div className="mb-4">
          <p>{filteredRooms.length} rooms found</p>
        </div>
        
        
        <div className="row">
          {filteredRooms.map((data) => (
            <div key={data.id} className="col-12 col-md-3 d-flex mb-4">
              <Card 
                id={data.id} 
                type={data.type} 
                price={data.price} 
                image={data.image}
                size={data.size}
                capacity={data.capacity}
              />
            </div>
          ))}
        </div>
      </div>
      
      <Footer/>
    </>
  );
};

export default DisplayRooms;