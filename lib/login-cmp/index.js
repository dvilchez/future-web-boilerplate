import React from 'react';
import { connect } from 'react-redux'
import { tryLoginUser } from './actions'

var loginMenu = React.createClass({
    render: function(){
        return <div><input type="text" ref="user"/><input type="password" ref="pass"/><button onClick={this.login}>Login</button></div>
    },

    login: function(){
        this.props.dispatch(tryLoginUser(this.refs.user.value, this.refs.pass.value));
    }
});

function select(state){
    return {
        user: state.get('user')
    };
};

export default connect(select)(loginMenu);
