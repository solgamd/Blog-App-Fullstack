import * as React from 'react';
import '../scss/app';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Details from '../views/Details';
import Navbar from './Navbar';
import NewPost from '../views/NewPost';
import Admin from '../views/Admin';

export interface AppProps {}

const App: React.SFC<AppProps> = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <main className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/:blogid/details" component={Details} />
                    <Route exact path="/new" component={NewPost} />
                    <Route exact path="/admin" component={Admin} />

                </Switch>
            </main>
        </BrowserRouter>
    )
}

export default App;


