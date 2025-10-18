import React, { useState } from "react";

const StudentList = () => {
	const [studentInfo, setStudentInfo] = useState([]);

	return (
		<div>
			<h1>All Students</h1>
			<div className="flex w-full gap-10 py-8 justify-between">
				<button className="flex w-fit justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
					Add new
				</button>
				<div className="mx-0">
					<input
						type="text"
						className="input input-bordered border-2 border-primary px-3"
						placeholder="NIC or Name"
						list="browsers"
					/>
					<datalist id="browsers">
						<option value="Chrome"></option>
						<option value="Firefox"></option>
						<option value="Safari"></option>
						<option value="Opera"></option>
						<option value="Edge"></option>
					</datalist>
				</div>
				<div></div>
			</div>

			<div>
				<div className="overflow-x-auto">
					<table className="table">
						{/* head */}
						<thead>
							<tr>
								<th>#</th>
								<th>NIC</th>
								<th>Name</th>
								<th>Birthday</th>
								<th>Address</th>
								<th>Activity</th>
							</tr>
						</thead>
						<tbody>
							{studentInfo.length > 0 &&
								studentInfo.map((std, index) => {
									<tr>
										<th>
											<label>{index + 1}</label>
										</th>

										<td>nic</td>
										<td>name</td>
										<td>birthday</td>
										<td>address</td>
										<th>
											<button className="btn btn-ghost btn-xs">details</button>
										</th>
									</tr>;
								})}
							{/* row 1 */}
							<tr>
								<th>
									<label>
										<input type="checkbox" className="checkbox" />
									</label>
								</th>

								<td>
									Zemlak, Daniel and Leannon
									<br />
									<span className="badge badge-ghost badge-sm">
										Desktop Support Technician
									</span>
								</td>
								<td>Purple</td>
								<td>Birthday</td>
								<td>Address</td>
								<th>
									<button className="btn btn-ghost btn-xs">details</button>
								</th>
							</tr>
						</tbody>
						{/* foot */}
						<tfoot>
							<tr>
								<th></th>
								<th>Name</th>
								<th>Job</th>
								<th>Favorite Color</th>
								<th></th>
							</tr>
						</tfoot>
					</table>
				</div>
			</div>
		</div>
	);
};

export default StudentList;
