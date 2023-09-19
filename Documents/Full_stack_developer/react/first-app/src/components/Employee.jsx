import React from "react";

let Employee = (props) => {
    //destructuring concept
    let {name, age, designation} = props
  return (
    <>
       <div className="container mt-3">
        <div className="grid">
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            {/* <h2>Welcome to {props.name}</h2> */}
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Name : {name}
                                </li>
                                <li className="list-group-item">
                                    Age : {age}
                                </li>
                                <li className="list-group-item">
                                    Designation : {designation}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </>
  )
};

export default Employee;