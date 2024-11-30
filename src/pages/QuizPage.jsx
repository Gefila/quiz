import { useReducer, useState } from "react";
import StartScreen from "../components/StartScreen";
import soal from "../data/soal.json";
import Question from "../components/Question";
import Info from "../components/Info";

export default function QuizPage() {
    const [
        { quizData, status, number, score, answer, isCorrect, option },
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
                    isCorrect: false,
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

    const quizDataLength = quizData.soal.length;

    return (
        <div className="flex w-full h-screen justify-center items-center bg-slate-950">
            {status === "idle" && <StartScreen dispatch={dispatch} />}
            {status === "start" && (
                <div className="w-full  m-2">
                    <Info number={number} score={score} quizDataLength={quizDataLength}/>
                    <Question
                        dispatch={dispatch}
                        questionData={quizData.soal[number]}
                        answer={answer}
                        option={option}
                    />
                </div>
            )}
        </div>
    );
}
