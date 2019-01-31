import React, { Component } from 'react'
import { connect } from 'react-redux';
import { CurrentUser } from '../components/CurrentUser';
export class EditUser extends Component {


    render() {
        return (
            <div>

            </div>
        )
    }


}
const mapStateToProps = (state) => {
    return {
        name: state.name
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: 'SET_NAME',
                payload: name
            })
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CurrentUser);

