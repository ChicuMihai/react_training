import React, { Component } from 'react'
import ShowCount from './ShowCount';
import Iterator from './Iterator';
import TextBox from './TextBox';
import Paragraph from './Paragraph';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


// export const users = [
//     { id: 1, firstName: 'Mihai', lastName: 'Chicu' },
//     { id: 2, firstName: 'Andrei', lastName: 'Gorbatovschi' },
//     { id: 3, firstName: 'Valeriu ', lastName: 'Seremet' },
//     { id: 4, firstName: 'Anna', lastName: 'Smith' },
//     { id: 5, firstName: 'Anna', lastName: 'Smith' },
//     { id: 6, firstName: 'Anna', lastName: 'Smith' },
//     { id: 7, firstName: 'Catalin ', lastName: 'Pentelei' },
//     { id: 8, firstName: 'Anna', lastName: 'Smith' },
//     { id: 9, firstName: 'Anna', lastName: 'Smith' }

// ];

const setUserData = (state) => {
    return { users: state };
}

export class Home extends Component {


    state = { i: 0, text: '' }


    render() {
        return (
            <div className="row">
                <ul>
                    {this.props.users.map((user) =>
                        <li><Link key={user.id} to={"/user/" + user.id}>{user.firstName}</Link></li>
                    )}
                </ul>
            </div>
        )
    }
    handleOnClick() {
        this.setState((state) => {

            return { i: state.i + 1 }
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.i <= 10;

    }
    setText(e) {
        this.setState({ text: e.target.value });

    }


}
export default connect(setUserData)(Home);