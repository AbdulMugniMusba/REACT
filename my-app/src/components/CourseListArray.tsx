import './CourseListArray.css'
function CourseListArray() {
    const courses = [
        "Advanced Web Design",
        "React Frontend",
        "Core Java",
        "Advanced Excel",
        "Python Data Science",
      ];
    
 
      return (
        <div>
          <h2 className=''>Course List</h2>
          <ul className="list-group">
            {courses.map((course) => (
              <li className="list-group-item">{course}</li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default CourseListArray;
