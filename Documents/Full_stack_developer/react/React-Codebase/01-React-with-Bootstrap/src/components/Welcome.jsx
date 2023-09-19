import React from "react";

// let Welcome = () => {
//     return (
//         <>
//           <h2>Welcome to react Function Component</h2>
//           <button className="btn btn-success"> Read more</button>
//           <i className="fa fa-user-circle fa-4x text-success"/>
//           <i className="fab fa-facebook fa-4x text-primary"></i>
//         </>
//     )
// };


let Welcome = () => {
  return (
    <>
      <div className="grid-mt-3">
        <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="card shadow-lg">
              <div className="card-header bg-success text-white">
                <p className="h4">Welcome to React</p>
              </div>
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloribus nobis at sequi ipsam est in tempore nostrum asperiores a corrupti ipsum, consequatur eos? Rem ex exercitationem dolore temporibus sed!</p>
                <button className="btn btn-success">React More</button>             
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
};

export default Welcome;