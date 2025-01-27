export default function QuizHistory({ quizHistory, setQuizHistory }) {
    return(
        <div className="flex flex-col items-center bg-slate-900 p-2 rounded-lg gap-2 m-5 w-full">
					<h1 className="text-white font-bold text-2xl">History Quiz</h1>
					<button
						className="btn btn-sm self-end mb-2"
						onClick={() => {
							setQuizHistory([]);
							localStorage.removeItem("quizHistory");
						}}
					>
						Clear History
					</button>
					{quizHistory.map((history, index) => (
						<div
							className="flex flex-col items-start bg-blue-600 p-2 rounded-lg w-full"
							key={index}
						>
							<div className="avatar flex items-center">
								<div className="w-6 rounded-full">
									<img src={history.image} />
								</div>
								<p className="text-white text-sm font-bold ml-1">{`${history.name}, ${history.date}`}</p>
							</div>
							<p className="text-white text-sm font-sm">{`${history.judulSoal} (${history.tipeSoal})`}</p>
							<p className="text-white text-sm font-sm">{`Score: ${
								history.score
							} (${Math.floor(history.counter / 60)}m ${
								history.counter % 60
							}s)`}</p>
						</div>
					))}
				</div>
    )
}