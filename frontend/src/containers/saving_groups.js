import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';

class SavingGroups extends Component {
  constructor(props) {
    super(props);
    this.props.fetchAllSavingGroups();
  }

  componentDidMount() {

  }

  renderGroups(group) {
    const { title, description } = group;

    return (
      <div>
        <h1>{ title }</h1>
        <p>{ description }</p>
        <div>
          <a href="#" className="btn btn-lg btn-primary text-uppercase">Join group</a>
          <a href="#" className="btn btn-lg btn-danger text-uppercase ml-1">Leave group</a>
        </div>
      </div>
    );
  }

  render() {
    console.log();
    return (
      <div>{this.props.savingGroups.map(this.renderGroups)}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    savingGroups: state.savingGroups,
  };
};

function mapDispatchToProps(dispatch) {
  const { fetchAllSavingGroups } = actions;
  return bindActionCreators({ fetchAllSavingGroups }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SavingGroups);
