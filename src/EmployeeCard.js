import React from "react";

const EmployeeCard = ({ empdata, LoadDetail, LoadEdit, Removefunction }) => {
  return (
    <div className="card employee-card">
      <div className="card-content">
        <div className="card-header">
          <h5 className="card-title">{empdata.name}</h5>
        </div>
        <div className="card-body">
          <div className="employee-details">
            <p className="employee-info" style={{ textAlign: "left" }}>
              <strong>Employee ID:</strong> {empdata.id}
            </p>
            <p className="employee-info" style={{ textAlign: "left" }}>
              <strong>Email:</strong> {empdata.email}
            </p>
            <p className="employee-info" style={{ textAlign: "left" }}>
              <strong>Phone:</strong> {empdata.phone}
            </p>
          </div>
        </div>
        <div className="card-footer">
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
