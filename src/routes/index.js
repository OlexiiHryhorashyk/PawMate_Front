import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import PetCardInfo from "../components/PetCardInfo/PetCardInfo";

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

const PetCardInfoRoute = {
    path: "/pet_card_info",
    component: PetCardInfo,
}
export const routes = [
    HomeRoute, LoginRoute, RegistrationRoute, PetCardInfoRoute
]

