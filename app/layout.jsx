import './globals.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
/* import {Roboto} from 'next/font/google'

const roboto = Roboto({
	weight: ['300', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
}) */

export const metadata = {
	title: 'Kapelu',
	description: 'e-Comerce de Pastas Frescas',
    manifest: '/manifest',
	icons:{
        apple:'/icon.png'
    },
    themeColor:'#000000'
}

export default function RootLayout({children}) {
	return (
		<html lang='es'>
			<body suppressHydrationWarning={true}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
