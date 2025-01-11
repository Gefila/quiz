import { useEffect } from "react";
import Timer from "./Timer";

export default function Finish({
	score,
	dispatch,
	quizDataLength,
	counter,
	name,
	judulSoal,
	tipeSoal,
}) {
	useEffect(() => {
		const quizHistory = JSON.parse(localStorage.getItem("quizHistory")) || [];
		const data = {
			score: `${score}/${quizDataLength}`,
			name,
			judulSoal,
			tipeSoal,
			counter,
			date: new Date().toLocaleString(),
		};
		quizHistory.push(data);
		localStorage.setItem("quizHistory", JSON.stringify(quizHistory));
	}, []);

	return (
		<div className="flex flex-col items-center justify-center w-full h-screen bg-slate-950 gap-2">
			<div className="flex flex-col items-center bg-blue-600 px-6 py-3 rounded-md">
				<div className="text-white text-4xl">Score</div>
				<div className="text-white text-7xl font-bold">
					{score}
					<span className="text-2xl">/{quizDataLength}</span>
				</div>
			</div>
			<Timer counter={counter} />
			<div className="text-white text-2xl">Thank You for Participating</div>
			<div className="flex gap-3 mt-10 ">
				<button
					className="btn btn-primary text-white"
					onClick={() => dispatch({ type: "back" })}
				>
					Back to Home
				</button>
				<button
					className="btn btn-secondary text-white"
					onClick={() => dispatch({ type: "restart" })}
				>
					Try Again
				</button>
			</div>
		</div>
	);
}
