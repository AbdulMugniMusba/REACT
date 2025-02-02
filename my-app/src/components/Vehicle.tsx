interface Props {
  items: any[];
  title: string;
}
function vehicle(props: Props) {
  return (
    <div>
        <h1>{props.title}</h1>
      <ul className="list-group">
        {props.items.map((vehicle) => (
          <li className=" "> {vehicle}</li>
        ))}
      </ul>
    </div>
  );
}
export default vehicle;
