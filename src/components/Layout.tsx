import { useEffect } from "react";
import Footer from "./elements/Footer";
import Navbar from "./elements/Navbar";

interface LayoutProps {
	title: string;
	children: React.ReactNode;
}

function Layout({ title, children }: LayoutProps) {
	useEffect(() => {
		document.title = title;
	}, [title]);
	return (
		<>
			<Navbar />

			<main className="flex flex-col gap-y-20 md:gap-y-32">{children}</main>

			<Footer />
		</>
	);
}

export default Layout;
