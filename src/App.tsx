import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";


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
