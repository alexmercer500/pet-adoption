import { useLocation } from "react-router-dom"

const PetInfo = () => {
	const { state } = useLocation()

	return (
		<>
			<section>
				<div className='max-w-[1300px] mx-4'>
					<div className="mt-12">
						<h1 className="text-3xl">Meet our {state.name}</h1>
						<div className="sm:flex justify-between bg-[#faebd7] p-2 rounded-md my-5">
							<div className="sm:w-2/3 p-5 font-semibold">
								<div>
									<h2 className="text-2xl">Our : <span className="font-medium">{state.name}</span></h2>
									<p>Gender: <span className="font-medium">{state.gender}</span></p>
									<p>Age: <span className="font-medium">{state.age}</span></p>
									<p>About me : <span className="font-medium">{state.description}</span></p>
								</div>
								<div>

								</div>
							</div>
							<figure className="sm:w-1/3">
								<img src={state.photo} className='w-full aspect-square object-cover rounded-md' alt={state.name} />

							</figure>
						</div>
					</div>

				</div>
			</section>
		</>
	)
}

export default PetInfo