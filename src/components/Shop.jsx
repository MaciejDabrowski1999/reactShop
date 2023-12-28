import { useState } from 'react'
import Product from './Product.jsx'
import { shop } from '../Utils/shop.js'

export default function Shop({ items }) {
	let allItems = { category: true, categoryName: 'rtv', type: true, typeName: 'TV' }
	//if category true => shows list of type if type is true show list of product
	let product = Object.values(shop.rtv.TV)
	// {Object.keys(shop).map((item, index) => {
	// 	return (
	// 		<div key={index}>
	// 			<button>{item}</button>
	// 		</div>
	// 	)
	// })}

	function handleClick() {}
	// {
	// 	allItems.category
	// 		? type
	// 			? Object.values(shop[categoryName[typeName]]).map((item, index) => {
	// 					return (
	// 						<Product
	// 							key={index}
	// 							title={item.name}
	// 							price={item.price}
	// 							description={item.description}
	// 							amount={item.amount}
	// 						/>
	// 					)
	// 			  })
	// 			: Object.keys(shop[categoryName]).map((item, index) => {
	// 					return (
	// 						<div key={index}>
	// 							<button>{item}</button>
	// 						</div>
	// 					)
	// 			  })
	// 		: Object.keys(shop).map((item, index) => {
	// 				return (
	// 					<div key={index}>
	// 						<button onClick={}>{item}</button>
	// 					</div>
	// 				)
	// 		  })
	// }

	return (
		<section>
			<div className="shopHeder">
				<p className="sort">
					<button>Sort</button>
				</p>
				<p className="return">Return</p>
			</div>
			<div className="allCategory">
				{allItems.category
					? allItems.type
						? Object.values(shop[allItems.categoryName][allItems.typeName]).map((item, index) => {
								return (
									<Product
										key={index}
										title={item.name}
										price={item.price}
										description={item.description}
										amount={item.amount}
									/>
								)
						  })
						: Object.keys(shop[allItems.categoryName]).map((item, index) => {
								return (
									<div key={index}>
										<button>{item}</button>
									</div>
								)
						  })
					: Object.keys(shop).map((item, index) => {
							return (
								<div key={index}>
									<button>{item}</button>
								</div>
							)
					  })}
			</div>
		</section>
	)
}
