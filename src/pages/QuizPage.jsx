import { useEffect, useReducer } from "react";
import StartScreen from "../components/StartScreen";
import dataSoal from "../data/soal.json";
import Question from "../components/Question";
import Info from "../components/Info";
import Finish from "../components/Finish";

export default function QuizPage() {
    const [
        { quizData, status, number, score, answer, isCorrect, option },
        dispatch,
    ] = useReducer(reducer, {
        quizData: dataSoal,
        status: "idle",
        number: 0,
        answer: "",
        option: "",
        isCorrect: false,
        score: 0,
    });

    function reducer(state, action) {
        switch (action.type) {
            case "setQuizData":
                return { ...state, quizData: action.payload };
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
                    isCorrect: false,
                };
            case "setOption": {
                const isCorrect = state.answer === action.payload;
                return {
                    ...state,
                    option: action.payload,
                    isCorrect: isCorrect,
                    score: isCorrect ? state.score + 1 : state.score,
                };
            }
            case "finish":
                return { ...state, status: "finish" };
            case "restart":
                return {
                    ...state,
                    status: "start",
                    number: 0,
                    score: 0,
                    answer: "",
                    option: "",
                    isCorrect: false,
                };
            case "back":
                return {
                    ...state,
                    number: 0,
                    score: 0,
                    answer: "",
                    option: "",
                    isCorrect: false,
                    status: "idle",
                };
            default:
                throw new Error("Action unknown");
        }
    }

    const quizDataLength = quizData.soal.length;

    useEffect(() => {
        if (status !== "start") return;
        const randomSoal = dataSoal.soal
            .slice()
            .sort(() => Math.random() - 0.5);
        const randomOption = randomSoal.map((item) => {
            return {
                ...item,
                options: item.options.sort(() => Math.random() - 0.5),
            };
        });

        const soal = { ...dataSoal, soal: randomOption };
        dispatch({ type: "setQuizData", payload: soal });
    }, [status]);

    return (
        <div className="flex w-full h-screen justify-center items-center bg-slate-950">
            {status === "idle" && <StartScreen dispatch={dispatch} />}
            {status === "start" && (
                <div className="w-full m-2">
                    <Info
                        number={number}
                        score={score}
                        quizDataLength={quizDataLength}
                    />
                    <Question
                        dispatch={dispatch}
                        questionData={quizData.soal[number]}
                        answer={answer}
                        option={option}
                        quizDataLength={quizDataLength}
                        number={number}
                    />
                </div>
            )}
            {status === "finish" && (
                <Finish score={score} dispatch={dispatch} quizDataLength={quizDataLength}/>
            )}
        </div>
    );
}
