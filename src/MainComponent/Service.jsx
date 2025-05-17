import './service.css';
import { ServiceData } from '../data/ServiceData';

const Service = () => {
  const serviceToDisplay = ServiceData.data;

  return (
    <div className="container-fluid service-container py-5">
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold">Services</h1>
      </div>

      <div className="container">
        <div className="row g-4">
          {serviceToDisplay.map((data, index) => (
            <div className="col-12 col-sm-6 col-md-4" key={index}>
              <div className="card h-100 shadow-sm border-0 text-center p-3">
                <h2 className="h5">{data.heading}</h2>
                <p className="text-muted">{data.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
