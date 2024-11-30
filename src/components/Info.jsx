export default function Info({number, score, quizDataLength}) {
    return(
        <div className="flex flex-row justify-between items-center gap-2 text-white px-2 ">
            <div className="">Question {number + 1} / {quizDataLength}</div>
            <div className="">Score: {score}</div>
        </div>
    )
}