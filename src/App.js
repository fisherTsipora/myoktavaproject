import "./App.css";
import Users from "./component/Users";
import { Route, Routes } from "react-router-dom";
import HomePage from "./component/HomePage";
import About from "./component/About";
import Concerts from "./component/Concerts";
import ContactUs from "./component/ContactUs";
import LogInRegister from "./component/LogInRegister";
import HomePageManager from "./component/HomePageManager";
import HomePageTeacher from "./component/HomePageTeacher";
import AllTeachers from "./component/AllTeachers";
import UserNav from "./component/UserNav";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserNav />}>
          <Route path="" element={<HomePage />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contactUs" element={<ContactUs />}></Route>
          <Route path="concerts" element={<Concerts />}></Route>
          <Route path="homePageManager" element={<HomePageManager />}></Route>
          <Route path="homePageTeacher" element={<HomePageTeacher />}></Route>
          <Route path="allTeachers" element={<AllTeachers />}></Route>
        </Route>
        <Route path="/logInRegister" element={<LogInRegister />}></Route>
      </Routes>
    </div>
  );
}

export default App;
