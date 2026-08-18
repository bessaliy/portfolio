import './styles/styles.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AppRoute} from "./const.ts";
import Layout from "./components/layout/layout.tsx";
import MainPage from "./pages/main-page/main-page.tsx";
import ProjectsPage from "./pages/projects-page/projects-page.tsx";
import ProjectPage from "./pages/project-page/project-page.tsx";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top.tsx";

function App() {

  return (
   <BrowserRouter>
     <ScrollToTop />
     <Routes>
       <Route
       path={AppRoute.MainPage}
       element={<Layout />}
       >
         <Route
           index
           element={<MainPage />}
         />

         <Route
             path={AppRoute.ProjectsList}
             element={<ProjectsPage />}
         />

         <Route
               path={AppRoute.ProjectPage}
               element={<ProjectPage />}
         />
       </Route>
     </Routes>
   </BrowserRouter>
  );
}

export default App
