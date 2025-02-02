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
function App() {
  // let cars = [
  // "Toyota",
  // "Honda",
  // "BMW",
  // ];
  // let bikes = [
  // "Yamaha",
  // "Honda",
  // "Suzuki",
  // ];
  // let fruits = [
  // "Apple",
  // "Banana",
  // "Mango",
  // ];
  // const coursesData = [
  //   {
  //     id: 1,
  //     name: "Subject--Python",
  //     description: "Discription--Python Programming",
  //     price: 10000,
  //     duration:90
  //   },
  //   {
  //     id: 2,
  //     name: "java",
  //     description: "Java Programming",
  //     price: 5000,
  //     duration: 50,
  //   },
  //   {
  //     id: 3,
  //     name: "React",
  //     description: "React Programming",
  //     price: 8000,
  //     duration: 70,
  //   },
  // ];
  // let Products2data=[
  //   {
  //     id: 1,
  //     title: "Product1",
  //     description: "Description1",
  //     price: 100,
  //     duration: 10
  //   },
  //   {
  //     id: 2,
  //     title: "Product2",
  //     description: "Description2",
  //     price: 200,
  //     duration: 20
  //   },
  //   {
  //     id: 3,
  //     title: "Product3",
  //     description: "Description3",
  //     price: 300,
  //     duration: 30
  //   },
  // ]
  
  return (
    <div>
      <Cars2 Cars2={fetchcars()} ></Cars2>
    </div>
  );
}

export default App;
