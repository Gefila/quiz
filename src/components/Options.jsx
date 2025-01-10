export default function Options({ dispatch, options, answer, option }) {
    const selectedOption = option;
    const alphabet = ["A", "B", "C", "D", "E"];
    return (
        <div className="flex flex-col items-stretch gap-2">
            {options.map((option, index) => (
                <button
                    key={index}
                    className={`btn bg-blue-800 text-white h-auto p-2 rounded-lg text-justify justify-start disabled:text-white whitespace-pre-line text ${
                        option !== selectedOption && option !== answer
                            ? "disabled:bg-blue-800"
                            : ""
                    }
                        ${
                            selectedOption && answer === option
                                ? "bg-green-500 disabled:bg-green-500"
                                : ""
                        } ${
                        selectedOption === option && answer !== option
                            ? "bg-red-500 disabled:bg-red-500"
                            : ""
                    }`}
                    onClick={() => {
                        dispatch({ type: "setOption", payload: option });
                    }}
                    disabled={selectedOption}
                >
                    {`${alphabet[index]}. ${option}`}
                </button>
            ))}
        </div>
    );
}
