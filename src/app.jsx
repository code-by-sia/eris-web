import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/index";
import LoginPage from "./pages/login";
import MembersPage from "./pages/members";
import BookPage from "./pages/books";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="books" element={<BookPage />} />
        <Route path="members" element={<MembersPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
