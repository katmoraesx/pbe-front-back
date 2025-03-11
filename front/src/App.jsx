
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Login from './components/Login';
import Login from './pages/Login';
import ListaDisciplinas from './pages/ListaDisciplinas';
import CadastroDisciplina from './pages/CadastroDisciplina';
import EditarDisciplina from './pages/EditarDisciplina';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute path="/disciplinas" component={ListaDisciplinas} />
                <PrivateRoute path="/cadastro-disciplina" component={CadastroDisciplina} />
                <PrivateRoute path="/editar-disciplina/:id" component={EditarDisciplina} />
                <Redirect from="/" to="/login" />
            </Switch>
        </Router>
    );
};

export default App;
