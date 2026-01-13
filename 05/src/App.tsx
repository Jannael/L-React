import { Route, Routes } from 'react-router'
import { Home } from './pages/Home'

function App() {
	return (
		<Routes>
			<Route element={<Home />} index></Route>
		</Routes>
	)
}

export default App
