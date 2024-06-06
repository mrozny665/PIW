import { createContext, useState } from "react";

const EditContext = createContext();

export const EditProvider = ({ children }) => {
	const [isEditOpen, setIsEditOpen] = useState(false);

	return (
		<EditContext.Provider value={{ isEditOpen, setIsEditOpen }}>
			{children}
		</EditContext.Provider>
	);
};

export default EditContext;
