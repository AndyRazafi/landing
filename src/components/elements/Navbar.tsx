import Container from "../shared/Container";
import logo from "../../assets/icon.svg";
import NavItem from "../shared/NavItem";
import ButtonLink from "../shared/ButtonLink";
import ThemeSelect from "../shared/ThemeSelect";

const navItems = [
	{ id: 1, href: "#", text: "Home" },
	{ id: 2, href: "#services", text: "Services" },
	{ id: 3, href: "#about-us", text: "About Us" },
	{ id: 4, href: "#features", text: "Features" },
];

function Navbar() {
	return (
		<header className="absolute inset-x-0 top-0 z-50 py-6">
			<Container>
				<nav className="w-full flex justify-between gap-6 relative">
					<div className="min-w-max inline-flex relative">
						<a href="/" className="relative flex items-center gap-3">
							<img src={logo} alt="Logo" className="w-10 h-10" />
							<div className="inline-flex text-lg font-semibold text-heading-1">
								LOGO
							</div>
						</a>
					</div>
					<div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden">
						<ul className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-heading-2 w-full lg:justify-center lg:items-center">
							{navItems.map((item) => (
								<NavItem key={item.id} href={item.href} text={item.text} />
							))}
						</ul>
						<div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-box-border lg:border-0 px-6 lg:px-0">
							<ButtonLink text="Get Started" href="#cta" />
							<ThemeSelect />
						</div>
					</div>
				</nav>
			</Container>
		</header>
	);
}

export default Navbar;
