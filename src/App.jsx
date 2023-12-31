import { Routes, Route } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <>
      <Routes>
        {AppRoutes.map(({ element, ...rest }, index) => {
          return <Route key={index} {...rest} element={element} />;
        })}
      </Routes>
    </>
  );
}

export default App;
