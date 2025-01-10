import { useEffect } from "react";

export default function Timer({ dispatch, counter }) {
	const min = Math.floor(counter / 60);
	const sec = counter % 60;
	const hour = Math.floor(min / 60);

	useEffect(() => {
        if (dispatch === undefined) return;
		const interval = setInterval(() => {
			dispatch({ type: "setCounter" });
		}, 1000);
		return () => clearInterval(interval);
	}, [dispatch]);

	return (
		<div className="grid grid-flow-col gap-2 text-center auto-cols-max">
			<div className="flex flex-col justify-center items-center p-2 bg-neutral rounded-box text-neutral-content">
				<span className="countdown font-mono text-3xl">
					<span style={{ "--value": hour }}></span>
				</span>
				hours
			</div>
			<div className="flex flex-col justify-center items-center p-2 bg-neutral rounded-box text-neutral-content">
				<span className="countdown font-mono text-3xl">
					<span style={{ "--value": min }}></span>
				</span>
				min
			</div>
			<div className="flex flex-col justify-center items-center p-2 bg-neutral rounded-box text-neutral-content">
				<span className="countdown font-mono text-3xl">
					<span style={{ "--value": sec }}></span>
				</span>
				<span>sec</span>
			</div>
		</div>
	);
}
