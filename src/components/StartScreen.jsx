import { useState } from "react";

export default function StartScreen({ dispatch }) {
    const [name, setName] = useState("");
    const [soal, setSoal] = useState("Pilih Salah Satu");

    return (
        <div className="flex flex-col items-center bg-slate-900 p-5 rounded-lg gap-3">
            <h1 className="text-white font-bold text-2xl">
                Selamat Datang di QuizKuy
            </h1>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Pilih Soal</span>
                </div>
                <select
                    className="select select-bordered"
                    value={soal}
                    onChange={(e) => setSoal(e.target.value)}
                >
                    <option disabled>Pilih Salah Satu</option>
                    <option>KOMAS TI5A - 50 Soal (Etika Sosmed)</option>
                    <option>
                        KOMAS TI5A - 20 Soal (Komputer Dan Pekerjaan)
                    </option>
                    <option>KOMAS TI5A - 50 Soal (UAS) Full</option>
                    <option>KOMAS TI5A - 50 Soal (UAS) Part1</option>
                    <option>KOMAS TI5A - 50 Soal (UAS) Part2</option>
                </select>
            </label>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Masukkan Nama Anda?</span>
                </div>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
                className="btn"
                onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                }
            >
                Start Quiz
            </button>
            <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
            >
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                        Halo {name}, Apakah Anda Yakin?
                    </h3>
                    <p className="py-4">
                        Anda akan memulai quiz dengan soal{" "}
                        <span className="font-bold">{soal}</span>
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
    );
}
