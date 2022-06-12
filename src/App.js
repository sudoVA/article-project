
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from './components/signUp/signUp';
import LoginForm from "./components/login/login";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="sign-up" element={<SignUpForm />} />
          <Route path="login" element={<LoginForm />} />
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
