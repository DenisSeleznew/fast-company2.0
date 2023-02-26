import React, { useState } from "react";
import api from "../api";

const Users = () => {
	// console.log(api.users.fetchAll());
	const [users, setUsers] = useState(api.users.fetchAll());

	const handelDelete = userId => {
		console.log(
			setUsers(prevState =>
				prevState.fill(userId => userId === prevState.userId)
			)
		);
		setUsers(prevState => prevState.filter(user => user !== userId));
	};

	const renderPhrase = number => {};

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
					<tr>
						<td>{}</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
				</tbody>
			</table>
			<button
				className="btn btn-danger btn-sm m-2"
				onClick={() => handelDelete()}
			>
				delete
			</button>
		</>
	);
};

export default Users;
