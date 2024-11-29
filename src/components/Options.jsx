export default function Options({ options }) {
    return (
        <div className="flex flex-col items-stretch gap-2">
            {options.map((option, index) => (
                <button
                    key={index}
                    className="btn bg-blue-800 text-white h-auto p-2 rounded-lg text-justify"
                >
                    {option}
                </button>
            ))}
        </div>
    );
}
