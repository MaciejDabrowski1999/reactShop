import { useState } from 'react'
import { shop } from '../Utils/shop'

export default function BarShop() {
	const [choseCategory, setChoseCategory] = useState({
		validation: false,
		category: 'rtv',
	})
	const [listObject, setListoOfObject] = useState(['TV'])

	function handleClick(prop, category) {
		setChoseCategory({ validation: prop, category: category })
	}

	return (
		<section>
			<p className="return">
				<button onClick={() => handleClick(false, null)}>Powrót</button>
			</p>
			<ul>
				{choseCategory.validation
					? Object.keys(shop[choseCategory.category]).map((item, index) => {
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
