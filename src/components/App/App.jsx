import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import SigninModal from "../SigninModal/SigninModal";
import SignupModal from "../SignupModal/SignupModal";
import SignupSuccessModal from "../SignupSuccessModal/SignupSuccessModal";
import { CurrentSearchedItems } from "../../contexts/CurrentSearchedItems";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { SavedArticlesContext } from "../../contexts/SavedArticlesContext";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";
import { getNews } from "../../utils/newsApi";
import { APIkey, previousWeekDate } from "../../utils/constants";
import { getItems, saveArticle, deleteSavedArticle } from "../../utils/api";
import { signinUser, signupUser, getUserInfo } from "../../utils/auth";
import { setToken, getToken, removeToken } from "../../utils/token";

function App() {
  const [userData, setUserData] = useState({
    id: "",
    email: "",
    username: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [newsItems, setNewsItems] = useState([]);
  const [previousTopic, setPreviousTopic] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedItems, setSavedItems] = useState([]);
  const [searchResults, setSearchResults] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  const handleSigninClick = () => {
    mobileOpen && setMobileOpen(false);

    setActiveModal("signin");
  };

  const handleRegisterClick = () => {
    mobileOpen && setMobileOpen(false);

    setActiveModal("register");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleLogout = () => {
    removeToken();
    navigate("/");
    setIsLoggedIn(false);
  };

  const onMobileMenuClick = () => {
    setMobileOpen(true);
  };

  const onMobileMenuClose = () => {
    setMobileOpen(false);
  };

  const onSearchRequest = (data) => {
    if (data === previousTopic) return;
    setPreviousTopic(data);

    handleSearchRequest(data);
  };

  const handleSearchRequest = (data) => {
    setSearchResults(false);
    setIsLoading(true);

    getNews(data, APIkey, previousWeekDate)
      .then((res) => {
        const unfilteredArticles = res.articles;
        const articleToRemove = "[Removed]";

        const newArray = unfilteredArticles.filter(
          (article) => article.content !== articleToRemove
        );

        if (newArray.length > 0) {
          setHasSearched(true);

          const fetchedArticles = newArray.map((article) => ({
            ...article,
            keyword: data,
          }));

          setNewsItems(fetchedArticles);
        } else {
          setHasSearched(false);
          setSearchResults(true);
        }
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const handleSaveClick = (item) => {
    saveArticle(item)
      .then((res) => {
        setSavedItems([res, ...savedItems]);
      })
      .catch(console.error);
  };

  const handleDeleteArticle = (item) => {
    deleteSavedArticle(item)
      .then(() => {
        const unsavedArticles = savedItems.filter(
          (article) => article.id !== item.id
        );
        setSavedItems(unsavedArticles);
      })
      .catch(console.error);
  };

  const onAddUser = (user) => {
    handleAddUserSubmit(user);
  };

  const handleAddUserSubmit = (user) => {
    setIsLoading(true);
    signupUser(user)
      .then(() => {
        setActiveModal("signup-success");
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const onSigninUser = (user, resetForm) => {
    handleSigninUserSubmit(user, resetForm);
  };

  const handleSigninUserSubmit = ({ email, password }, resetForm) => {
    if (!email || !password) {
      return;
    }

    setIsLoading(true);
    signinUser(email, password)
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          setIsLoggedIn(true);

          const redirectPath = location.state?.from?.pathname || "/saved-news";
          navigate(redirectPath);
        }
        closeActiveModal();
        resetForm();
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const jwt = getToken();

    if (!jwt) {
      return;
    }

    getUserInfo(jwt)
      .then((res) => {
        setIsLoggedIn(true);
        setUserData(res.data);
      })
      .catch(console.error);
  }, [isLoggedIn]);

  useEffect(() => {
    getItems()
      .then((data) => {
        setSavedItems(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    const handleRemoteClick = (e) => {
      if (e.target.classList.contains("modal")) {
        closeActiveModal();
      }
    };

    window.addEventListener("keydown", handleEscClose);
    document.addEventListener("mousedown", handleRemoteClick);

    return () => {
      window.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleRemoteClick);
    };
  }, [activeModal]);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onMobileMenuClose();
      }
    };

    const handleRemoteClick = (e) => {
      if (e.target.classList.contains("nav__mobile")) {
        onMobileMenuClose();
      }
    };

    window.addEventListener("keydown", handleEscClose);
    document.addEventListener("mousedown", handleRemoteClick);

    return () => {
      window.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleRemoteClick);
    };
  }, [mobileOpen]);

  return (
    <CurrentUserContext.Provider value={{ userData }}>
      <CurrentPageContext.Provider value={{ currentPage }}>
        <div className="page">
          <CurrentSearchedItems.Provider value={{ newsItems }}>
            <SavedArticlesContext.Provider value={{ savedItems }}>
              <div className="page__content">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Header
                          handleSigninClick={handleSigninClick}
                          onSearchRequest={onSearchRequest}
                          isLoggedIn={isLoggedIn}
                          handleLogout={handleLogout}
                          onMobileMenuClick={onMobileMenuClick}
                          onMobileMenuClose={onMobileMenuClose}
                          mobileOpen={mobileOpen}
                        />

                        <Main
                          hasSearched={hasSearched}
                          previousTopic={previousTopic}
                          isLoading={isLoading}
                          handleSaveClick={handleSaveClick}
                          searchResults={searchResults}
                          isLoggedIn={isLoggedIn}
                        />
                      </>
                    }
                  />
                  <Route
                    path="/saved-news"
                    element={
                      <>
                        <SavedNewsHeader
                          handleSigninClick={handleSigninClick}
                          onSearchRequest={onSearchRequest}
                          isLoggedIn={isLoggedIn}
                          savedItems={savedItems}
                          onMobileMenuClick={onMobileMenuClick}
                          onMobileMenuClose={onMobileMenuClose}
                          mobileOpen={mobileOpen}
                          // handleLogout={handleLogout}
                        />
                        <SavedNews
                          handleSaveClick={handleSaveClick}
                          handleDeleteArticle={handleDeleteArticle}
                          savedItems={savedItems}
                        />
                      </>
                    }
                  />
                </Routes>

                <Footer />
              </div>

              <SigninModal
                isOpen={activeModal === "signin"}
                closeActiveModal={closeActiveModal}
                handleRegisterClick={handleRegisterClick}
                isLoading={isLoading}
                onSigninUser={onSigninUser}
              />
              <SignupModal
                isOpen={activeModal === "register"}
                onAddUser={onAddUser}
                closeActiveModal={closeActiveModal}
                handleSigninClick={handleSigninClick}
                isLoading={isLoading}
              />
              <SignupSuccessModal
                isOpen={activeModal === "signup-success"}
                onClose={closeActiveModal}
                handleSigninClick={handleSigninClick}
              />
            </SavedArticlesContext.Provider>
          </CurrentSearchedItems.Provider>
        </div>
      </CurrentPageContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
