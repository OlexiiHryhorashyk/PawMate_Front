import React from "react"
import {Redirect, Route, Switch} from "react-router-dom"
import {routes} from "./index";

const routeWithSubRoutes = (routes) =>
    routes.map(({children, path, layout: Layout, component: Component}, index) => {
        return children ? (
            children.map(({path, layout: Layout, component: Component, protectedRoute}, index) => (
                <Route key={index} path={path} exact><Component/></Route>
            ))) : (
            <Route key={index} path={path} exact><Component/></Route>
        )
    })


const Routes = () => (
    <Switch>
        {routeWithSubRoutes(routes)},
        <Redirect to={{pathname: "/error", state: {errorInfo: "404 error"}}}/>
    </Switch>
)

export default Routes