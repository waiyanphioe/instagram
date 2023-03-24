import React from "react";
import { MainLayout } from "../layouts";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import MetaTags from "../components/MetaTags";

const Profile = () => {
	const { username } = useParams();

	return (
		<MainLayout>
			<MetaTags
				title={`Wai Yan Phioe (@${username}) • Instagram photos and videos`}
			/>
			<div className="">{username}</div>
			<div className="">
				<div className="">
					<Link to={"./"}>POSTS</Link>
					<Link to={"./saved"}>SAVED</Link>
					<Link to={"./tagged"}>TAGGED</Link>
				</div>
				<Outlet />
			</div>
		</MainLayout>
	);
};

export default Profile;
