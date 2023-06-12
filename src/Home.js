import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import EmployeeCard from "./EmployeeCard";
import AllEmployeeDataCard from "./AllEmployeeDataCard";
import "./Home.css";

const Home = () => {
  const [empdata, setempdata] = useState(null);
  const [pageCount, setpageCount] = useState(0);
  const [search, setsearch] = useState("");
  const [totaluser, settotaluser] = useState("");
  const navigate = useNavigate();

  const [alldata, setalldata] = useState(null);

  const LoadDetail = (id) => {
    navigate("/crud_app/" + id);
  };

  const handlepageclick = async (data) => {
    console.log("clicked " + data.selected);
    let currentpage = data.selected + 1;
    const pageloadfromserver = await fetchpage(currentpage);
    setempdata(pageloadfromserver);
  };

  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove")) {
      fetch("https://employee-data-bat9.onrender.com/employee/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .then((resp) => {
          navigate("/crud_app");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const LoadEdit = (id) => {
    navigate("/crud_app/edit/" + id);
  };

  useEffect(() => {
    fetch("https://employee-data-bat9.onrender.com/employee")
      .then((res) => res.json())
      .then((resp) => {
        setalldata(resp);
        settotaluser(resp);
        let total = resp.length;
        total = Math.ceil(total / 8);
        console.log("total page count " + total);
        console.log("total object " + total);
        setpageCount(total);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    fetch("https://employee-data-bat9.onrender.com/employee?_page=1&_limit=8")
      .then((res) => res.json())
      .then((resp) => {
        setempdata(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const fetchpage = async (currentpage) => {
    const res = await fetch(
      `https://employee-data-bat9.onrender.com/employee?_page=${currentpage}&_limit=8`
    );
    const resp = await res.json();
    return resp;
  };

  return (
    <div>
      <div className="card-footer">
        <input
          type="text"
          placeholder="Search..."
          className="search form-control"
          onChange={(e) => {
            setsearch(e.target.value);
          }}
        />
        <button className="bttn btn btn-primary" type="submit">
          <Link className="bttn-text" to="/crud_app/create">
            Add New (+)
          </Link>
        </button>
      </div>

      <h5 className="text-right">Total user {totaluser.length}</h5>

      <div>
        {search.length !== 0
          ? alldata &&
            alldata
              .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
              .map((item) => (
                <div key={item.id}>
                  <AllEmployeeDataCard
                    alldata={item}
                    LoadEdit={LoadEdit}
                    Removefunction={Removefunction}
                    LoadDetail={LoadDetail}
                  />
                </div>
              ))
          : empdata &&
            empdata
              .filter((item) => item.name.toLowerCase().includes(search))
              .map((item) => (
                <div key={item.id}>
                  <EmployeeCard
                    empdata={item}
                    LoadEdit={LoadEdit}
                    Removefunction={Removefunction}
                    LoadDetail={LoadDetail}
                  />
                </div>
              ))}
                {search.length === 0 && (
                  <div className="pagination-container">
                    <ReactPaginate
                      previousLabel={"Previous"}
                      nextLabel={"Next"}
                      breakLabel={".."}
                      pageCount={pageCount}
                      marginPagesDisplayed={0}
                      pageRangeDisplayed={2}
                      onPageChange={handlepageclick}
                      containerClassName={"pagination"}
                      pageClassName={"page-item"}
                      pageLinkClassName={"page-link"}
                      previousClassName={"page-item"}
                      previousLinkClassName={"page-link"}
                      nextClassName={"page-item"}
                      nextLinkClassName={"page-link"}
                      breakClassName={"page-item"}
                      breakLinkClassName={"page-link"}
                      activeClassName={"active"}
                    />
                  </div>
                )}

      </div>
    </div>
  );
};

export default Home;
