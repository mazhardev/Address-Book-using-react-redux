import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import AddressBook from "../../features/addressbook/AddressBook";
import AddressBookForm from "../../features/addressbook/AddressBookForm";
import { Grid } from "semantic-ui-react";
class App extends Component {
  render() {
    return (
      <div>

        <Container className="main">
          <Grid>
            <Grid.Column mobile={10} tablet={10} computer={6}>
              <Route path="/" component={AddressBook}></Route>
            </Grid.Column>
            <Grid.Column mobile={6} tablet={6} computer={10}>
              <Switch>
                <Route
                  path="/AddressBookForm/:id"
                  component={AddressBookForm}
                />
                <Route
                  path="/AddressBookForm"
                  component={AddressBookForm}
                />
              </Switch>

            </Grid.Column>
          </Grid>

        </Container>

      </div>
    );
  }
}

export default App;
