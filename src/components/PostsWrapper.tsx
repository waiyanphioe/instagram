import React from "react";
import Post from "./Post";

const data = [
	{ id: 1, name: "Lisa", username: "lalalalisa_m" },
	{ id: 2, name: "Lisa", username: "lalalalisa_m" },
];

const PostsWrapper = () => {
	return (
		<div>
			{data.map((dat) => (
				<Post data={dat} key={dat.id} />
			))}
		</div>
	);
};

export default PostsWrapper;
