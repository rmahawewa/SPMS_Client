import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Body = () => {
	return (
		<div>
			<Navbar />
			<div className="flex">
				<Sidebar />
				<div className="px-8 py-5">
					{/* <div> */}
					<Outlet />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Body;
