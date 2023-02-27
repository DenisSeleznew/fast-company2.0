import React, { useState } from "react";
import api from "../api";

const Users = () => {
	const [users, setUsers] = useState(api.users.fetchAll());

	const handelDelete = userId => {
		setUsers(prevState => prevState.filter(item => item._id !== userId));
	};

	const renderPhrase = number => {
		const lastOne = Number(number.toString().slice(-1));
		if (number > 4 && number < 15) return "человек тусанет";
		if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
		if (lastOne === 1) return "человек тусанет";
		return "человек тусанет";
	};

	return (
		<>
			<h2>
				<span
					className={"badge " + (users.length > 0 ? "bg-primary" : "bg-danger")}
				>
					{users.length > 0
						? `${
								users.length + " " + renderPhrase(users.length)
						  } с тобой сегодня`
						: "Никто с тобой не тусанет"}
				</span>
			</h2>
			{users.length > 0 && (
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
						{users.map(user => (
							<tr key={user._id}>
								<td>{user.name}</td>
								<td>{user.profession.name}</td>
								<td>
									{user.qualities.map(item => (
										<span
											key={item._id}
											className={`badge bg-${item.color} m-1`}
										>
											{item.name}
										</span>
									))}
								</td>
								<td>{user.completedMeetings}</td>
								<td>{`${user.rate} /5`}</td>
								<td>
									<button
										key={user._id}
										className="btn btn-danger btn-sm m-2"
										onClick={() => handelDelete(user._id)}
									>
										delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</>
	);
};
export default Users;
