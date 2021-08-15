import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Contacts } from './pages/Contacts';
import { AddContact } from './pages/AddContact';
import { Send } from './pages/Send';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/contacts/add">
                    <AddContact />
                </Route>
                <Route path="/contacts/:id/send">
                    <Send />
                </Route>

                <Route path="/contacts">
                    <Contacts />
                </Route>

                <Route path="/">
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
