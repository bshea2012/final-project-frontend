import { useState } from "react";
import "./Header.css";
import SearchForm from "../SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";

function Header({
  handleSigninClick,
  onSearchRequest,
  isLoggedIn,
  handleLogout,
  onMobileMenuClick,
  onMobileMenuClose,
  mobileOpen,
}) {
  return (
    <header className="header">
      <Navigation
        handleSigninClick={handleSigninClick}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        onMobileMenuClick={onMobileMenuClick}
        onMobileMenuClose={onMobileMenuClose}
        mobileOpen={mobileOpen}
      />

      <SearchForm onSearchRequest={onSearchRequest} />
    </header>
  );
}

export default Header;
