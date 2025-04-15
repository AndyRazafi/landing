interface ButtonLinkProps {
	href: string;
	text: string;
	className?: string;
}

function ButtonLink({ href, text, className = "" }: ButtonLinkProps) {
	return (
		<a
			href={href}
			className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border dark:bg-violet-600 ${className}`}
		>
			<span className="relative z-10 text-white">{text}</span>
		</a>
	);
}

export default ButtonLink;
