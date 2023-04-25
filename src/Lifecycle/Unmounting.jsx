import React from "react";

class UnmountingComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    removeHeader = () => {
        this.setState({
            show: false
        })
    };


    render() {
        if (this.state.show) {
            var header = <Header />


        }
        return (
            <div className="unmounting-phase">
                {header}
                <button className="btn btn-danger" onClick={this.removeHeader}>Remove Header</button>
            </div>
        );
    }

}


class Header extends React.Component {

    componentWillUnmount() {
        alert("the header will be removed");
    }



    render() {
        return (
            <h4>My header</h4>
        );
    }
}

export default UnmountingComponent;