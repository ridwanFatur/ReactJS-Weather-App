import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "../presentation/home_screen/HomeScreen";
import NotFoundScreen from "../presentation/not_found_screen/NotFoundScreen";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
				<Route path='*' element={<NotFoundScreen />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
