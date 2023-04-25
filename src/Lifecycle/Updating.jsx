import React from "react";

class UpdatingComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "green",
        };
    }

    changeColor = () => {
        this.setState({
            color: "purple",
        });
    }

    // static getDerivedStateFromProps(props, state) {
    //     return {
    //         color: props.favcolor,
    //     };
    // }

    // shouldComponentUpdate() {
    //     return true;
    // }


    render() {
        return (
            <div>
                <div className="update-Comp">my favourite color is {this.state.color}</div>
                <button className="btn btn-primary mt-5" onClick={this.changeColor}>Change color</button>

                <div id="prev"></div>
                <div id="curr"></div>
            </div>
        );
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("prev").textContent = prevState.color;
        return null;
    }

    componentDidUpdate() {
        document.getElementById("curr").textContent = this.state.color;
    }
}

export default UpdatingComponent;