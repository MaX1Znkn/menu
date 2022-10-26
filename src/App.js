import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import HomePage from "./components/HomePage/HomePage";
import DriftPage from "./components/DriftPage/DriftPage";
import ForzaPage from "./components/ForzaPage/ForzaPage";
import TimeAttackPage from "./components/TimeAttackPage/TimeAttackPage";
import "./App.css";

export default function App() {
	return (
		<Router>
			<div>
				<Menu />
				<div className="page">
					<Routes>
						<Route
							path="/main"
							exact="true"
							element={<HomePage />}
						/>
						<Route path="/drift" element={<DriftPage />} />
						<Route
							path="/timeattack"
							element={<TimeAttackPage />}
						/>
						<Route path="/forza" element={<ForzaPage />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}
