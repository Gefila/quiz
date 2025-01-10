import Timer from "./Timer";

export default function Info({
	number,
	score,
	quizDataLength,
	counter,
	dispatch,
}) {
	return (
		<>
			<div className="flex flex-row justify-between items-center gap-2 text-white text-lg">
				<div className="">
					Question{" "}
					<span className="font-bold">
						{number + 1} / {quizDataLength}{" "}
					</span>
					<div className="">
						Score: <span className="font-bold">{score}</span>
					</div>
				</div>
				<Timer counter={counter} dispatch={dispatch} />
			</div>

			<progress
				className="progress progress-primary w-full"
				value={number + 1}
				max={quizDataLength}
			></progress>
		</>
	);
}
