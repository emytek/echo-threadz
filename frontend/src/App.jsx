import { Box, Container } from "@chakra-ui/react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import ChatPage from "./pages/ChatPage";
import PostPage from "./pages/PostPage";
import UserPage from "./pages/UserPage";
import CreatePost from "./components/CreatePost";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import Header from "./components/Header";
import SettingsPage from "./pages/SettingsPage";

function App() {
  const user = true;
	const { pathname } = useLocation();

  return (
    <>
      <Box position={"relative"} w='full'>
			<Container maxW={pathname === "/" ? { base: "620px", md: "900px" } : "620px"}>
				<Header />
				<Routes>
					{/* <Route path='/' element={user ? <HomePage /> : <Navigate to='/auth' />} /> */}
					<Route path='/' element={<HomePage />} />
					{/* <Route path='/auth' element={!user ? <AuthPage /> : <Navigate to='/' />} /> */}
					<Route path='/auth' element={ <AuthPage />} />
					<Route path='/update' element={user ? <UpdateProfilePage /> : <Navigate to='/auth' />} />

					<Route
						path='/:username'
						element={
							user ? (
								<>
									<UserPage />
									<CreatePost />
								</>
							) : (
								<UserPage />
							)
						}
					/>
					<Route path='/:username/post/:pid' element={<PostPage />} />
					<Route path='/chat' element={user ? <ChatPage /> : <Navigate to={"/auth"} />} />
					<Route path='/settings' element={user ? <SettingsPage /> : <Navigate to={"/auth"} />} />
				</Routes>
			</Container>
		</Box>
    </>
  )
}

export default App
