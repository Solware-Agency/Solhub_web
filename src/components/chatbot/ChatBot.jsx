import React, { useState, useEffect, useRef } from 'react'
import { X, Send } from 'lucide-react'
import { FaEnvelope, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'
import RobotTraking from './RobotTraking'

// Definimos las respuestas del bot en español
const botResponses = {
	initial: {
		text: '¡Hola! 👋 Soy Solwy, tu asistente virtual de SolHub.\n\nSolHub es una plataforma SaaS diseñada para laboratorios médicos en Venezuela. Transformamos el diagnóstico médico con IA integrada, seguridad avanzada y gestión completa.\n\n¿En qué puedo ayudarte hoy?',
		options: [
			'Servicios',
			'Precios',
			'Proceso de trabajo',
			'Contacto',
		],
	},
	servicios: {
		text: '🔬 Nuestros Módulos Principales:\n\n• Gestión de Pacientes - Registro y seguimiento completo\n• Análisis con IA - Detección automática de anomalías\n• Reportes Automatizados - Generación inteligente de reportes\n• Gestión de Muestras - Tracking en tiempo real\n• Analytics Avanzado - Dashboards y métricas operativas\n• Seguridad de Datos - Encriptación end-to-end\n\n¿Te gustaría conocer más detalles de algún módulo específico o ver una demo?',
		options: [
			'Ver Demo',
			'Precios',
			'Contacto',
		],
	},
	precios: {
		text: '💰 Nuestros Planes:\n\nLos precios varían según los módulos que necesites. Ofrecemos:\n\n• Planes personalizables por módulo\n• Sin costos ocultos\n• Implementación guiada\n• Soporte 24/7 incluido\n\nPara una cotización personalizada, te recomiendo contactar a nuestro equipo. ¿Te gustaría que te conecte con ellos?',
		options: [
			'Contacto',
			'Ver Demo',
			'Servicios',
		],
	},
	proceso: {
		text: '⚙️ Nuestro Proceso de Implementación:\n\n1. Consulta inicial - Analizamos tus necesidades\n2. Configuración - Personalizamos SolHub para tu laboratorio\n3. Capacitación - Entrenamos a tu equipo\n4. Go-live - Activación con soporte completo\n5. Seguimiento - Acompañamiento continuo\n\nEl proceso completo puede tomar entre 2-4 semanas según los módulos seleccionados.\n\n¿Quieres agendar una consulta para conocer más?',
		options: [
			'Contacto',
			'Ver Demo',
			'Servicios',
		],
	},
	contacto: {
		text: '¡Perfecto! Puedes contactarnos a través de cualquiera de estos canales:\n\nEstamos disponibles 24/7 para ayudarte.',
		options: [
			{ text: 'Enviar email', icon: <FaEnvelope /> },
			{ text: 'Abrir WhatsApp', icon: <FaWhatsapp /> },
			{ text: 'Abrir Instagram', icon: <FaInstagram /> },
			{ text: 'Abrir LinkedIn', icon: <FaLinkedin /> },
		],
	},
}

const contactoDetails = [
	{ icon: <FaEnvelope />, text: 'contacto@solware.agency', link: 'mailto:contacto@solware.agency' },
	{
		icon: <FaWhatsapp />,
		text: '+58 412-9974533',
		link: 'https://api.whatsapp.com/send/?phone=584129974533&text=Hola%2C+me+gustar%C3%ADa+obtener+m%C3%A1s+informaci%C3%B3n+sobre+SolHub+y+c%C3%B3mo+puede+ayudar+a+transformar+mi+laboratorio+m%C3%A9dico+en+Venezuela.&type=phone_number&app_absent=0',
	},
	{ icon: <FaInstagram />, text: '@solware_', link: 'https://www.instagram.com/solware_?igsh=MTg4OTdwM3k3d2o4cA==' },
	{ icon: <FaLinkedin />, text: 'Agencia Solware', link: 'https://www.linkedin.com/company/agencia-solware/' },
]

const ChatBot = ({ isOpen, setIsOpen }) => {
	const [messages, setMessages] = useState([
		{
			id: 1,
			text: botResponses.initial.text,
			isBot: true,
			timestamp: new Date(),
			options: botResponses.initial.options,
		},
	])
	const [inputMessage, setInputMessage] = useState('')
	const messagesEndRef = useRef(null)
	const chatRef = useRef(null)

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}

	useEffect(() => {
		scrollToBottom()
	}, [messages])

	useEffect(() => {
		if (!isOpen) return

		const handleClickOutside = (event) => {
			if (chatRef.current && !chatRef.current.contains(event.target)) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isOpen, setIsOpen])

	const handleBotResponse = (userInput) => {
		const input = userInput.toLowerCase()
		let response

		// Detectar intención del usuario
		if (
			input.includes('servicio') ||
			input.includes('módulo') ||
			input.includes('modulo') ||
			input.includes('funcionalidad') ||
			input.includes('caracteristica') ||
			input.includes('característica') ||
			input.includes('que ofrece') ||
			input.includes('qué ofrece')
		) {
			response = {
				id: messages.length + 2,
				text: botResponses.servicios.text,
				isBot: true,
				timestamp: new Date(),
				options: botResponses.servicios.options,
			}
		} else if (
			input.includes('precio') ||
			input.includes('costo') ||
			input.includes('tarifa') ||
			input.includes('plan') ||
			input.includes('cotizacion') ||
			input.includes('cotización') ||
			input.includes('cuanto cuesta') ||
			input.includes('cuánto cuesta')
		) {
			response = {
				id: messages.length + 2,
				text: botResponses.precios.text,
				isBot: true,
				timestamp: new Date(),
				options: botResponses.precios.options,
			}
		} else if (
			input.includes('proceso') ||
			input.includes('implementacion') ||
			input.includes('implementación') ||
			input.includes('instalacion') ||
			input.includes('instalación') ||
			input.includes('como funciona') ||
			input.includes('cómo funciona') ||
			input.includes('tiempo') ||
			input.includes('duracion') ||
			input.includes('duración')
		) {
			response = {
				id: messages.length + 2,
				text: botResponses.proceso.text,
				isBot: true,
				timestamp: new Date(),
				options: botResponses.proceso.options,
			}
		} else if (
			input.includes('contacto') ||
			input.includes('contactar') ||
			input.includes('hablar') ||
			input.includes('comunicar') ||
			input.includes('escribir') ||
			input.includes('llamar')
		) {
			response = {
				id: messages.length + 2,
				text: botResponses.contacto.text,
				isBot: true,
				timestamp: new Date(),
				options: botResponses.contacto.options,
			}
		} else if (
			input.includes('demo') ||
			input.includes('demostracion') ||
			input.includes('demostración') ||
			input.includes('probar') ||
			input.includes('ver demo')
		) {
			// Redirigir a la página de demo
			window.location.href = '/demo-experience'
			return null
		} else {
			// Respuesta por defecto - mostrar opciones principales
			response = {
				id: messages.length + 2,
				text: 'Puedo ayudarte con información sobre nuestros servicios, precios, proceso de implementación o conectarte con nuestro equipo. ¿Qué te gustaría saber?',
				isBot: true,
				timestamp: new Date(),
				options: ['Servicios', 'Precios', 'Proceso de trabajo', 'Contacto'],
			}
		}

		return response
	}

	const handleSendMessage = async (e) => {
		e.preventDefault()
		if (!inputMessage.trim()) return

		// Mensaje del usuario
		const userMessage = {
			id: messages.length + 1,
			text: inputMessage,
			isBot: false,
			timestamp: new Date(),
		}

		setMessages((prev) => [...prev, userMessage])
		setInputMessage('')

		// Respuesta del bot
		setTimeout(() => {
			const botResponse = handleBotResponse(userMessage.text)
			if (botResponse) {
				setMessages((prev) => [...prev, botResponse])
			}
		}, 1000)
	}

	const handleOptionClick = (option) => {
		const optionText = typeof option === 'string' ? option : option.text

		// Manejar acciones directas (redirecciones)
		if (typeof option === 'object' && option.text === 'Enviar email') {
			window.open('mailto:contacto@solware.agency')
			return
		} else if (typeof option === 'object' && option.text === 'Abrir WhatsApp') {
			const message = encodeURIComponent('Hola, me gustaría obtener más información sobre SolHub y cómo puede ayudar a transformar mi laboratorio médico en Venezuela.')
			window.open(`https://wa.me/584129974533?text=${message}`, '_blank')
			return
		} else if (typeof option === 'object' && option.text === 'Abrir Instagram') {
			window.open('https://www.instagram.com/solware_?igsh=MTg4OTdwM3k3d2o4cA==', '_blank')
			return
		} else if (typeof option === 'object' && option.text === 'Abrir LinkedIn') {
			window.open('https://www.linkedin.com/company/agencia-solware/', '_blank')
			return
		} else if (optionText === 'Ver Demo') {
			window.location.href = '/demo-experience'
			return
		}

		// Simular que el usuario escribió la opción
		const userMessage = {
			id: messages.length + 1,
			text: optionText,
			isBot: false,
			timestamp: new Date(),
		}

		setMessages((prev) => [...prev, userMessage])

		// Respuesta del bot
		setTimeout(() => {
			let botResponse

			if (optionText === 'Servicios') {
				botResponse = {
					id: messages.length + 2,
					text: botResponses.servicios.text,
					isBot: true,
					timestamp: new Date(),
					options: botResponses.servicios.options,
				}
			} else if (optionText === 'Precios') {
				botResponse = {
					id: messages.length + 2,
					text: botResponses.precios.text,
					isBot: true,
					timestamp: new Date(),
					options: botResponses.precios.options,
				}
			} else if (optionText === 'Proceso de trabajo' || optionText === 'Proceso') {
				botResponse = {
					id: messages.length + 2,
					text: botResponses.proceso.text,
					isBot: true,
					timestamp: new Date(),
					options: botResponses.proceso.options,
				}
			} else if (optionText === 'Contacto') {
				botResponse = {
					id: messages.length + 2,
					text: botResponses.contacto.text,
					isBot: true,
					timestamp: new Date(),
					options: botResponses.contacto.options,
				}
			} else {
				// Fallback - mostrar opciones principales
				botResponse = {
					id: messages.length + 2,
					text: 'Puedo ayudarte con información sobre nuestros servicios, precios, proceso de implementación o conectarte con nuestro equipo. ¿Qué te gustaría saber?',
					isBot: true,
					timestamp: new Date(),
					options: ['Servicios', 'Precios', 'Proceso de trabajo', 'Contacto'],
				}
			}

			setMessages((prev) => [...prev, botResponse])
		}, 1000)
	}

	return (
		<>
			{/* Botón flotante del chat */}
			<button
				onClick={() => setIsOpen(true)}
				className={`p-2 pl-0 text-white rounded-full transition-all duration-300 ${isOpen ? 'hidden' : ''}`}
				title="Chatbot"
			>
				<RobotTraking className={'size-16 md:size-20'} />
			</button>

			{/* Ventana del chat */}
			<div
				className={`fixed bottom-0 right-0 z-[130] w-full sm:w-96 md:w-[420px] h-[550px] md:h-[600px] bg-background border border-border
          shadow-glass-strong
          transition-transform duration-300 transform 
          sm:rounded-t-2xl
          ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
				ref={chatRef}
			>
				{/* Header */}
				<div className="flex items-center justify-between p-2.5 bg-gradient-medical text-white sm:rounded-t-2xl shadow-lg">
					<div className="flex items-center">
						<RobotTraking className="size-9 md:size-10" />
						<h3 className="font-semibold ml-2 text-base md:text-lg">Solwy</h3>
					</div>
					<button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-full transition-colors">
						<X className="h-4 w-4" />
					</button>
				</div>

				{/* Messages Container */}
				<div className="flex-1 p-2.5 h-[calc(550px-5rem)] md:h-[calc(600px-5rem)] overflow-y-auto">
					<div className="space-y-4">
						{messages.map((message) => (
							<div key={message.id}>
								<div className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
									<div
										className={`max-w-[80%] p-2 rounded-lg ${
											message.isBot
												? 'bg-card/80 backdrop-blur-sm border border-border text-foreground'
												: 'bg-gradient-medical text-white shadow-lg'
										}`}
									>
										<p className="text-xs whitespace-pre-line" dangerouslySetInnerHTML={{ __html: message.text }}></p>
										{message.isBot && message.details && (
											<div className="mt-2">
												{contactoDetails.map((detail, index) => (
													<div key={index} className="text-sm">
														<span className="link">
															{detail.icon}{' '}
															<a href={detail.link} target="_blank" rel="noopener noreferrer">
																{detail.text}
															</a>
														</span>
													</div>
												))}
											</div>
										)}
										<span className="text-[10px] opacity-70 mt-0.5 block">
											{message.timestamp.toLocaleTimeString([], {
												hour: '2-digit',
												minute: '2-digit',
											})}
										</span>
									</div>
								</div>
								{message.isBot && message.options && (
									<div className="mt-2 flex flex-wrap gap-1.5">
										{message.options.map((option, index) => (
											<button
												key={index}
												onClick={() => handleOptionClick(option)}
												className="text-xs px-2 py-0.5 bg-primary/20 text-primary border border-primary/30
                          rounded-full hover:bg-primary/30 hover:border-primary/50 
                          transition-all duration-300"
											>
												{typeof option === 'string' ? (
													option
												) : (
													<span className="flex items-center gap-2">
														{option.icon} {option.text}
													</span>
												)}
											</button>
										))}
									</div>
								)}
							</div>
						))}
						<div ref={messagesEndRef} />
					</div>
				</div>

				{/* Input Form */}
				<form
					onSubmit={handleSendMessage}
					className="absolute bottom-0 left-0 right-0 p-2 bg-background border-t border-border"
				>
					<div className="flex items-center gap-1.5">
						<input
							type="text"
							value={inputMessage}
							onChange={(e) => setInputMessage(e.target.value)}
							placeholder="Escribe tu mensaje..."
							className="flex-1 p-1.5 text-xs border border-border rounded-lg bg-card/50 backdrop-blur-sm
                text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
						/>
						<button
							type="submit"
							className="p-1.5 bg-gradient-medical text-white rounded-lg hover:opacity-90 
                transition-all duration-300 shadow-lg hover:shadow-xl"
						>
							<Send className="h-4 w-4" />
						</button>
					</div>
				</form>
			</div>
		</>
	)
}

export default ChatBot


