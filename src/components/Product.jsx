export default function Product({ title, price, description, amount }) {
	return (
		<li>
			<div>
				<h1>{title}</h1>
			</div>
			<p>{description}</p>
			<div>
				<p>{price}</p>
				<button>Kup</button>
			</div>
			<p>{amount}</p>
		</li>
	)
}
