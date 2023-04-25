import React from "react";


class MountingComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: "blue",
        };

    }

    // static getDerivedStateFromProps(props, state) {
    //     return {
    //         color: props.favcolor,
    //     };
    // }

    render() {
        return (
            <div>
                <label>My favourite colour is {this.state.color}</label>
            </div>
        );
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                color: "White"
            })
        }, 5000);
    }


}

export default MountingComponent;