import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Profile from "./pages/Profile";

const App = () => {
	const [auth, setAuth] = React.useState(true);
	return (
		<React.Fragment>
			<Routes>
				{auth ? (
					<>
						<Route path="/" element={<Main />} />
						<Route path="/:username" element={<Profile />}>
							<Route path="/:username" element={<h1>Posts</h1>} />
							<Route
								path="/:username/saved"
								element={<h1>Saved</h1>}
							/>
							<Route
								path="/:username/tagged"
								element={<h1>Tags</h1>}
							/>
						</Route>
						<Route path="/explore" element={<h1>Explore</h1>} />
						<Route path="/reels" element={<h1></h1>} />
						<Route path="/direct/inbox" element={<h1>Hi</h1>} />
						<Route
							path="*"
							element={
								<div>
									<h1>404 | Page Not Found</h1>
								</div>
							}
						/>
					</>
				) : (
					<>
						<Route
							path="/"
							element={
								<div>
									<h1>Hi</h1>
									<button onClick={() => setAuth(true)}>
										Login
									</button>
								</div>
							}
						/>
						<Route
							path="*"
							element={<Navigate to={"./"} replace />}
						/>
					</>
				)}
			</Routes>
		</React.Fragment>
	);
};

export default App;
