import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./Edit.css";

const Edit = () => {
  const { editid } = useParams({});

  //const [empdata, setempdata] = useState({});

  useEffect(() => {
    //fetch("http://localhost:3001/employee/" + editid)

    fetch("https://employee-data-bat9.onrender.com/employee/" + editid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        //setempdata(resp);
        idchange(resp.id);
        namechange(resp.name);
        emailchange(resp.email);
        phonechange(resp.phone);
        activechange(resp.active);

        console.log(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [active, activechange] = useState(true);
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log({ id, name, email, phone, active }); //for check
    const empdata = { id, name, email, phone, active };

    fetch("https://employee-data-bat9.onrender.com/employee/" + editid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved successfully.");
      })
      .then((resp) => {
        navigate("/crud_app");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
 

    <div className="card employee-card">
      <form onSubmit={handlesubmit}>
        <div className="card-content">
          <div className="card-header">
            <h5 className="card-title ">Employee Edit </h5>
          </div>
          <div className="card-body">
            <div className="employee-details">
              <div className="form-group">
                <p
                  className="employee-info-detail"
                  style={{ textAlign: "left" }}
                >
                  <label>ID</label>
                  <input
                    value={id}
                    disabled="disabled"
                    className="form-control"
                  ></input>
                </p>
              </div>
              <div className="form-group">
                <p
                  className="employee-info-detail"
                  style={{ textAlign: "left" }}
                >
                  <label>Name</label>
                  <input
                    required
                    value={name}
                    className="form-control"
                    onChange={(e) => {
                      namechange(e.target.value);
                    }}
                  ></input>
                  {name.length === 0 && (
                    <span className="text-danger">Enter the name</span>
                  )}
                </p>
              </div>
                <div className="form-group">
              <p className="employee-info-detail" style={{ textAlign: "left" }}>
                  <label>E-Mail</label>
                  <input
                    value={email}
                    onChange={(e) => {
                      emailchange(e.target.value);
                    }}
                    className="form-control"
                  ></input>
              </p>
                </div>

                <div className="form-group">
              <p className="employee-info-detail" style={{ textAlign: "left" }}>
                  <label>Phone</label>
                  <input
                    value={phone}
                    onChange={(e) => {
                      phonechange(e.target.value);
                    }}
                    className="form-control"
                  ></input>
              </p>
                </div>

                <div className="form-check">
              <p className="employee-info-detail" style={{ textAlign: "left" }}>
                  <input
                    checked={active}
                    onChange={(e) => {
                      activechange(e.target.checked);
                    }}
                    type="checkbox"
                    className="form-check-input"
                  ></input>
                  <label className="form-check-label">isActive</label>
              </p>
                </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Save
              </button>
              <Link to="/curd_app">
                <button className="btn btn-primary" type="submit">
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Edit;
