import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import OttDashboard from '../components/OttDashBoard';
import NotFound from '../components/NotFound';
import AddMovie from '../components/AddMoviePage';
import AdminPage from '../components/AdminPage';
import Edit from '../components/Edit';
import modal from '../components/modal';

const AppRouter = ()=>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
            <Route path="/admin" component={AdminPage}/>
            <Route path="/" component={OttDashboard} exact={true} />
            <Route path="/addmovie" component={AddMovie}/>
            <Route path="/modal/:id" component={modal}/>
            <Route path="/edit/:id" component={Edit}/>
            <Route component={NotFound} />
            </Switch>
        </div>


    </BrowserRouter>
);

export default AppRouter;