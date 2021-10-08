function Display({ display }) {
	return (
		<div
			id='display'
			className=' border-4 border-black bg-black text-white flex w-96 h-24 p-2 justify-end items-end text-xl font-bold'
		>
			{display}
		</div>
	);
}

export default Display;
