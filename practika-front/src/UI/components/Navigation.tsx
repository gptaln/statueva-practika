import React from 'react'
import {Route, Switch } from "react-router-dom"
import {HomePage} from '../pages/home'
import {AboutPage} from '../pages/about'

export const Navigation: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route path="/about">
                <AboutPage/>
            </Route>
            <Route>
                <div>
                    404 error
                </div>
            </Route>
        </Switch>
    )
}
