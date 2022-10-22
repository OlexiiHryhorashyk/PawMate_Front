import React from "react"
import {  Navigate, Routes as Switch, Route } from 'react-router-dom';
import {routes} from "./index";

const renderComponent = (Layout, Component, props) => {
    if (Layout !== null) {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    } else {
        return (
            <Component {...props} />
        )
    }
}

const routeWithSubRoutes = (routes) =>
    routes.map(({children, path, layout: Layout, component: Component}, index) => {
        return children ? (
            children.map(({path, layout: Layout, component: Component, protectedRoute}, index) => (
                <Route key={index} path={path} exact render={props => renderComponent(Layout, Component, props)}/>
            ))) : (
                <Route key={index} path={path} exact render={props => renderComponent(Layout, Component, props)}/>
        )
    })


const Routes = () => (
    <Switch>
        {routeWithSubRoutes(routes)},
        <Navigate to={{pathname: "/error", state: {errorInfo: "404 error"}}}/>
    </Switch>
)

export default Routes