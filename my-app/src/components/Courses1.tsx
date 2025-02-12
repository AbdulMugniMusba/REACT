import Course1 from '../Module/Course1';

interface Props {
    Course1s: Course1[];
}
function Course1s(props: Props) {
    return (
        <div className="container">
            <h1 className="Course1list"></h1>
            <ul>
                {props.Course1s.map((Course1) => (
                    <li key={Course1.id}>
                        <h2>{Course1.name}</h2>
                        <p>{Course1.description}</p>
                        <p>{Course1.price}</p>
                        <p>{Course1.duration}</p>
                    </li>
                ))}
            </ul>
        </div>

    );
}
export default Course1s;