import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { Navbar } from '../components/ui/NavBar';
import { HeroScreen } from '../components/hero/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';


export const DashboardRoutes = () => {
    return (
        <Fragment>
            <Navbar/>
            <div className="container mt-2">
                <Switch>
                    <Route  exact path="/marvel"  component ={MarvelScreen} />
                    <Route  exact path="/heroe/:heroeId"  component ={HeroScreen} />
                    <Route  exact path="/dc"  component ={DcScreen} />
                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </Fragment>
    )
}
