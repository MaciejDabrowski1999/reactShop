import { useState } from 'react'
import { shop } from '../Utils/shop'

export default function BarShop() {
	const [chosenCategory, setChosenCategory] = useState({
		check: false,
		category: 'rtv',
	})
	function handleClick(prop, category) {
		setChosenCategory({ validation: prop, category: category })
	}

	return (
		<section>
			<p className="return">
				<button onClick={() => handleClick(false, null)}>Powrót</button>
			</p>
			<ul>
				{chosenCategory.validation
					? Object.keys(shop[chosenCategory.category]).map((item, index) => {
							return (
								<li key={index}>
									<button>{item}</button>
								</li>
							)
					  })
					: Object.keys(shop).map((item, index) => {
							return (
								<li key={index}>
									<button
										onClick={() => {
											handleClick(true, item)
										}}>
										{item}
									</button>
								</li>
							)
					  })}
			</ul>
		</section>
	)
}
