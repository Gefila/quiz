import NextButton from "./NextButton";
import Options from "./Options";

export default function Question({ dispatch, questionData }) {
    const { question, options } = questionData;
    return (
        <div className="w-full">
            <div className="bg-slate-900 m-2 p-4 rounded-lg flex flex-col">
                <div className="text-white mb-5 text-lg">{question}</div>
                <Options options={options} />
                <NextButton dispatch={dispatch} />
            </div>
        </div>
    );
}
