import React from 'react'
import { Container } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import AddressbookMenu from '../../features/addressbook/AddressbookMenu'
import AddressbookForm from '../../features/addressbook/AddressbookForm'
const App = () => {
    return (
        <Container className="main">
            <Grid>
                <Grid.Column width={6}>
                    <Route path='/' component={AddressbookMenu} />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Switch>
                        <Route path='/addressbookForm' component={AddressbookForm} />
                        <Route path='/addressbookForm/:id' component={AddressbookForm} />
                    </Switch>
                </Grid.Column>
            </Grid>
        </Container>
    )
}
export default App;