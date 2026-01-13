import MainPage from './pages/Main'
import { Mutagen } from './pages/Mutagen'
import SideBar from './pages/Sidebar'
import { Villains } from './pages/Villains'

function App() {
	return (
		<div className='w-full min-h-dvh'>
			<SideBar />
			<MainPage />
			<Villains />
			<Mutagen />
		</div>
	)
}

export default App
