import React from "react";


class ListComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userList: [
                {
                    id: 1,
                    name: 'Siran',
                    addr: 'madukkur',
                    phno: 8220525757
                }, {
                    id: 2,
                    name: 'Bowki',
                    addr: 'madukkur',
                    phno: 8220525757
                }, {
                    id: 3,
                    name: 'Karthi',
                    addr: 'madukkur',
                    phno: 8220525757
                }, {
                    id: 4,
                    name: 'Selva',
                    addr: 'madukkur',
                    phno: 8220525757
                }, {
                    id: 5,
                    name: 'Thiru',
                    addr: 'madukkur',
                    phno: 8220525757
                }
            ]
        }
    }

    render() {
        return (

            <React.Fragment>
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.userList.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.addr}</td>
                                        <td>{user.phno}</td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>

                </div>
            </React.Fragment>
        );
    }
}

export default ListComponent;