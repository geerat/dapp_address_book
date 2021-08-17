import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Contacts } from './pages/Contacts';
import { AddContact } from './pages/AddContact';
import { Send } from './pages/Send';
import { EditContact } from './pages/EditContact';
import { NotFoundPage } from './pages/NotFoundPage';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/contacts/add">
                    <AddContact />
                </Route>
                <Route path="/contacts/:id/edit">
                    <EditContact />
                </Route>
                <Route path="/contacts/:id/">
                    <Send />
                </Route>
                <Route path="/contacts">
                    <Contacts />
                </Route>
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route path="*">
                    <NotFoundPage />
                </Route>
            </Switch>
            <ToastContainer />
        </Router>
    );
}

export default App;
