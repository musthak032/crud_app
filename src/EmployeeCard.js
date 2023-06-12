import React from 'react';
// import "./EmployeeCard.css"; 
const EmployeeCard = ({ empdata, LoadDetail, LoadEdit, Removefunction }) => {
  return (
    <div className="card employee-card">
      <div className="card-body">
        <h5 className="card-title">{empdata.name}</h5>
        <div className="employee-details">
          <p className="card-text">
            <strong>Employee ID:</strong> {empdata.id}
          </p>
          <p className="card-text">
            <strong>Email:</strong> {empdata.email}
          </p>
          <p className="card-text">
            <strong>Phone:</strong> {empdata.phone}
          </p>
        </div>
        <div className="d-grid gap-2">
          <button onClick={() => LoadDetail(empdata.id)} className="btn btn-primary">
            View Profile
          </button>
          <button onClick={() => LoadEdit(empdata.id)} className="btn btn-primary">
            Edit Profile
          </button>
          <button onClick={() => Removefunction(empdata.id)} className="btn btn-primary">
            Remove Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
