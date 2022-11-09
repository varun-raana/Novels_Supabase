import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="nav">
			<h1>Novel Store</h1>
			<div className="list">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/new-novel">Create New Novel</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
