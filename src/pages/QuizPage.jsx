import { useEffect, useReducer, useState } from "react";
import StartScreen from "../components/StartScreen";
import dataSoal from "../data/soal.json";
import Question from "../components/Question";
import Info from "../components/Info";
import Finish from "../components/Finish";
import fisherYatesShuffle from "../utils";

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
			counter,
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
		counter: 0,
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
					counter: 0,
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
					counter: 0,
					judulSoal: "Pilih Salah Satu",
					tipeSoal: "Pilih Salah Satu",
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
			case "setCounter":
				return {
					...state,
					counter: state.counter + 1,
				};
			default:
				throw new Error("Action unknown");
		}
	}

	useEffect(() => {
		if (judulSoal === "Pilih Salah Satu") return;
		var findJudulSoal = dataSoal.find((judul) => judul.kelas === judulSoal);
		setDaftarTipeSoal(findJudulSoal.tipeSoal);

		if (status === "idle") return;
		var { dari, sampai } = findJudulSoal.tipeSoal.find(
			(tipe) => tipe.tipe === tipeSoal
		).jumlahSoal;
		if (sampai > findJudulSoal.soal.length) sampai = findJudulSoal.soal.length;
		if(tipeSoal === "100 Soal Random") fisherYatesShuffle(findJudulSoal.soal);
		var soalSliced = findJudulSoal.soal.slice(dari - 1, sampai);

		const randomSoal = [...soalSliced];
		if(tipeSoal !== "Semua Soal(171) Sesuai Urutan")fisherYatesShuffle(randomSoal)
		
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
	}, [status, judulSoal, tipeSoal]);

	useEffect(() => {
		if (status === "idle") {
			document.title = `QuizKuy - Home`;
		} else if (status === "finish") {
			document.title = `QuizKuy - Finish`;
		} else {
			document.title = `QuizKuy - ${number + 1}`;
		}
	}, [number, status]);

	useEffect(() => {
		const daftarSoal = dataSoal.map((soal) => soal.kelas);
		setDaftarSoal(daftarSoal);
	}, []);

	return (
		<div className="flex w-full min-h-screen justify-center items-start py-5 bg-slate-950">
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
				<div className="w-full m-2 lg:px-28 self-start">
					<Info
						number={number}
						score={score}
						quizDataLength={quizData.soal.length}
						dispatch={dispatch}
						counter={counter}
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
					counter={counter}
					name={name}
					judulSoal={judulSoal}
					tipeSoal={tipeSoal}
				/>
			)}
		</div>
	);
}
