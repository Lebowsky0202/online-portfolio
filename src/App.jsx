import {
	ArrowUpRight,
	BriefcaseBusiness,
	CheckCircle2,
	Code2,
	Send,
	Sparkles,
} from 'lucide-react'
import { Header } from './components/Header'
import { contactLinks } from './data/contactLinks'
import { metrics } from './data/metrics'
import { projects } from './data/projects'
import { qualities } from './data/qualities'
import { services } from './data/services'
import { stack } from './data/stack'

function App() {
	return (
		<>
			<Header />
			<main id='main'>
				<section className='hero' id='home' aria-labelledby='hero-title'>
					<img
						className='hero__image'
						src='/images/frontend-workspace-hero.png'
						alt='Рабочее место frontend-разработчика с ноутбуком, макетами интерфейсов и дизайн-системой'
					/>
					<div className='hero__overlay' />
					<div className='hero__content container'>
						<p className='eyebrow'>
							<Sparkles size={18} aria-hidden='true' />
							Frontend React Developer
						</p>
						<h1 id='hero-title'>Куат Сагатович</h1>
						<p className='hero__role'>
							HTML, CSS, JavaScript, React, TypeScript
						</p>
						<p className='hero__lead'>
							Создаю адаптивные интерфейсы на React: чистая верстка, понятные
							компоненты, аккуратная UI-логика и внимание к тому, как сайт
							ощущается на реальных устройствах.
						</p>

						<div className='hero__actions' aria-label='Основные действия'>
							<a className='button button--primary' href='#projects'>
								<BriefcaseBusiness size={19} aria-hidden='true' />
								Проекты
							</a>
							<a className='button button--ghost' href='#contact'>
								<Send size={19} aria-hidden='true' />
								Связаться
							</a>
						</div>

						<dl className='hero__metrics' aria-label='Ключевые показатели'>
							{metrics.map(metric => (
								<div key={metric.label} className='metric'>
									<dt>{metric.value}</dt>
									<dd>{metric.label}</dd>
								</div>
							))}
						</dl>
					</div>
				</section>

				<section
					className='section intro-section'
					aria-labelledby='intro-title'
				>
					<div className='container intro'>
						<div>
							<p className='section-kicker'>Обо мне</p>
							<h2 id='intro-title'>
								Разрабатываю интерфейсы, в которых порядок виден сразу
							</h2>
						</div>
						<p className='intro__text'>
							Мой фокус как React frontend разработчика — собрать страницу так,
							чтобы она быстро загружалась, хорошо выглядела на телефоне и
							компьютере, а код оставался понятным после первых правок.
						</p>
					</div>

					<div className='container service-grid'>
						{services.map(service => {
							const Icon = service.icon

							return (
								<article className='service-card' key={service.title}>
									<Icon size={28} aria-hidden='true' />
									<h3>{service.title}</h3>
									<p>{service.text}</p>
								</article>
							)
						})}
					</div>
				</section>

				<section
					className='section section--dark'
					id='projects'
					aria-labelledby='projects-title'
				>
					<div className='container section-heading'>
						<div>
							<p className='section-kicker section-kicker--dark'>
								Selected work
							</p>
							<h2 id='projects-title'>Проекты и направления практики</h2>
						</div>
						<a className='text-link text-link--dark' href='#contact'>
							Обсудить проект
							<ArrowUpRight size={18} aria-hidden='true' />
						</a>
					</div>

					<div className='container project-grid'>
						{projects.map(project => (
							<article
								className={`project-card project-card--${project.accent}`}
								key={project.title}
							>
								<div className='project-card__top'>
									<span>{project.category}</span>
									<ArrowUpRight size={20} aria-hidden='true' />
								</div>
								<h3>{project.title}</h3>
								<p>{project.summary}</p>
								<div className='project-card__result'>
									<CheckCircle2 size={20} aria-hidden='true' />
									<span>{project.result}</span>
								</div>
							</article>
						))}
					</div>
				</section>

				<section
					className='section stack-section'
					id='stack'
					aria-labelledby='stack-title'
				>
					<div className='container stack-layout'>
						<div className='stack-copy'>
							<p className='section-kicker'>Технологии</p>
							<h2 id='stack-title'>Мой основной стек</h2>
							<p>
								Использую базу frontend-разработки и React-экосистему, чтобы
								собирать интерфейсы из понятных компонентов, поддерживать
								типизацию и быстро менять визуальные блоки.
							</p>
						</div>

						<div className='stack-list' aria-label='Технологический стек'>
							{stack.map(item => (
								<span key={item}>
									<Code2 size={18} aria-hidden='true' />
									{item}
								</span>
							))}
						</div>
					</div>
				</section>

				<section
					className='section approach-section'
					id='qualities'
					aria-labelledby='qualities-title'
				>
					<div className='container section-heading'>
						<div>
							<p className='section-kicker'>Качества</p>
							<h2 id='qualities-title'>
								Что важно для React frontend разработчика
							</h2>
						</div>
					</div>

					<div className='container approach-grid'>
						{qualities.map((item, index) => {
							const Icon = item.icon

							return (
								<article className='approach-card' key={item.title}>
									<span className='approach-card__number'>
										{String(index + 1).padStart(2, '0')}
									</span>
									<Icon size={28} aria-hidden='true' />
									<h3>{item.title}</h3>
									<p>{item.text}</p>
								</article>
							)
						})}
					</div>
				</section>

				<section
					className='contact-section'
					id='contact'
					aria-labelledby='contact-title'
				>
					<div className='container contact'>
						<div>
							<p className='section-kicker section-kicker--dark'>Contact</p>
							<h2 id='contact-title'>
								Готов развивать портфолио и реальные проекты
							</h2>
							<p>
								Можно начать с лендинга, учебного проекта, React-приложения,
								редизайна страницы или аккуратной упаковки кейсов в портфолио.
							</p>
						</div>

						<div className='contact__actions' aria-label='Контактные ссылки'>
							{contactLinks.map(link => {
								const Icon = link.icon

								return (
									<a
										className='button button--light'
										href={link.href}
										key={link.label}
									>
										<Icon size={19} aria-hidden='true' />
										{link.label}
									</a>
								)
							})}
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default App
