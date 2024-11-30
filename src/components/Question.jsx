import { useEffect } from "react";
import NextButton from "./NextButton";
import Options from "./Options";

export default function Question({ dispatch, questionData, answer, option }) {
    useEffect(() => {
        dispatch({ type: "setAnswer", payload: questionData.answer, });
    }, [dispatch, questionData.answer]);

    return (
        <div className="w-full">
            <div className="bg-slate-900 m-2 p-4 rounded-lg flex flex-col">
                <div className="text-white mb-5 text-lg">{questionData.question}</div>
                <Options
                    dispatch={dispatch}
                    options={questionData.options}
                    answer={answer}
                    option={option}
                />
                <NextButton dispatch={dispatch} />
            </div>
        </div>
    );
}
