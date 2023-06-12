import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Edit.css";

const Detail = () => {
  const { detailid } = useParams({});

  const [empdata, setempdata] = useState({});
  useEffect(() => {
   // fetch("http://localhost:3001/employee/" + detailid)
   detailid&&
    fetch("https://employee-data-bat9.onrender.com/employee/" + detailid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setempdata(resp);

        console.log(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  
  return (
  
  <div className="card employee-card">
  <div className="card-content">
    <div className="card-header">
      <h5 className="card-title">Employee Detail</h5>
    </div>
    <div className="card-body employee-info">
    <div className="employee-details">
        {empdata && (
          <div>
            

            <p className="employee-info " style={{ textAlign: "left" }}>
              <strong>Employee ID:</strong> {empdata.id}
            </p>
            <p className="employee-info " style={{ textAlign: "left" }}>
              <strong>Employee Name:</strong> {empdata.name}
            </p>
            <p className="employee-info " style={{ textAlign: "left" }}>
              <strong>Email:</strong> {empdata.email}
            </p>
            <p className="employee-info " style={{ textAlign: "left" }}>
              <strong>Phone:</strong> {empdata.phone}
            </p>
          
          </div>
        )}
    </div>
    </div>
    <div className="card-footer">
    
    
      
      <Link to="/crud_app">
      <button className="btn btn-primary">
          Back to Home
         </button>
         </Link>
    </div>
  </div>
</div>
  
  );
};
export default Detail;
