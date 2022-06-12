import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthenticatedRoute, PublicRoute } from "../utils/routingUtils";
import Dashboard from "../components/dashboard/dashboard";
import LoginForm from "../components/login/login";
import SignupForm from "../components/signUp/signUp";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route
                    path={"login"}
                    element={<PublicRoute component={<LoginForm />} />}
                />
                <Route
                    path={"signup"}
                    element={<PublicRoute component={<SignupForm />} />}
                />

            </Routes>
        </BrowserRouter>
    )
}
