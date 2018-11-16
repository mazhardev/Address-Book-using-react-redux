import React, { Component } from "react";
import {  Menu, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import SortFilterComponent from "./SortFilterComponent";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const mapState = state => ({
  addresses: state.test
});
class AddressBook extends Component {
  render() {
    const { addresses } = this.props;

    return (
      <Menu vertical>
        <Header
          icon="user"
          attached
          inverted
          color="grey"
          content="Address Book"
        />
        <Button
          as={Link}
          to="/AddressBookForm"
          color="green"
          floated="right"
          content="Add"
        />
        <SortFilterComponent addresses={addresses} />
      </Menu>
    );
  }
}

export default connect(
  mapState,
  null
)(AddressBook);
