function Buttons({ clearDisplay, appendNumber, choseOperation, compute }) {
	return (
		<div className=''>
			<div className='text-white text-xl bg-gray-400 grid grid-cols-4 gap-0 w-96 h-96 border-4 border-black'>
				<button
					id='clear'
					onClick={(e) => clearDisplay(e)}
					className=' active:bg-gray-400 focus:outline-none p2 col-span-2 border border-black bg-gray-600 rounded-none'
				>
					AC
				</button>
				<button
					onClick={(e) => choseOperation(e)}
					id='divide'
					className='
				 focus:outline-none  p2 border border-black bg-yellow-500 active:bg-yellow-600 rounded-none'
				>
					/
				</button>
				<button
					onClick={(e) => choseOperation(e)}
					id='multiply'
					className='focus:outline-none p2 border border-black bg-yellow-500 active:bg-yellow-600 rounded-none'
				>
					x
				</button>
				<button
					onClick={(e) => appendNumber(e)}
					id='seven'
					className='focus:outline-none active:bg-gray-200  p2 border border-black rounded-none'
				>
					7
				</button>
				<button
					onClick={(e) => appendNumber(e)}
					id='eight'
					className='focus:outline-none active:bg-gray-200  p2 border border-black rounded-none'
				>
					8
				</button>
				<button
					onClick={(e) => appendNumber(e)}
					id='nine'
					className='focus:outline-none active:bg-gray-200  p2 border border-black rounded-none'
				>
					9
				</button>
				<button
					onClick={(e) => choseOperation(e)}
					id='subtract'
					className='focus:outline-none p2 border border-black bg-yellow-500 active:bg-yellow-600 rounded-none'
				>
					-
				</button>
				<button
					onClick={(e) => appendNumber(e)}
					id='four'
					className='focus:outline-none active:bg-gray-200  p2 border border-black rounded-none'
				>
					4
				</button>
				<button
					onClick={(e) => appendNumber(e)}
					id='five'
					className='focus:outline-none active:bg-gray-200  p2 border border-black rounded-none'
				>
					5
				</button>
				<button
					onClick={(e) => appendNumber(e)}
					id='six'
					className='focus:outline-none active:bg-gray-200  p2 border border-black rounded-none'
				>
					6
				</button>
				<button
					onClick={(e) => choseOperation(e)}
					id='add'
					className='focus:outline-none p2 border border-black bg-yellow-500 active:bg-yellow-600 rounded-none'
				>
					+
				</button>
				<button
					onClick={(e) => appendNumber(e)}
					id='one'
					className='focus:outline-none active:bg-gray-200 p2 border border-black rounded-none'
				>
					1
				</button>
				<button
					onClick={(e) => appendNumber(e)}
					id='two'
					className='focus:outline-none active:bg-gray-200  p2 border border-black rounded-none'
				>
					2
				</button>
				<button
					onClick={(e) => appendNumber(e)}
					id='three'
					className='focus:outline-none active:bg-gray-200  p2 border border-black rounded-none'
				>
					3
				</button>
				<button
					onClick={(e) => compute(e)}
					id='equals'
					className='focus:outline-none p2 border border-black row-span-2 bg-yellow-500 active:bg-yellow-600 rounded-none'
				>
					=
				</button>
				<button
					onClick={(e) => appendNumber(e)}
					id='zero'
					className='focus:outline-none active:bg-gray-200  p2 border border-black col-span-2 rounded-none'
				>
					0
				</button>
				<button
					onClick={(e) => appendNumber(e)}
					id='decimal'
					className='focus:outline-none active:bg-gray-200  p2 border border-black rounded-none'
				>
					.
				</button>
			</div>
		</div>
	);
}

export default Buttons;
