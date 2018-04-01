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
    const { title, description, payment, _id } = group;

    return (
      <tr key={_id}>
        <td>
          <h1>{ title }</h1>
          <h2>Payment Level - £{ payment }</h2>
          <p>{ description }</p>
        </td>
        <td>
            <a href="#" className="btn btn-lg btn-primary text-uppercase">Join group</a>
            <a href="#" className="btn btn-lg btn-danger text-uppercase ml-1">Leave group</a>
        </td>
      </tr>
    );
  }

  render() {
    console.log(this.props);
    return (
      <table className="table table-striped">
        <th colSpan="2">
          <h1 className="text-center light">Your Saving Groups</h1>
        </th>
        <tbody>
          {this.props.savingGroups.map(this.renderGroups)}
        </tbody>
      </table>
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
