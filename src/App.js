import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewNovel from "./components/CreateNovel/NewNovel";
import Navbar from "./components/Navbar/Navbar";
import NovelForm from "./components/UpdateNovel/NovelForm";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/new-novel" element={<NewNovel />} />
					<Route path="/:id" element={<NovelForm />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
