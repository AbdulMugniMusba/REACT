import Course from '../Module/Course';
interface Props {
    courses: Course[];
}
function Courses(props: Props) {
    return (
        <div className="container">
            <h1 className="Courselist"></h1>
            <ul>
                {props.courses.map((course) => (
                    <li key={course.id}>
                        <h2>{course.name}</h2>
                        <p>{course.description}</p>
                        <p>{course.price}</p>
                        <p>{course.duration}</p>
                    </li>
                ))}
            </ul>
        </div>

    );
}
export default Courses;