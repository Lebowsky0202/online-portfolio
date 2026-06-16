import { Menu, SquareCode, X } from 'lucide-react'
import { useState } from 'react'
import { navItems } from '../../data/navItems'
import cls from './Header.module.css'

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const closeMenu = () => setIsMenuOpen(false)
	return (
		<header className={cls.siteHeader}>
			<nav className={`${cls.nav} container`} aria-label='Основная навигация'>
				<a className='brand' href='#home' onClick={closeMenu}>
					<SquareCode size={24} aria-hidden='true' />
					<span>Куат Сагатович</span>
				</a>

				<button
					className='nav__toggle'
					type='button'
					aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
					aria-expanded={isMenuOpen}
					onClick={() => setIsMenuOpen(value => !value)}
				>
					{isMenuOpen ? <X size={22} /> : <Menu size={22} />}
				</button>

				<div className={`nav__links ${isMenuOpen ? 'nav__links--open' : ''}`}>
					{navItems.map(item => (
						<a key={item.href} href={item.href} onClick={closeMenu}>
							{item.label}
						</a>
					))}
				</div>
			</nav>
		</header>
	)
}
