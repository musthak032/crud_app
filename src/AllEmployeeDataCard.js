

import React from "react";
import "./EmployeeCard.css";

const AllEmployeeDataCard = ({ alldata,LoadDetail,LoadEdit,Removefunction }) => {
  return (
    <div className="card employee-card">
      <div className="card-content">
        <div className="card-header">
          <h5 className="card-title">{alldata.name}</h5>
         
        </div>
        <div className="card-body">
          <div className="employee-details">
            <p className="employee-info">
              <strong>Employee ID:</strong> {alldata.id}
            </p>
            <p className="employee-info">
              <strong>Email:</strong> {alldata.email}
            </p>
            <p className="employee-info">
              <strong>Phone:</strong> {alldata.phone}
            </p>
          </div>
        </div>
        <div className="card-footer">
          <button onClick={()=>{LoadDetail(alldata.id)}}  className="btn btn-primary">View Profile</button>
          <button onClick={()=>{LoadEdit(alldata.id)}} className="btn btn-primary">Edit Profile</button>
          <button onClick={()=>{Removefunction(alldata.id)}} className="btn btn-primary">Remove Profile</button>
          
        </div>
      </div>
    </div>
  );
};

export default AllEmployeeDataCard;
