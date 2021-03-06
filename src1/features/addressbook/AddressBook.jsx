import React, { useEffect, useState } from "react";
import { Menu, Header, Input, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const mapState = state => ({
  addresses: state.test
});

const AddressBook = ({ addresses }) => {
  const [Addresses, setAddresses] = useState([])
  const [searchField, setSearchField] = useState("")

  useEffect(() => {
    setAddresses(addresses)
  }, [addresses])
  const onSearchChange = e =>
    setSearchField(e.target.value);

  let sortedAddrBook = Addresses.sort(function (a, b) {
    if (a.fName < b.fName) {
      return -1;
    }
    if (a.fName > b.fName) {
      return 1;
    }
    return 0;
  });
  const filteredAddresses = sortedAddrBook.filter(Address => {
    return Address.fName.toLowerCase().includes(searchField.toLowerCase());
  });


  return (
    <Menu vertical style={{ minWidth: "100%" }}>
      <Header
        icon="user"
        attached
        inverted
        color="grey"
        content="My Address Book"
      />
      <Button
        as={Link}
        to="/AddressBookForm"
        color="green"
        floated="right"
        content="Add"
      />
      <Input
        onChange={onSearchChange}
        fluid
        icon="search"
        placeholder="Search..."
        width="120px"
      />
      {filteredAddresses.map((address, index) => (
        <Menu.Item
          key={index}
          as={Link}
          to={`/AddressBookForm/${address.id}`}
        >
          {address.fName + "  " + address.lName}
          <Icon name='edit' />
        </Menu.Item>
      ))}
    </Menu>
  );
}


export default connect(
  mapState,
  null
)(AddressBook);
