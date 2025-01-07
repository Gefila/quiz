import { useEffect, useReducer, useState } from "react";
import StartScreen from "../components/StartScreen";
import dataSoal from "../data/soal.json";
import Question from "../components/Question";
import Info from "../components/Info";
import Finish from "../components/Finish";

export default function QuizPage() {
	const [
		{
			quizData,
			status,
			number,
			score,
			answer,
			isCorrect,
			option,
			name,
			judulSoal,
			tipeSoal,
			tipeSoalData,
		},
		dispatch,
	] = useReducer(reducer, {
		quizData: dataSoal[0],
		status: "idle",
		number: 0,
		answer: "",
		option: "",
		isCorrect: false,
		score: 0,
		name: "Gefila Zona Pranata",
		judulSoal: "Pilih Salah Satu",
		tipeSoal: "Pilih Salah Satu",
		tipeSoalData: [],
	});

	const [daftarSoal, setDaftarSoal] = useState([]);
	const [daftarTipeSoal, setDaftarTipeSoal] = useState([]);

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
			case "setSoal":
				return {
					...state,
					judulSoal: action.payload,
				};
			case "setTipeSoal":
				return {
					...state,
					tipeSoal: action.payload,
				};
			case "setTipeSoalData":
				return {
					...state,
					tipeSoalData: action.payload,
				};
			case "setName":
				return {
					...state,
					name: action.payload,
				};
			default:
				throw new Error("Action unknown");
		}
	}

	//const quizDataLength = quizData.soal.length;

	const fisherYatesShuffle = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]]; // Swap
		}
	};

	useEffect(() => {
		if (judulSoal === "Pilih Salah Satu") return;
		var findJudulSoal = dataSoal.find((judul) => judul.kelas === judulSoal);
		setDaftarTipeSoal(findJudulSoal.tipeSoal);

		if (status === "idle") return;
		var { dari, sampai } = findJudulSoal.tipeSoal.find(
			(tipe) => tipe.tipe === tipeSoal
		).jumlahSoal;
		if (sampai > findJudulSoal.soal.length) sampai = findJudulSoal.soal.length;
		var soalSliced = findJudulSoal.soal.slice(dari - 1, sampai);

		const randomSoal = [...soalSliced];
		fisherYatesShuffle(randomSoal);

		const randomOption = randomSoal.map((item) => {
			const options = [...item.options];
			fisherYatesShuffle(options);
			return {
				...item,
				options,
			};
		});

		const soal = { ...findJudulSoal, soal: randomOption };
		dispatch({ type: "setQuizData", payload: soal });
		console.log(randomOption);
	}, [status, judulSoal, tipeSoal]);

	useEffect(() => {
		const daftarSoal = dataSoal.map((soal) => soal.kelas);
		setDaftarSoal(daftarSoal);
	}, []);

	return (
		<div className="flex w-full h-screen justify-center items-center bg-slate-950">
			{status === "idle" && (
				<StartScreen
					dispatch={dispatch}
					daftarSoal={daftarSoal}
					judulSoal={judulSoal}
					name={name}
					tipeSoal={tipeSoal}
					daftarTipeSoal={daftarTipeSoal}
				/>
			)}
			{status === "start" && (
				<div className="w-full m-2 lg:px-28">
					<Info
						number={number}
						score={score}
						quizDataLength={quizData.soal.length}
					/>
					<Question
						dispatch={dispatch}
						questionData={quizData.soal[number]}
						answer={answer}
						option={option}
						quizDataLength={quizData.soal.length}
						number={number}
					/>
				</div>
			)}
			{status === "finish" && (
				<Finish
					score={score}
					dispatch={dispatch}
					quizDataLength={quizData.soal.length}
				/>
			)}
		</div>
	);
}
