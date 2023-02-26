import React, { useState } from "react";
import api from "../api";

const Users = () => {
	// console.log(api.users.fetchAll());
	const [users, setUsers] = useState(api.users.fetchAll());

	const handelDelete = userId => {
		setUsers(prevState => prevState);
	};

	const renderPhrase = number => {
		return users.length;
	};

	return (
		<>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Имя</th>
						<th scope="col">Качества</th>
						<th scope="col">Профессия</th>
						<th scope="col">Встретились, раз</th>
						<th scope="col">Оценка</th>
					</tr>
				</thead>
				<tbody>
					{users.map(item => (
						<tr key={item._id}>
							<td>{item.name}</td>
							<td>{item.profession.name}</td>
							<td>{item.qualities.map(item => item.name)}</td>
							<td>{item.completedMeetings}</td>
							<td>{`${item.rate}/5`}</td>
							<td
								className="badge bg-danger  m-2"
								onClick={() => handelDelete(users)}
							>
								delete
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{/* <button id={users._id} className="btn btn-danger btn-sm m-2">
				delete
			</button> */}
		</>
	);
};

export default Users;
