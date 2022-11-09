import { HiOutlinePlus } from "react-icons/hi";
import "./Login.scss";

function Login() {
	return (
		<div className="login">
			<div className="wrapper">
				<div className="left">
					<h1>Novels Store</h1>
					<p>Recent Logins</p>

					<div className="card">
						<HiOutlinePlus />
						<p>create account</p>
					</div>
				</div>
				<div className="right">
					<h1>Login</h1>
					<form>
						<input type="text" placeholder="Email" />
						<input type="password" placeholder="Password" />
						<button>Login</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
