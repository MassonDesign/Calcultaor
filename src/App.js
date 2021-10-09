import Buttons from "./components/Buttons";
import Display from "./components/Display";
import "./index.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
	const [display, setDisplay] = useState(0);
	const [prevValue, setPrevValue] = useState("");
	const [currentValue, setCurrentValue] = useState("");
	const [operation, setOperation] = useState(undefined);

	useEffect(() => {
		if (currentValue === "" && prevValue === "") {
			setDisplay(0);
		} else if (currentValue === "" && prevValue !== "") {
			setDisplay(prevValue);
		} else {
			setDisplay(currentValue);
		}
	}, [currentValue, prevValue]);

	const clearDisplay = (e) => {
		e.preventDefault();
		setDisplay(0);
		setCurrentValue("");
		setPrevValue("");
		setOperation(undefined);
	};

	const appendNumber = (e) => {
		e.preventDefault();
		if (e.target.innerText === "." && currentValue.includes(".")) return;
		if (e.target.innerText === "0" && currentValue === "0") return;

		setCurrentValue((currentValue) => currentValue + e.target.innerText);
		const display = currentValue + e.target.innerText;
		setDisplay(display);
	};

	const choseOperation = (e) => {
		if (operation !== "" && e.target.innerText === "-") {
			setCurrentValue("-");
		}
		if (currentValue === "-" && e.target.innerText !== "-") {
			setCurrentValue("");
			setOperation(e.target.innerText);
		}
		if (currentValue === "") return;
		if (prevValue !== "") {
			setOperation(e.target.innerText);
			compute(e);
		} else {
			setPrevValue(currentValue);
			setCurrentValue("");
			setOperation(e.target.innerText);
		}
	};

	const compute = (e) => {
		console.log(operation);
		let computation;
		const prev = parseFloat(prevValue);
		const current = parseFloat(currentValue);
		if (isNaN(prev) || isNaN(current)) return;

		switch (operation) {
			case "+":
				computation = prev + current;
				break;
			case "-":
				computation = prev - current;
				break;
			case "x":
				computation = prev * current;
				break;
			case "/":
				computation = prev / current;
				break;
			default:
				return;
		}
		if (e.target.innerText === "=") {
			setCurrentValue(computation);
			setDisplay(computation);
			setOperation(undefined);
			setPrevValue("");
			console.log(computation);
		} else {
			setCurrentValue("");
			setPrevValue(computation);
			setDisplay(computation);
		}
	};

	return (
		<div className='App bg-gray-100 flex flex-col justify-center items-center m-auto w-1/2 h-screen'>
			<Display display={display} />
			<Buttons
				clearDisplay={clearDisplay}
				appendNumber={appendNumber}
				choseOperation={choseOperation}
				compute={compute}
			/>
		</div>
	);
}

export default App;
