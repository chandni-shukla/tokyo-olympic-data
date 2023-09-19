import React from "react";

class EmployeeClass extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
        <div className="container mt-3">
         <div className="grid">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body bg-primary">
                            {/* <h2>Welcome to {props.name}</h2> */}
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Name : {this.props.name}
                                </li>
                                <li className="list-group-item">
                                    Age : {this.props.age}
                                </li>
                                <li className="list-group-item">
                                    Designation : {this.props.designation}
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
    }
}
export default EmployeeClass;