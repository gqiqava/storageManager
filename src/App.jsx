import { routes } from "./routes/routes";
import { Route, Routes } from "react-router-dom";
import switcher from "@/assets/toggleTheme.svg";

const App = () => {
  const setAppTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  };

  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route.children
              ? route.children.map((child) => (
                  <Route
                    key={child.path}
                    path={child.path} // child.path should be relative, no need to concatenate route.path
                    element={child.element}
                  />
                ))
              : null}
          </Route>
        ))}
      </Routes>
      <div
        onClick={() => setAppTheme()}
        style={{ position: "absolute", bottom: 10, right: 10 }}
      >
        <img
          src={switcher}
          alt="switcher"
          style={{
            backgroundColor: "white",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        />
      </div>
    </>
  );
};

export default App;
