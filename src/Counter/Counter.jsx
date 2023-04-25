import React from "react";
import '../Counter/Counter.css'
import propTypes from "prop-types";

class MainCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            totalCount: 0
        }
    }

    incrementAll = (value) => {
        console.log("Increment All");
        this.setState({
            totalCount: this.state.totalCount + value
        });

    }

    decrementAll = (value) => {
        console.log("Decrement All");
        this.setState({
            totalCount: this.state.totalCount - value
        });
    }

    reset = () => {
        this.setState({
            totalCount: 0
        });
    }

    render() {
        return (
            <div className="main-counter">
                <h1>Counter App</h1>
                <Counter inc={1} incrementAll={this.incrementAll} decrementAll={this.decrementAll} />
                <Counter inc={5} incrementAll={this.incrementAll} decrementAll={this.decrementAll} />
                <Counter inc={10} incrementAll={this.incrementAll} decrementAll={this.decrementAll} />
                <div className='totalIncValue'>{this.state.totalCount}</div>
                <button className="btn btn-warning" onClick={this.reset}>Reset</button>
            </div>
        );
    }

}

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0

        }
        // this.increment = this.increment.bind(this);
    }

    increment = () => {

        console.log("increment");
        this.setState({
            count: this.state.count + this.props.inc,
        });
        this.props.incrementAll(this.props.inc);
    }

    decrement = () => {

        console.log("decrement");
        this.setState({
            count: this.state.count - this.props.inc,
        });
        this.props.decrementAll(this.props.inc);
    }





    render() {
        // let customstyle = {
        //     fontSize: "24px",
        //     backgroundColor: "green",
        //     color: "white",
        //     padding: "10px 20px",
        //     border: "1px solid white",
        //     borderRadius: "6px",
        //     cursor: "pointer"
        //};
        return (
            <div className="counter-app" >
                <button className="btn btn-danger counter-btn" onClick={this.decrement}>-{this.props.inc}</button>
                {/*<span className="counter-span">{this.state.count}</span>*/}
                <button className="btn btn-success counter-btn" onClick={this.increment}>+{this.props.inc}</button>
            </div >
        );
    }
}

// Counter.defaultProps = {
//     inc: 4
// };

Counter.propTypes = {
    inc: propTypes.number
}
export default MainCounter;