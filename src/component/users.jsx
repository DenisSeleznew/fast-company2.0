import React, { useState } from "react";
import api from "../api";

const Users = () => {
	const [users, setUsers] = useState(api.users.fetchAll());

	const handelDelete = userId => {
		setUsers(prevState => prevState.filter(item => item._id !== userId));
	};

	const renderPhrase = number => {
		const numbers =
			number > 4 || number === 1
				? `${number} человек тусанет`
				: `${number} человека тусанут`;

		return <span className="badge bg-primary">{numbers} с тобой сегодня</span>;
	};

	return users.length !== 0 ? (
		<>
			<h2>{renderPhrase(users.length)}</h2>
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
							<td>
								{item.qualities.map(item => (
									<p key={item._id} className={`badge bg-${item.color} m-1`}>
										{item.name}
									</p>
								))}
							</td>
							<td>{item.completedMeetings}</td>
							<td>{`${item.rate} /5`}</td>
							<td>
								<button
									key={item._id}
									className="btn btn-danger btn-sm m-2"
									onClick={() => handelDelete(item._id)}
								>
									delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	) : (
		<h2>
			<span className="badge bg-danger">Не кто не тусанет с тобой сегодня</span>
		</h2>
	);
};
export default Users;
