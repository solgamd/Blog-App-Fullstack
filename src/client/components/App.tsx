import * as React from 'react';
import './scss/app';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import Home from './Home';

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
                </Switch>
            </main>
        </BrowserRouter>
    )
}

export default App;


