const App = () => {
	const course = "Half Stack application development"
	const parts = ["Fundamentals of React", "Using props to pass data", "State of a component"]
	const exercises = [10, 7, 14]

	return (
		<div>
			<Header name={course} />
			<Content exercises={exercises} parts={parts} />
			<Total sum={exercises[0] + exercises[1] + exercises[2]} />
		</div>
	);
};

const Header = (props) => {
	return <h1>{props.name}</h1>;
};

const Content = (props) => {
	return (
		<div>
			<Part part={props.parts[0]} exercise={props.exercises[0]} />
			<Part part={props.parts[1]} exercise={props.exercises[1]} />
			<Part part={props.parts[2]} exercise={props.exercises[2]} />
		</div>
	);
};

const Part = (props) => {
	return (
		<p>
			{props.part} {props.exercise}
		</p>
	);
};

const Total = (props) => {
	return <p>Number of exercises {props.sum} </p>;
};

export default App;
