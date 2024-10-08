import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "pages/home";
import Login from "pages/login";
import Profile from "pages/profile";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={isAuth ? <HomePage /> : <Navigate to="/" />} />
            <Route path="/profile/:userId" element={isAuth ? <Profile /> : <Navigate to="/" />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
