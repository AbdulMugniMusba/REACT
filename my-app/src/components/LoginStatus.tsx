function LoginStatus() {
const isLoggedIn = true;
 return (
    <div>
       <h2>
        {isLoggedIn ? "Welcome, User" : "Please, log in"}
       </h2>
    </div>
        );
 
}
export default LoginStatus;