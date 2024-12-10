import { useEffect } from "react";
import NextButton from "./NextButton";
import Options from "./Options";

export default function Question({ dispatch, questionData, answer, option, quizDataLength, number }) {
    useEffect(() => {
        dispatch({ type: "setAnswer", payload: questionData.answer, });
    }, [dispatch, questionData.answer]);

    return (
        
            <div className="bg-slate-900 p-4 rounded-lg flex flex-col lg:px-10">
                <div className="text-white mb-5 text-lg">{questionData.question}</div>
                <Options
                    dispatch={dispatch}
                    options={questionData.options}
                    answer={answer}
                    option={option}
                />
                <NextButton dispatch={dispatch} quizDataLength={quizDataLength} number={number} option={option}/>
            </div>
    );
}
