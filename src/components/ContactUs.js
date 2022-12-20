import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_a6ikgpw',
				'template_eoa8zji',
				form.current,
				'e9KqViHHTC7fjNe25'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	return (
		<div className="flex flex-col justify-center items-center gap-10">
			<div className="font-FjallaOne font-bold text-4xl text-white">
				TALK TO US
			</div>
			<div>
				<form
					ref={form}
					onSubmit={sendEmail}
				>
					<div className="flex flex-col gap-5 font-FjallaOne text-xl text-white">
						<div>
							<label>Name: </label>
							<input
								className="lg:w-[550px] lg:h-12 w-80 h-12 rounded-md text-black"
								type="text"
								name="user_name"
							/>
						</div>
						<div>
							<label>Email: </label>
							<input
								className="lg:w-[550px] lg:h-12 w-80 h-12 rounded-md text-black"
								type="email"
								name="user_email"
							/>
						</div>
						<div className="flex flex-row gap-1">
							<div>
								<label>Message: </label>
							</div>
							<div>
								<textarea
									name="message"
									className="lg:w-[526px] lg:h-40 w-72 h-32 rounded-md text-black"
								/>
							</div>
						</div>
						<div className="flex justify-center text-center ">
							<div
								className="hover:text-green-500 cursor-pointer hover:scale-110 bg-white text-black w-20 h-10 rounded-lg flex justify-center items-center "
								type="submit"
								value="Send"
							>
								SUBMIT
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
