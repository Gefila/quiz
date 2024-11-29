export default function NextButton({ dispatch }) {
    return (
        <button
            className="btn btn-neutral bg-green-800 text-white self-end mt-3"
            onClick={() => dispatch({ type: "next" })}
        >
            Next
        </button>
    );
}
