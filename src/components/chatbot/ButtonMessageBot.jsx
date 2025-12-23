import { useEffect, useState } from 'react'
import ChatBot from './ChatBot'

function ButtonMessageBot() {
	const [showMessage, setShowMessage] = useState(true)
	const [isChatBotOpen, setIsChatBotOpen] = useState(false)
	
	useEffect(() => {
		let showTimeout
		let interval

		const startCycle = () => {
			setShowMessage(true)
			showTimeout = setTimeout(() => setShowMessage(false), 5000) // tiempo de espera para ocultar el mensaje
		}

		startCycle()
		interval = setInterval(startCycle, 10000) // tiempo que pasa el mensaje oculto antes de volver a aparecer

		return () => {
			clearTimeout(showTimeout)
			clearInterval(interval)
		}
	}, [])

	return (
		<>
			<style>{`
				@keyframes gentleFloat {
					0%, 100% {
						transform: translateY(0px);
					}
					50% {
						transform: translateY(-8px);
					}
				}
				@keyframes fadeInScale {
					from {
						opacity: 0;
						transform: translateY(0px) scale(0.95);
					}
					to {
						opacity: 1;
						transform: translateY(0px) scale(1);
					}
				}
				.message-bot-smooth {
					animation: gentleFloat 3s ease-in-out infinite, fadeInScale 0.5s ease-out forwards;
				}
			`}</style>
			<div className="fixed bottom-5 right-5 z-[130]">
				<div className="flex items-center gap-3">
					{showMessage && (
						<button
							onClick={() => setIsChatBotOpen(true)}
							className="message-bot-smooth flex items-center bg-gradient-medical/90 backdrop-blur-2xl px-4 py-2 rounded-full shadow-lg shadow-primary/30 transition-all duration-500 ease-in-out font-semibold text-white hidden md:flex relative"
						>
							<span className="text-xs md:text-sm">
								¿Tienes alguna pregunta?
							</span>
							{/* Globo de texto - flecha apuntando al robot */}
							<div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-primary border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
						</button>
					)}
					<ChatBot isOpen={isChatBotOpen} setIsOpen={setIsChatBotOpen} />
				</div>
			</div>
		</>
	)
}

export default ButtonMessageBot

