import { createContext, useState } from "react";

const AddContext = createContext();

export const AddProvider = ({ children }) => {
	const [isAddOpen, setIsAddOpen] = useState(false);

	return (
		<AddContext.Provider value={{ isAddOpen, setIsAddOpen }}>
			{children}
		</AddContext.Provider>
	);
};

export default AddContext;
