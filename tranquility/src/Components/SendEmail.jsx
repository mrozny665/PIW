import { useContext, useState } from "react";
import { createHotel } from "../data/hotelsService";
import MailContext from "../contexts/mailContext";
import { useRef } from "react";

const SendEmail = () => {
	const { setIsMailOpen } = useContext(MailContext);
	const newMailRef = useRef();

	const handleNewMail = () => {
		setIsMailOpen(false);
		window.alert("Wysłano");
	};

	return (
		<modal class="grid modal">
			<section class="modal-content">
				<section class="modal-start">
					<p class="modal-close" onMouseDown={() => setIsMailOpen(false)}>
						&times;
					</p>
					<p class="title-large">Contact</p>
					<p class="text-small">You're contacting the [hotel name] hotel</p>
				</section>
				<textarea class="modal-text" ref={newMailRef}></textarea>
				<section class="modal-buttons">
					<p class="button" onMouseDown={() => setIsMailOpen(false)}>
						Cancel
					</p>
					<button class="primary button" onMouseDown={() => handleNewMail}>
						Send
					</button>
				</section>
			</section>
		</modal>
	);
};

export default SendEmail;
