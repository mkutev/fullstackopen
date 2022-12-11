// function App() {
//   return (
//     <div>
//       <p>Hello World!</p>
//     </div>
//   );
// }

// export default App;

const Time = () => {
	const now = new Date();

	return (
		<div>
			<p>The time is now {now.toString()}</p>
		</div>
	);
};

const Greating = (props) => {
	return (
		<h1>Welcome {props.name}, you are {props.age} years old.</h1>
	);
};

const App = () => {
	const name = 'Guy'
	const age = 3

	return (
		<>
			<Greating name='Buddy' age={age} />
			<Greating name={name} age={age} />
			<Time /> 
		</>
	);
};

export default App;
