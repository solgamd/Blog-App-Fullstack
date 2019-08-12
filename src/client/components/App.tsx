import * as React from 'react';
import '../scss/app';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Details from '../views/Details';
import Navbar from './Navbar';
import NewPost from '../views/NewPost';

export interface AppProps {}

// export interface AppState {
//     name: string;
// }

const App: React.SFC<AppProps> = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <main className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/:blogid/details" component={Details} />
                    <Route exact path="/new" component={NewPost} />

                </Switch>
            </main>
        </BrowserRouter>
    )
}

export default App;


