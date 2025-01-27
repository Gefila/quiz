import { useState } from "react";
import InputText from "./InputText";
import InputSelect from "./InputSelect";
import QuizHistory from "./QuizHistory";

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
        <div className="flex flex-col items-center rounded-lg gap-5 m-auto p-5">
            <div className="flex flex-col items-center bg-slate-900 p-5 rounded-lg gap-2 w-full">
                <h1 className="text-white font-bold text-2xl">
                    Selamat Datang di QuizKuy
                </h1>
                <InputText
                    value={name}
                    onChange={(e) =>
                        dispatch({ type: "setName", payload: e.target.value })
                    }
                    placeholder="Masukkan Nama Anda"
                >
                    Masukkan Nama Anda?
                </InputText>
                <InputSelect
                    value={judulSoal}
                    label="Pilih Soal"
                    onChange={(e) =>
                        dispatch({ type: "setSoal", payload: e.target.value })
                    }
                >
                    {daftarSoal.map((soal, index) => (
                        <option key={index}>{soal}</option>
                    ))}
                </InputSelect>
                <InputSelect
                    value={tipeSoal}
                    label="Tipe Soal"
                    onChange={(e) =>
                        dispatch({
                            type: "setTipeSoal",
                            payload: e.target.value,
                        })
                    }
                >
                    {daftarTipeSoal.map((tipe, index) => (
                        <option key={index}>{tipe.tipe}</option>
                    ))}
                </InputSelect>

                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <div className="flex w-full gap-3">
                    <button
                        className="btn btn-primary flex-1"
                        onClick={() =>
                            document.getElementById("startModal").showModal()
                        }
                        disabled={
                            !name ||
                            judulSoal === "Pilih Salah Satu" ||
                            tipeSoal === "Pilih Salah Satu"
                        }
                    >
                        Start Quiz
                    </button>
                    <button
                        className="btn btn-secondary flex-1"
                        disabled={
                            !name ||
                            judulSoal === "Pilih Salah Satu" ||
                            tipeSoal === "Pilih Salah Satu"
                        }
                    >
                        Lihat Soal
                    </button>
                </div>
                <dialog
                    id="startModal"
                    className="modal modal-bottom sm:modal-middle"
                >
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Halo {name}</h3>
                        <p className="py-4">
                            Anda akan memulai quiz dengan soal{" "}
                            <span className="font-bold">{`${judulSoal} (${tipeSoal})`}</span>
                        </p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-secondary text-white">
                                    Close
                                </button>
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
                <QuizHistory
                    quizHistory={quizHistory}
                    setQuizHistory={setQuizHistory}
                />
            )}
        </div>
    );
}
