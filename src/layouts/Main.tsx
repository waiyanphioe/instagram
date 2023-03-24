import React from "react";
import { Link, Outlet } from "react-router-dom";

type NavLinkProps = {
	to: string;
	title: string;
};

const NavLink = (props: NavLinkProps) => {
	return (
		<div>
			<Link to={props.to}>{props.title}</Link>
		</div>
	);
};

const Main = (props: any) => {
	const [open, setOpen] = React.useState(false);
	return (
		<div>
			<header className="w-auto h-full flex flex-row fixed z-10 top-0 left-0 overflow-x-hidden bg-white">
				<div className="w-auto h-full flex flex-row">
					<div
						className={`${
							open ? " w-[5rem]" : "w-[19rem]"
						} max-xl:w-[5rem] border-r`}
					>
						<div
							className={`${
								open ? "items-center" : ""
							} w-full h-full p-3 flex flex-col justify-between`}
						>
							<div className="">
								<div className=" max-xl:hidden"></div>
								<div className="hidden max-xl:block"></div>
							</div>
							<div className="">
								<button onClick={() => setOpen((pre) => !pre)}>
									Open
								</button>
							</div>
							<div className="">more</div>
						</div>
					</div>
					<div
						className={`${
							open ? "block" : "hidden"
						} w-[300px] p-2 transition rounded-r-xl bg-slate-500`}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Eaque quibusdam amet sunt ex voluptatem, atque iusto
						dolore vitae nobis distinctio error blanditiis, esse
						asperiores magni aut consequuntur. Sed, quod asperiores!
						<input type="text" name="" id="" />
					</div>
				</div>
			</header>
			<main className=" ml-[19rem] max-xl:ml-[5rem]">
				{props.children}
			</main>
		</div>
	);
};

export default Main;
