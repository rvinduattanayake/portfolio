"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faUser,
	faFolderOpen,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const navItems = [
	{ icon: faHome, label: "Go to Home section", anchor: "home" },
	{ icon: faUser, label: "Go to About section", anchor: "about" },
	{ icon: faFolderOpen, label: "Go to Projects section", anchor: "projects" },
	{ icon: faEnvelope, label: "Go to Contact section", anchor: "contact" },
];

const Sidebar = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const sections = navItems
			.map((item) => document.getElementById(item.anchor))
			.filter(Boolean);

		const observer = new IntersectionObserver(
			(entries) => {
				const mostVisible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
				if (mostVisible) {
					const index = sections.indexOf(mostVisible.target);
					if (index !== -1) setActiveIndex(index);
				}
			},
			{ threshold: 0.5 }
		);

		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, []);

	const moveTo = (anchor) => {
		document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="hidden md:flex fixed z-40 bg-gray-700 h-[50vh] w-14 flex-col justify-between items-center p-4 left-0 top-1/4 rounded-e-3xl">
			<ul
				id="sidebar"
				className="flex flex-col justify-evenly items-center h-full text-gray-50">
				{navItems.map((item, index) => (
					<li key={item.anchor} data-menuanchor={item.anchor}>
						<button
							aria-label={item.label}
							onClick={() => moveTo(item.anchor)}
							className="relative flex items-center justify-center w-10 h-10">
							{activeIndex === index && (
								<motion.div
									layoutId="sidebar-active"
									className="absolute inset-0 bg-gray-500 rounded-xl"
									transition={{
										type: "spring",
										stiffness: 350,
										damping: 30,
									}}
								/>
							)}
							<FontAwesomeIcon
								icon={item.icon}
								className={`relative z-10 text-xl transition-transform duration-300 ${
									activeIndex === index
										? "scale-110"
										: "scale-100"
								}`}
							/>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
