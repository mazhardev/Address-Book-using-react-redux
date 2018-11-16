import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import AddressBook from "../../features/addressbook/AddressBook";
import AddressBookForm from "../../features/addressbook/AddressBookForm";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          
          <Route exact path="/" component={AddressBook} />
        </Switch>
        <Route
          path="/(.+)"
          render={() => (
            <div>
              <Grid>
                <Grid.Column width={5}>
                  <AddressBook />
                </Grid.Column>
                <Grid.Column width={8}>
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
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
