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
          <div className="row">
            <div className="col-sm-6">
                <h1>{ title }</h1>
                <h2>Payment Level - £{ payment }</h2>
                <p>{ description }</p>
            </div>
            <div className="col-sm-6 group-actions">
               <p>
                 Current Members
               </p>
                <a href="#" className="btn btn-lg btn-primary text-uppercase mb-1">Join group</a>
                <a href="#" className="btn btn-lg btn-danger text-uppercase mb-1 ml-1">Leave group</a>
            </div>
          </div>
        </td>
      </tr>
    );
  }

  render() {
    console.log(this.props);
    return (
      <table className="table table-striped">
        <th colSpan="2">
          <h1 className="text-center display-4">Your Saving Groups</h1>
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
