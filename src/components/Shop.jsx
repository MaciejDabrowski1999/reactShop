import { shop } from '../Utils/shop.js'

export default function Shop() {
	return (
		<section>
			<div className="shopHeder">
				<p className="sort">
					<button>Sort</button>
				</p>	
				<p className="return">Return</p>
			</div>
			<div className="allCategory">
				{Object.keys(shop).map((item, index) => {
					return <div key={index}>{item}</div>
				})}
			</div>
		</section>
	)
}
