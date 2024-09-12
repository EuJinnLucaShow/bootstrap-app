import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Settings from "./pages/Setting/Settings";
import Users from "./pages/Users/Users";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </>
  );
}
