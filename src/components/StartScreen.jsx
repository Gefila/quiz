import { useEffect, useState } from "react";

export default function StartScreen({
	dispatch,
	daftarSoal,
	name,
	judulSoal,
	tipeSoal,
	daftarTipeSoal,
}) {
	const [quizHistory, setQuizHistory] = useState(
		JSON.parse(localStorage.getItem("quizHistory")) || []
	);

	return (
		<div className="flex flex-col items-center rounded-lg gap-5 m-auto">
			<div className="flex flex-col items-center bg-slate-900 p-5 rounded-lg gap-3">
				<h1 className="text-white font-bold text-2xl">
					Selamat Datang di QuizKuy
				</h1>
				<label className="form-control w-full max-w-xs">
					<div className="label">
						<span className="label-text">Masukkan Nama Anda?</span>
					</div>
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full max-w-xs"
						value={name}
						onChange={(e) =>
							dispatch({ type: "setName", payload: e.target.value })
						}
						required
					/>
				</label>
				<label className="form-control w-full max-w-xs">
					<div className="label">
						<span className="label-text">Pilih Soal</span>
					</div>
					<select
						className="select select-bordered"
						value={judulSoal}
						required
						onChange={(e) =>
							dispatch({ type: "setSoal", payload: e.target.value })
						}
					>
						<option disabled>Pilih Salah Satu</option>
						{daftarSoal.map((soal, index) => (
							<option key={index}>{soal}</option>
						))}
					</select>
				</label>
				<label className="form-control w-full max-w-xs">
					<div className="label">
						<span className="label-text">Tipe Soal</span>
					</div>
					<select
						className="select select-bordered"
						value={tipeSoal}
						required
						onChange={(e) => {
							dispatch({ type: "setTipeSoal", payload: e.target.value });
						}}
					>
						<option disabled>Pilih Salah Satu</option>
						{daftarTipeSoal.map((tipe, index) => (
							<option key={index}>{tipe.tipe}</option>
						))}
					</select>
				</label>

				{/* Open the modal using document.getElementById('ID').showModal() method */}
				<button
					className="btn"
					onClick={() => document.getElementById("my_modal_5").showModal()}
					disabled={
						!name ||
						judulSoal === "Pilih Salah Satu" ||
						tipeSoal === "Pilih Salah Satu"
					}
				>
					Start Quiz
				</button>
				<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
					<div className="modal-box">
						<h3 className="font-bold text-lg">Halo {name}</h3>
						<p className="py-4">
							Anda akan memulai quiz dengan soal{" "}
							<span className="font-bold">{`${judulSoal} (${tipeSoal})`}</span>
						</p>
						<div className="modal-action">
							<form method="dialog">
								{/* if there is a button in form, it will close the modal */}
								<button className="btn btn-secondary text-white">Close</button>
								<button
									className="btn btn-outline ml-3"
									onClick={() => dispatch({ type: "start" })}
								>
									Start Quiz
								</button>
							</form>
						</div>
					</div>
				</dialog>
			</div>
			{quizHistory.length > 0 && (
				<div className="flex flex-col items-center bg-slate-900 p-2 rounded-lg gap-2 m-5 w-full">
					<h1 className="text-white font-bold text-2xl">History Quiz</h1>
					<button
						className="btn btn-sm self-end mb-2"
						onClick={() => {
							setQuizHistory([]);
							localStorage.removeItem("quizHistory");
						}}
					>
						Clear History
					</button>
					{quizHistory.map((history, index) => (
						<div
							className="flex flex-col items-start bg-blue-600 p-2 rounded-lg w-full"
							key={index}
						>
							<div className="avatar flex items-center">
								<div className="w-6 rounded-full">
									<img src={history.image} />
								</div>
							<p className="text-white text-sm font-bold ml-1">{`${history.name}, ${history.date}`}</p>
							</div>
							<p className="text-white text-sm font-sm">{`${history.judulSoal} (${history.tipeSoal})`}</p>
							<p className="text-white text-sm font-sm">{`Score: ${
								history.score
							} (${Math.floor(history.counter / 60)}m ${
								history.counter % 60
							}s)`}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
