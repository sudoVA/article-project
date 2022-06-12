import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthenticatedRoute, PublicRoute } from "../utils/routingUtils";
import Dashboard from "../components/dashboard/dashboard";
import LoginForm from "../components/login/login";
import SignupForm from "../components/signUp/signUp";
import Article from "../components/article/article";

import { routeUrls } from "../constants/constants";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route
                    path={routeUrls.LOGIN}
                    element={<PublicRoute component={<LoginForm />} />}
                />
                <Route
                    path={routeUrls.SIGNUP}
                    element={<PublicRoute component={<SignupForm />} />}
                />
                <Route
                    path={routeUrls.DASHBOARD}
                    element={<AuthenticatedRoute component={<Dashboard />} />}
                />
                <Route
                    path={routeUrls.ARTICLE}
                    element={<AuthenticatedRoute component={<Article />} />}
                />
            </Routes>
        </BrowserRouter>
    )
}
