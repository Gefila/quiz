export default function InputSelect({children, value, label, onChange}) {
	return (
		<label className="form-control w-full max-w-xs">
			<div className="label">
				<span className="label-text">{label}</span>
			</div>
			<select
				className="select select-bordered"
				value={value}
				required
				onChange={onChange}
			>
                <option disabled>Pilih Salah Satu</option>
                {children}
			</select>
		</label>
	);
}
