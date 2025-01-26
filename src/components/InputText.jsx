export default function InputText({type="text", placeholder="Type here", value, onChange, children}) {
	return (
		<label className="form-control w-full max-w-xs">
			<div className="label">
				<span className="label-text">{children}</span>
			</div>
			<input
				type={type}
				placeholder={placeholder}
				className="input input-bordered w-full max-w-xs"
				value={value}
				onChange={onChange}
				required
			/>
		</label>
	);
}
