import React from "react";
import lisa from "../assets/lisa.jpg";
import { Link } from "react-router-dom";
import more from "../assets/more.svg";

const Post = ({ data }: any) => {
	return (
		<article className=" w-[30rem] bg-white m-3 border-b">
			<div className="">
				<div className="flex flex-row justify-between">
					<div className="flex flex-row items-center">
						<div className=" mr-1">
							<div>
								<img
									src={lisa}
									alt=""
									className="w-[42px] aspect-square rounded-full"
								/>
							</div>
						</div>
						<div className="flex flex-row">
							<div className="flex flex-row">
								<div className="">
									<Link to={data.username}>
										{data.username}
									</Link>
								</div>
								<div className="">
									<span title="Verified">.</span>
								</div>
							</div>
							<div className="">
								<div className="">HI</div>
							</div>
							<div className=""></div>
						</div>
					</div>
					<div className="">
						<button></button>
					</div>
				</div>
				<div className="">
					<div className="">
						<img
							src="http://localhost:5173/src/assets/lisa.jpg"
							alt=""
							className="w-full"
						/>
					</div>
					<div className=""></div>
				</div>
				<div className=""></div>
			</div>
		</article>
	);
};

export default Post;
