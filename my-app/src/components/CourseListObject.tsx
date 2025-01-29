import "./CourseListObject.css";
function CourseListObject() {
  const Courses = [
    {
      id: 1,
      name: "Subject--Python",
      description: "Discription--Python Programming",
      price:"Price--6000",
      duration:"Duration--30-Days",
    },
    {
      id: 2,
      name: "java",
      description: "Java Programming",
      price: 5000,
      duration: 50,
    },
    {
      id: 3,
      name: "React",
      description: "React Programming",
      price: 8000,
      duration: 70,
    },
  ];

  return (
    <div>
      <h1 className="">Course List</h1>
      <ul className="list group">
        {Courses.map((Course) => (
          <li className="list-group-item" key={Course.id}>
            <h3>{Course.name}</h3>
            <p>{Course.description}</p>
            <p>{Course.price}</p>
            <p>{Course.duration}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseListObject;
