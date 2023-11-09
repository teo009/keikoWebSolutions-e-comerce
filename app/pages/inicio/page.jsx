import Image from 'next/image'
import Link from 'next/link'
import './style.css'

export default function Inicio() {
	return (
		<article className='inicio-container'>
			<aside className='inicio-opacity'>
				<div className='inicio-content'>
					<h2 className='inicio-title'>Bienvenid@s</h2>
					<h3 className='inicio-subtitle'>Pastas Frescas</h3>
					<p className='text-service section-inicio'>
						Ofrecemos una experiencia gastronómica única.
					</p>
					<br />
					<Image
						className='inicio-logo'
						src='/assets/svg/kapelu.svg'
						alt='Picture of the author'
						width={250}
						height={250}
						quality={100}
						priority={true}
						as='image'
					/>
					<div className='section-inicio'>
						<p className='inicio-description'>
							Cada uno de nuestros platos está cocinado con amor y
							cuidado, como si estuvieran siendo preparados para
							nuestra propia familia.
						</p>
						<Link
							className='btn'
							href='#productos'
							target='_blank'
							rel='noopener noreferrer preload'
							as='#productos'
						>
							{' '}
							PRODUCTOS{' '}
						</Link>
						<br />
					</div>
				</div>
			</aside>
		</article>
	)
}
