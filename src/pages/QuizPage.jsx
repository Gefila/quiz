import { useReducer, useState } from "react";
import StartScreen from "../components/StartScreen";
import soal from "../data/soal.json";
import Question from "../components/Question";

export default function QuizPage() {
    const [{ quizData, status, number, score }, dispatch] = useReducer(
        reducer,
        {
            quizData: soal,
            status: "idle",
            number: 0,
            score: 0,
        }
    );

    function reducer(state, action) {
        switch (action.type) {
            case "start":
                return { ...state, status: "start" };
            case "next":
                return { ...state, number: state.number + 1 };
        }
    }
    console.log(quizData);
    return (
        <div className="flex w-full h-screen justify-center items-center bg-slate-950">
            {status === "idle" && <StartScreen dispatch={dispatch} />}
            {status === "start" && <Question dispatch={dispatch} questionData={quizData.soal[number]}/>}
        </div>
    );
}
