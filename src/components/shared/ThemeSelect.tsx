import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function ThemeSelect() {
	const { theme, setTheme } = useTheme();

	return theme === "light" ? (
		<button onClick={() => setTheme("dark")}>
			<Moon />
		</button>
	) : (
		<button onClick={() => setTheme("light")}>
			<Sun />
		</button>
	);
}

export default ThemeSelect;
