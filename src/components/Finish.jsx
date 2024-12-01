export default function Finish({ score, dispatch }) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-slate-950 gap-2">
            <div className="flex flex-col items-center bg-blue-600 px-6 py-3 rounded-md">
                <div className="text-white text-4xl">Score</div>
                <div className="text-white text-7xl font-bold">
                    {score}
                    <span className="text-2xl">/30</span>
                </div>
            </div>
            <div className="text-white text-2xl">
                Thank You for Participating
            </div>
            <div className="flex gap-3 mt-10">
                <button
                    className="btn btn-primary"
                    onClick={() => dispatch({ type: "back" })}
                >
                    Back to Home
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={() => dispatch({ type: "restart" })}
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}
