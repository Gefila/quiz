export default function Finish({score}) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-slate-950">
            <div className="text-white text-3xl">Your score is {score}</div>
        </div>
    );
}