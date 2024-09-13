import { routes } from "./routes/routes";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
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
  );
};

export default App;
