import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<nav className='w-full flex py-6 justify-between items-center navbar'>
				<img src={logo} alt='hoobank logo' className='w-[124px] h-[32px]' />
				<ul className='sm:flex justify-end hidden '>
					{navLinks.map((nav, i) => (
						<li
							key={nav.id}
							className={`font-poppins font-normal  cursor-pointer text-[16px] text-white ${
								i === navLinks.length - 1 ? "mr-0" : "mr-10"
							}`}>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
				</ul>

				<div className='sm:hidden flex flex-1 justify-end items-center'>
					<img
						src={isOpen ? close : menu}
						alt='menu'
						className='w-[28px] h-[28px] object-contain'
						onClick={() => setIsOpen((prev) => !prev)}
					/>
					<div
						className={`${
							isOpen ? "flex" : "hidden"
						} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
						<ul className='flex justify-end flex-col items-center '>
							{navLinks.map((nav, i) => (
								<li
									key={nav.id}
									className={`font-poppins font-normal  cursor-pointer text-[16px] text-white ${
										i === navLinks.length - 1 ? "mb-0" : "mb-10"
									}`}>
									<a href={`#${nav.id} `}>{nav.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
