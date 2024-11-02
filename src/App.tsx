import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Amplify } from "aws-amplify";

import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';

import ErrorPage from "./pages/error/ErrorPage.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import Login from "./pages/auth/Login.tsx";
import ForgotPassword from "./pages/auth/ForgotPassword.tsx";
import ResetPassword from "./pages/auth/ResetPassword.tsx";
import Signup from "./pages/auth/Signup.tsx";
import VerifyEmail from "./pages/auth/VerifyEmail.tsx";

Amplify.configure(outputs);

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
