//import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

//( onClick={() => props.navigate('/list')})


function HomeComponent(props) {

    //const navigate = useNavigate();



    return (
        <div className="row mt-5 justify-content-center">
            <h3>Welcome {props.params.name}</h3>
            <Link to="/list" className="btn btn-primary btn-lg">Go To List</Link >
        </div>
    )
}


export default HomeComponent;