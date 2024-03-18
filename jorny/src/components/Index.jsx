import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AboutPage from "../pages/about/AboutPage";
import ContactPage from "../pages/contact/ContactPage";

export default function IndexPage() {
  return (
    <main className="IndexPage">
      <header className="Header">
        <div className="Header__contents">
          <BrowserRouter>
            <nav>
              <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/about'>
                Who am I
              </NavLink>
              <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/about'>

              </NavLink>
              <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/contact'>
                Contact
              </NavLink>
            </nav>
            <Routes>
              <Route path='/about' element={<AboutPage />} />
              <Route path='/contact' element={<ContactPage />} />
            </Routes>
          </BrowserRouter>
        </div>

      </header>
    </main>

  );
}