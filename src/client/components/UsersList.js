import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <div>
                Here's a big list of users: 
                {this.renderUsers()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return { users: state.users}
}

export default connect(mapStateToProps, {fetchUsers})(UsersList);