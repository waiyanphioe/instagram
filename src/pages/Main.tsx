import React from "react";
import { MainLayout } from "../layouts";
import Post from "../components/Post";
import { PostsWrapper } from "../components";

const Main = () => {
	return (
		<MainLayout>
			<section className="w-full">
				<div className="flex flex-row">
					<div className=" w-4/6 h-[200vh] max-lg:w-full flex justify-center">
						<PostsWrapper />
					</div>
					<div className=" w-2/6 max-lg:hidden">div2</div>
				</div>
			</section>
		</MainLayout>
	);
};

export default Main;
