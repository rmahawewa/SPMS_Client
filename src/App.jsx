import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Dashboard from "./components/Dashboard";
import StudentList from "./components/Student/StudentList";

function App() {
	return (
		<>
			<BrowserRouter basename="/">
				<Routes>
					<Route path="/" element={<Body />}>
						<Route path="/" element={<Dashboard />} />
						<Route path="/studentList" element={<StudentList />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
