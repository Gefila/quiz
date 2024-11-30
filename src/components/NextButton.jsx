export default function NextButton({ dispatch, quizDataLength, number, option }) {
    if(number === quizDataLength - 1) {
        return (
            <button
                className="btn btn-neutral bg-green-800 text-white self-end mt-3"
                disabled={!option}
                onClick={() => dispatch({ type: "finish" })}
            >
                Finish
            </button>
        );
    }

    return (
        <button
            className="btn btn-neutral bg-green-800 text-white self-end mt-3"
            onClick={() => dispatch({ type: "next" })}
            disabled={!option}
        >
            Next
        </button>
    );
}
