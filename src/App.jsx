import { Routes, Route } from "react-router-dom";
import Body from "./components/Body";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Body />}>
				<Route path="/" element={<Dashboard />} />
			</Route>
		</Routes>
	);
}

export default App;
