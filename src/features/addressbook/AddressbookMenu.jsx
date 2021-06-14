import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Header, Input, Button,Icon } from 'semantic-ui-react'

const AddressbookMenu = () => {
    const [addressbook, setAddressbook] = useState(
        [
            {
                id: "1",
                fName: "Muhammad",
                lName: "Ali"
            },
            {
                id: "2",
                fName: "Akram",
                lName: "Rasheed"
            }, {
                id: "3",
                fName: "Chaudhry",
                lName: "azhrr"
            },
            {
                id: "4",
                fName: "Suleman",
                lName: "Rasheed"
            }, {
                id: "5",
                fName: "Lara",
                lName: "Ramboo"
            },
            {
                id: "6",
                fName: "Zara",
                lName: "Rasheed"
            }
        ]
    )

    return (
        <Menu vertical style={{ minWidth: "100%" }}>
            <Header icon="user" attached inverted color="gray" content="My Addressbook" />
            <Button as={Link} to="/addressbookForm" color="green" content="Add" floated="left" />
            <Input
                fluid
                icon="search"
                placeholder="Search..."
                width="100%"
            />
            {addressbook.map((address, index) => (
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
    )
}

export default AddressbookMenu
