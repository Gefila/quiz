import { useReducer, useState } from "react";
import StartScreen from "../components/StartScreen";
import soal from "../data/soal.json";
import Question from "../components/Question";

export default function QuizPage() {
    const [
        {
            quizData,
            status,
            number,
            score,
            answer,
            isCorrect,
<<<<<<< HEAD
=======
            selectedOption,
>>>>>>> ac66a4e32439ef67500856ee1c71780c680a8fe8
            option,
        },
        dispatch,
    ] = useReducer(reducer, {
        quizData: soal,
        status: "idle",
        number: 0,
        answer: "",
        option: "",
        isCorrect: false,
        score: 0,
    });

    function reducer(state, action) {
        switch (action.type) {
            case "start":
                return { ...state, status: "start" };
            case "setAnswer":
                return { ...state, answer: action.payload };
            case "next":
                return {
                    ...state,
                    number: state.number + 1,
                    answer: "",
                    option: "",
                    score: state.isCorrect ? state.score + 1 : state.score,
                };
            case "setOption": {
                const isCorrect = state.answer === action.payload;
                return {
                    ...state,
                    option: action.payload,
                    isCorrect: isCorrect,
                };
            }
        }
    }
    return (
        <div className="flex w-full h-screen justify-center items-center bg-slate-950">
            {status === "idle" && <StartScreen dispatch={dispatch} />}
            {status === "start" && (
                <Question
                    dispatch={dispatch}
                    questionData={quizData.soal[number]}
                    answer={answer}
                    option={option}
                />
            )}
        </div>
    );
}
