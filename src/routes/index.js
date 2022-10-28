import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const HomeRoute = {
    path: "/",
    component: HomePage,
}

const LoginRoute = {
    path: "/" +
        "login_page",
    component: LoginPage,
}
export const routes = [
    HomeRoute, LoginRoute
]

