import * as React from 'react';
import '../scss/app';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import Home from './Home';
import BlogCard from './BlogCard';

export interface AppProps {
}

export interface AppState {
    name: string;
}

const App: React.SFC<AppProps> = () => {

    return (
        <BrowserRouter>
            <main className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/indiv/:id" component={BlogCard} />

                </Switch>
            </main>
        </BrowserRouter>
    )
}

export default App;


