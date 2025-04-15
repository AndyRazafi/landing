import { useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";

function ThemeSelect() {
	const [theme, setTheme] = useState<Theme>(
		() => (localStorage.getItem("theme") as Theme) || "system",
	);

	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<select
			value={theme}
			onChange={(e) => setTheme(e.target.value as Theme)}
			className="outline-none"
		>
			<option id="theme-system" value="system">
				System
			</option>
			<option id="theme-light" value="light">
				Light
			</option>
			<option id="theme-dark" value="dark">
				Dark
			</option>
		</select>
	);
}

export default ThemeSelect;
