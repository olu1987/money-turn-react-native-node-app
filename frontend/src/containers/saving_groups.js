import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchAllSavingGroups} from '../actions';

class SavingGroups extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
          <div>Hello Money Turns</div>
        )
    }

    onFormSubmit(event){
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term: ''})
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchAllSavingGroups} , dispatch)
}

export  default connect(null, mapDispatchToProps)(SavingGroups);