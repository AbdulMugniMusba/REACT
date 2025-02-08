// import { Children } from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from "./components/Home";
import About from "./components/About";
import Counter from "./components/Counter";
import RecipeList from "./components/RecipeList";
import ArticleList from "./components/ArticleList";
// import ProductsList from "./components/products.tsx";
// import CourseListObject from "./components/CourseListObject.tsx";
// import CarsList from "./components/cars.tsx";
// import LoginStatus from "./components/LoginStatus.tsx";
// import Vehicle from "./components/Vehicle.tsx";
// import Courses from "./components/Courses.tsx";
// import Products2 from "./components/products2.tsx";
// import Cars2 from "./components/Cars2.tsx";
// import fetchcars from "./Services/CarsServises.tsx";
// import fetchCourses from "./Services/CoursesServices.tsx";
// import Counter from "./components/Counter.tsx";
// import SetName from "./components/SetName.tsx";
// import { useState } from "react";
// import UserProfile from "./components/UserProfile.tsx";
// import Toggle from "./components/Toggle.tsx";
// import Greeting from "./components/Greeting.tsx";
// import ArticleList from "./components/ArticleList.tsx";
// import UserList from "./components/UserList.tsx";
// import ProductsList from "./components/ProductList.tsx";
// import RecipeList from "./components/RecipeList.tsx";
function App() {
  return (
    // <div>
    //   {/* <Courses courses={fetchCourses()} /> */}
       
    //   {/* <Counter></Counter>
    //   <SetName></SetName>
    //   <UserProfile></UserProfile>
    //   <Toggle></Toggle> */}
    //   {/* <ProductsList></ProductsList> */}
    //   {/* <CourseListObject></CourseListObject> */}
    //   {/* <CarsList></CarsList> */}
    //   {/* <LoginStatus></LoginStatus> */}
    //   {/* <Vehicle></Vehicle> */}
    //   {/* <Products2></Products2> */}
    //   {/* <Cars2></Cars2> */}
    //   {/* <Greeting>Hello BEFFELO</Greeting>
    //   // <Counter></Counter> */}
    //    {/* <ArticleList></ArticleList> */}
    //      {/* <UserList /> */}
    //  {/* <RecipeList /> */}
    //  {/* <ProductsList /> */}
    //  </div>

     
    <Router>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/Counter">Counter</Link></li>
                  <li><Link className="dropdown-item" to="/RecipeList">RecipeList</Link></li>
                  <li><Link className="dropdown-item" to="/ArticleList">ArticleList</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>



       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/Counter" element={<Counter/>} />
          <Route path="/RecipeList" element={<RecipeList/>} />
          <Route path="/ArticleList" element={<ArticleList/>} />
    </Routes>





    </Router>

  );
}


export default App;
