import "./App.css";         
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from "./components/Home";
import About from "./components/About";
import Counter from "./components/Counter"
import Greeting from "./components/Greeting";
import ToggleSwitch from "./components/ToggleSwitch";
import Article from "./components/Article";
import ArticleList from "./components/ArticleList";
import RecipeList from "./components/RecipeList";
import PostList from "./components/PostList";
import PostListSearch from "./components/PostListSearch";
import ProductList2 from "./components/ProductList2";
;
import UserList from "./components/UserList";
import PostDetails from "./components/PostDetails";
import Courses from "./components/Courses";
import AddCourse from "./components/AddCourse";
import EditCourse from "./components/EditCourse";
import Fruits from "./components/Fruits";
import AddFruit from "./components/AddFruit";
import EditFruit from "./components/EditFruit";



;

export default function App() {

  return(
    <Router>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Components
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/greeting">
                      Greeting
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/counter">
                      Counter
                    </Link>
                  </li>
                  
          
                  
                  
                  <li>
                    <Link className="dropdown-item" to="/toggle-switch">
                      Toggle Switch
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/products">
                      Product List
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/recipes">
                      Recipe List
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/users">
                      User List
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/articles">
                      Article List
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/courses">
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Addcourses">
                    Addcourses
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Fruits">
                      Fruits
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/counter" element={<Counter />}></Route>

          <Route path="/greeting" element={<Greeting>Welcome to the Greeting Page</Greeting>}></Route>
          <Route path="/toggle-switch" element={<ToggleSwitch />}></Route>
          <Route path="/article" element={<Article title="Sample Title">Sample Content</Article>}></Route>
          <Route path="/articles" element={<ArticleList />}></Route>
          <Route path="/recipes" element={<RecipeList />}></Route>
          <Route path="/posts" element={<PostList />} />

          <Route path="/posts-search" element={<PostListSearch />} />
          <Route path="/products" element={<ProductList2 />} />


          <Route path="/users" element={<UserList />} />
      
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/AddCourse" element={<AddCourse/>} />
          <Route path="/EditCourse/:id" element={<EditCourse/>} />

          <Route path="/Fruits" element={<Fruits/>} />
          <Route path="/AddFruit" element={<AddFruit/>} />
          <Route path="/EditFruit/:id" element={<EditFruit/>} />

          
        </Routes>
      </main>
      
      
      </Router>
  );
}

