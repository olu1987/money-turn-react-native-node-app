import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';

class SavingGroups extends Component {
    constructor(props){
        super(props);
        this.props.fetchAllSavingGroups();
    }

    componentDidMount() {

    }

    render() {
        console.log(this.props);
        return (
          <div>Hello Money Turns</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        savingGroups: state.savingGroups
    }
  }

function mapDispatchToProps(dispatch) {
    const fetchAllSavingGroups = actions.fetchAllSavingGroups;
    return bindActionCreators( { fetchAllSavingGroups } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SavingGroups);