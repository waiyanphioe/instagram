import React from "react";
import { Helmet } from "react-helmet-async";

const MetaTags = (props: { title: string }) => {
	return (
		<Helmet>
			<title>{props.title}</title>
		</Helmet>
	);
};

export default MetaTags;
