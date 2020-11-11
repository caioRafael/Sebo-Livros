import  React  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Book from './pages/BookDetails';

import Landing from './pages/Landing';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/book/:id" component={Book}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;