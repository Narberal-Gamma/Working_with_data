import React from 'react'
import './App.css'
import Navbar from './components/UI/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
	return (
		<>
			<Navbar />
			<div style={{ maxWidth: 1280, margin: '0px auto', padding: '2rem' }}>
				<Outlet />
			</div>
		</>
	)
}

export default App
