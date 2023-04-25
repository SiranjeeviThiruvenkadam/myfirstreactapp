//import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

//( onClick={() => props.navigate('/list')})

function LogoutComponent(props) {
  //const navigate = useNavigate();

  return (
    <div className="row mt-5 justify-content-center">
      <h3>You are Logged Out Sucessfully</h3>
      <Link to="/login" className="btn btn-primary btn-lg">
        Go To Login page
      </Link>
    </div>
  );
}

export default LogoutComponent;
