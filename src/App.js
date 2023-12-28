import { useState } from 'react'
import './css/header.css'
import { shop } from './Utils/shop'
import Shop from './components/Shop'
import BarShop from './components/BarShop'


function App() {
	const [items, setItems] = useState([])

	return (
		<>
			<Shop items={items} />
			<BarShop />
		</>
	)
}

export default App
