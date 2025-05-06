import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { NETFLIX_LOGO, USER_AVATAR } from "../utils/constants";
import {
  toggleGptSearchLanguage,
  toggleGptSearchView,
} from "../utils/gptSearchSlice";
import { LANGUAGE_OPTIONS } from "../utils/languageConstants";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, uid } = user;
        dispatch(addUser({ email, displayName, uid }));
        navigate("/browse");
        // User is signed in, see docs for a list of available properties
      } else {
        dispatch(removeUser());
        navigate("/");
        // User is signed out
        // ...
      }
      return () => unsubscribe();
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const resetLanguage = () => {
    dispatch(toggleGptSearchLanguage("en"));
  };

  const handleSearch = () => {
    dispatch(toggleGptSearchView());
    resetLanguage();
  };

  const toggleLanguage = (lang) => {
    dispatch(toggleGptSearchLanguage(lang));
  };

  const redirectToHome = (lang) => {
    if (gpt?.showGptSearch) {
      dispatch(toggleGptSearchView());
      resetLanguage();
    }
  };

  return (
    <div className="absolute px-8 bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row justify-between">
      <img
        className="w-46 cursor-pointer mx-auto md:mx-0"
        alt="logo"
        src={NETFLIX_LOGO}
        onClick={redirectToHome}
      />
      {location.pathname == "/browse" && (
        <div className="flex p-2">
          {gpt?.showGptSearch && (
            <select
              className="m-3 p-2 rounded-lg bg-gray-800 text-white"
              onChange={(e) => toggleLanguage(e.target.value)}
            >
              {LANGUAGE_OPTIONS.map((o, id) => {
                return (
                  <option key={id} value={o.value}>
                    {o.label}
                  </option>
                );
              })}
            </select>
          )}
          {!gpt?.showGptSearch && (
            <button
              className="text-white m-3 px-2 bg-gray-800 rounded-lg cursor-pointer"
              onClick={handleSearch}
            >
              {gpt?.showGptSearch ? "Home" : "GPT Search"}
            </button>
          )}
          <img
            className="profile-icon w-10 h-10 m-auto mr-2"
            src={USER_AVATAR}
            alt="userIcon"
          />
          <div className="text-white my-auto mr-2">{user?.displayName}</div>
          <button
            className="cursor-pointer font-bold text-white"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};
