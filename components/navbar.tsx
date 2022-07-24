import Image from "next/image"
import Link from "next/link"

const NavLinks = [
	['About', '/about'],
	['Work', '/work'],
	['Blog', '/blog']
]

const Navbar = () => {
	return (
		<nav className="w-full shadow-lg p-3 xl:px-0">
			<ul className="container max-w-5xl mx-auto flex">
				<li className="hover:text-yellow-500 px-3 py-2 mr-auto pl-0" key="0">
					<Link href="/">
						<a>CF</a>
					</Link>
				</li>
				<div className="hidden md:flex">
					{NavLinks.map(([title, url, idx]) => {
						return(
							<li className="hover:text-yellow-500 px-3 py-2 last:pr-0" key={idx}>
								<Link href={url}>
									<a>{title}</a>
								</Link>
							</li>
						)
					})}
				</div>
				<div className="flex md:hidden">
					<li className="hover:text-yellow-500 px-3 py-2">
						<Image
							width="10px"
							height="10px"
							src="/public/circle-menu.svg"
							alt="Circle Menu Icon" 
						/>
					</li>
				</div>
			</ul>
		</nav>
	)
}

export default Navbar