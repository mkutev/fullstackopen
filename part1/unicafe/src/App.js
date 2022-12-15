import { useState } from "react";

const App = () => {
	const [goodCount, setGoodCount] = useState(0);
	const [mehCount, setMehAmount] = useState(0);
	const [badCount, setBadCount] = useState(0);
	const [total, setTotal] = useState(0);
	const good = () => {
		setGoodCount(goodCount + 1);
		setTotal(total + 1);
	};
	const meh = () => {
		setMehAmount(mehCount + 1);
		setTotal(total + 1);
	};
	const bad = () => {
		setBadCount(badCount + 1);
		setTotal(total + 1);
	};

	return (
		<div className="App">
			<h1>Give Feedback</h1>
			<Button onClick={good} name="Good" />
			<Button onClick={meh} name="Meh" />
			<Button onClick={bad} name="Bad" />
			<Stats good={goodCount} meh={mehCount} bad={badCount} total={total} />
		</div>
	);
};

const Button = ({ onClick, name }) => <button onClick={onClick}>{name}</button>;

const StatLine = ({ text, value }) => (
	<tr>
		<td>{text}</td>
		<td>{value}</td>
	</tr>
);

const Stats = ({ good, meh, bad, total }) => {
	if (total) {
		return (
			<>
				<h2>Statistics</h2>
				<table>
					<tbody>
						<StatLine text="Good" value={good} />
						<StatLine text="Meh" value={meh} />
						<StatLine text="Bad" value={bad} />
						<StatLine text="Total" value={total} />
						<StatLine text="Average Rating" value={(good + meh * 0 + bad * -1) / total} />
						<StatLine text="# of Positive" value={(good / total) * 100 + "%"} />
					</tbody>
				</table>
			</>
		);
	} else {
		return <p>No feedback gathered yet.</p>;
	}
};

export default App;
