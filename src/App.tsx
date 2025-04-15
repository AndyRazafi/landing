import { ThemeProvider } from "next-themes";
import Layout from "./components/Layout";
import Hero from "./components/sections/Hero";

function App() {
	return (
		<ThemeProvider>
			<Layout title="Landing">
				<Hero />
			</Layout>
		</ThemeProvider>
	);
}

export default App;
