import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage";
import Dashboard from "./pages/dashboard/Dashboard";


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
