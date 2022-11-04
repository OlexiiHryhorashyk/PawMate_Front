import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";

const HomeRoute = {
    path: "/",
    component: HomePage,
}

const LoginRoute = {
    path: "/login_page",
    component: LoginPage,
}

const RegistrationRoute = {
    path: "/registration_page",
    component: RegistrationPage,
}

export const routes = [
    HomeRoute, LoginRoute, RegistrationRoute
]

