import "./App.css";
import ProductsList from "./components/products.tsx";
import CourseListObject from "./components/CourseListObject.tsx";
import CarsList from "./components/cars.tsx";
import LoginStatus from "./components/LoginStatus.tsx";
import Vehicle from "./components/Vehicle.tsx";
import Courses from "./components/Courses.tsx";
import Products2 from "./components/products2.tsx";
import Cars2 from "./components/Cars2.tsx";
import fetchcars from "./Services/CarsServises.tsx";
import fetchCourses from "./Services/CoursesServices.tsx";
import Counter from "./components/Counter.tsx";
import SetName from "./components/SetName.tsx";
import { useState } from "react";
import UserProfile from "./components/UserProfile.tsx";
import Toggle from "./components/Toggle.tsx";
function App() {
  return (
    <div>
      {/* <Courses courses={fetchCourses()} /> */}
       
      <Counter></Counter>
      <SetName></SetName>
      <UserProfile></UserProfile>
      <Toggle></Toggle>
    </div>
  );
}

export default App;
