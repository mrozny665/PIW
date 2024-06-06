import { createContext, useState } from "react";

const MailContext = createContext();

export const MailProvider = ({ children }) => {
	const [isMailOpen, setIsMailOpen] = useState(false);

	return (
		<MailContext.Provider value={{ isMailOpen, setIsMailOpen }}>
			{children}
		</MailContext.Provider>
	);
};

export default MailContext;
