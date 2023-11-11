import Image from 'next/image'
import Link from 'next/link'
import './style.css'

export default function Inicio() {
	return (
		<article className='inicio'>
			<aside className='container section '>
				<div className='inicio-content section full-lg-screen'>
					<h2 className='inicio-title'>Bienvenid@s</h2>
					<h3 className='inicio-subtitle'>Pastas Frescas</h3>
					<p className='text'>
						Ofrecemos una experiencia gastronómica única.
					</p>
					<br />
					<Image
						className='inicio-logo'
						src='/images/kapelu.svg'
						alt='Picture of the author'
						width={250}
						height={250}
						quality={100}
						priority={true}
						as='image'
					/>
					<div className='text'>
						<p>
							Cada uno de nuestros platos está cocinado con amor y
							cuidado, como si estuvieran siendo preparados para
							nuestra propia familia.
						</p>
						<Link
							className='btn'
							href='#productos'/* 
							target='_blank'
							rel='noopener noreferrer preload' */
							as='#productos'
						>
							PRODUCTOS
						</Link>
						<br />
					</div>
				</div>
			</aside>
		</article>
	)
}
