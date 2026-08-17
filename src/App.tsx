import './styles/styles.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AppRoute} from "./const.ts";
import Layout from "./components/layout/layout.tsx";
import Header from "./components/layout/header.tsx";
import Footer from "./components/layout/footer.tsx";

function App() {

  return (
   <BrowserRouter>
     <Routes>
       <Route
       path={AppRoute.MainPage}
       element={<Layout />}
       >
         <Route
           index
           element={<Header/>}
         />

         <Route
             path={AppRoute.ProjectsList}
             element={<Footer />}
         />
       </Route>
     </Routes>
   </BrowserRouter>
  );
}

export default App
