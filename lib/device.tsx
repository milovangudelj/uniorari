import { createContext, useContext, useEffect, useState } from "react";

const DeviceContext = createContext(undefined);

export function useDevice() {
	return useContext(DeviceContext);
}

export function DeviceProvider({ children }) {
	const [width, setWidth] = useState(
		typeof window !== "undefined" ? window.innerWidth : null
	);

	const handleResize = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<DeviceContext.Provider value={{ width }}>
			{children}
		</DeviceContext.Provider>
	);
}
