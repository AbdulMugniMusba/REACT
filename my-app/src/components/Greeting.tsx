interface Props {
  children: string;
}
function Greeting(props: Props) {
  return (<div>
    {props.children}
    </div>);
}
export default Greeting;  
