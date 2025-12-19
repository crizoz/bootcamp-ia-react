import { Zap } from 'lucide-react';

/**
 * slidesModule3
 *
 * Data definition for Module 3 slides: "Evaluation and Design".
 * This file represents the content layer for the Slide Engine,
 * defining slide structure and data without any rendering logic.
 *
 * The focus of this module is on:
 * - Evaluation through AI (quizzes, rubrics, self-assessment)
 * - Conceptual structuring (mind maps, design prompts)
 * - Visual reasoning and prototyping
 *
 * Each slide object must define:
 * - `id`: Unique slide identifier
 * - `layout`: Slide layout key consumed by the Slide Engine
 * - Layout-specific properties used by the corresponding component
 *
 * This separation allows content updates without touching
 * navigation, animations, or UI logic.
 */
export const slidesModule3 = [
    {
        id: 'cover',
        layout: 'hero-slide',
        title: 'EVALUACIÓN Y DISEÑO',
        subtitle: 'INTELIGENCIA VISUAL Y DINÁMICA',
        tagline: 'Deja de pedir respuestas. Empieza a pedir evaluaciones, estructuras y prototipos.',
        footer: 'MÓDULO 3 • INGENIERIA EN COMPUTACION E INFORMÁTICA'
    },
    {
        id: 'menti-challenge',
        layout: 'interactive-slide',
        title: 'RETO IMPOSIBLE',
        platform: 'Mentimeter',
        code: 'https://www.menti.com/alryr2f7y45q',
        question: 'VENCE A LA IA',
        subtext: 'Reto: "Genera la pregunta académica más difícil que puedas. Gemini debe resolverla."',
        icon: <Zap size={80} className="text-orange-500 md:w-20 md:h-20 w-16 h-16" />
    },
    {
        id: 'concept-inverse',
        layout: 'big-statement-slide',
        pretitle: 'CAMBIO DE PARADIGMA',
        title: 'LA INVERSIÓN',
        content: 'Hasta ahora, la IA te daba las respuestas. Hoy aprenderás a hacer que la IA te haga las preguntas.',
        highlight: 'MÉTODO SOCRÁTICO',
    },
    {
        id: 'quiz-demo',
        layout: 'quiz-simulation-slide',
        title: 'AUTO-EVALUACIÓN IA',
        subtitle: 'Convierte tus apuntes en simulacros de examen instantáneos.',
        prompt: 'Actúa como profesor experto. Crea una pregunta difícil sobre Redes Neuronales. Si fallo, explícame con una analogía.',
        quizData: {
            question: '¿Cuál es la función principal de una "Función de Activación" (ej: ReLU)?',
            options: [
                'Almacenar los datos de entrenamiento',
                'Introducir no-linealidad para aprender patrones complejos',
                'Conectar la red neuronal a internet',
                'Aumentar la velocidad del procesador físico'
            ],
            correctIndex: 1,
            explanation: '¡Exacto! Sin funciones de activación, una red neuronal sería matemática equivalente a una regresión lineal simple. La "no-linealidad" es lo que le permite entender el mundo real.'
        }
    },
    {
        id: 'mind-map-concept',
        layout: 'mind-map-slide',
        title: 'MAPAS MENTALES',
        subtitle: 'Gemini no solo lista conceptos, visualiza sus relaciones.',
        centerNode: 'Inteligencia Artificial',
        nodes: [
            { label: 'Machine Learning', sub: 'Aprendizaje de patrones', icon: 'Brain', pos: 'top-left' },
            { label: 'Computer Vision', sub: 'Análisis de imágenes', icon: 'Eye', pos: 'top-right' },
            { label: 'NLP', sub: 'Procesamiento del lenguaje natural', icon: 'MessageSquare', pos: 'bottom-left' },
            { label: 'Robótica', sub: 'Interacción con el mundo físico', icon: 'Bot', pos: 'bottom-right' },
        ],
        desc: 'Pídele a Gemini: "Genera una estructura de mapa mental sobre [Tema] y explícame la relación entre sus ramas".'
    },
    {
        id: 'rubric-concept',
        layout: 'rubric-simulation-slide',
        title: 'RÚBRICAS AUTOMÁTICAS',
        subtitle: 'Deja de pedir "correcciones". Empieza a pedir "auditorías".',
        promptFormula: [
            { label: 'ROL', text: 'Actúa como Profesor Senior de Ingeniería.' },
            { label: 'TAREA', text: 'Evalúa mi respuesta sobre "Ciclos Termodinámicos".' },
            { label: 'CRITERIOS', text: 'Califícame del 1.0 al 7.0 en: Precisión Técnica, Claridad y Uso de Ejemplos.' }
        ],
        simulation: [
            { criteria: 'Precisión Técnica', score: 6.5, max: 7, color: 'bg-emerald-500', feedback: 'Conceptos sólidos, pequeña imprecisión en entropía.' },
            { criteria: 'Claridad', score: 7.0, max: 7, color: 'bg-blue-500', feedback: 'Estructura perfecta y lenguaje técnico adecuado.' },
            { criteria: 'Uso de Ejemplos', score: 4.0, max: 7, color: 'bg-orange-500', feedback: 'Faltó aplicar el concepto a un motor real.' }
        ]
    },
    {
        id: 'image-gen-demo',
        layout: 'design-prompt-slide',
        title: 'VISUALIZACIÓN DE CONCEPTOS',
        subtitle: 'Si no puedes imaginarlo, pídele a la IA que lo dibuje.',
        prompt: 'Crea una ilustración isométrica 3D despiezada de una CPU moderna mostrando los núcleos, la caché y los buses de datos. Estilo: Cyberpunk técnico, iluminación neón azul y naranja.',
        placeholderText: 'RENDERIZANDO ARQUITECTURA...'
    },
    {
        id: 'activity-day3',
        layout: 'checklist-slide',
        title: 'MISIÓN DE HOY',
        subtitle: 'Elige un tema de tu preferencia. Ejecuta el protocolo de Evaluación y Diseño:',
        tasks: [
            {
                title: 'El Examen Imposible',
                tool: 'Gemini',
                desc: 'Pide: "Hazme 3 preguntas de selección múltiple nivel experto sobre [TU TEMA] y explica mis errores".'
            },
            {
                title: 'Arquitectura de Ideas',
                tool: 'Gemini',
                desc: 'Pide: "Crea una estructura jerárquica de conceptos clave para un mapa mental sobre [TU TEMA]".'
            },
            {
                title: 'Simula el Pitch',
                tool: 'Visual',
                desc: 'Genera: "Diagrama isométrico despiezado de [CONCEPTO], estilo técnico, iluminación neón".'
            }
        ]
    },
    {
        id: 'final-quiz',
        layout: 'module-final-quiz',
        title: 'AUDITORÍA VISUAL',
        subtitle: '¿Dominas el arte de la evaluación y el diseño con IA?',
        questions: [
            {
                question: 'En el paradigma de "La Inversión", ¿cuál es el principal beneficio de pedirle a la IA que te examine a ti?',
                options: [
                    'Ahorrar tiempo de lectura',
                    'Practicar "Active Recall" (Recuerdo Activo)',
                    'Entrenar a la IA para que sea más lista',
                    'Generar resúmenes automáticos'
                ],
                correctIndex: 1,
                explanation: '¡Correcto! Forzar a tu cerebro a recuperar la información (Active Recall) crea conexiones neuronales mucho más fuertes que leer pasivamente.',
                errorExplanation: 'Incorrecto. El objetivo no es ahorrar tiempo ni entrenar a la IA, sino forzar a tu cerebro a trabajar para retener la información.'
            },
            {
                question: 'Quieres mejorar un informe técnico. ¿Cuál es el prompt más efectivo para obtener feedback real?',
                options: [
                    '¿Está bien escrito este texto?',
                    'Mejora la redacción para que suene profesional',
                    'Actúa como Profesor Senior y evalúa esto con una rúbrica de criterios técnicos',
                    'Reescribe esto con palabras más complejas'
                ],
                correctIndex: 2,
                explanation: 'Exacto. Definir un ROL (Profesor) y un instrumento de evaluación (Rúbrica) transforma una corrección vaga en una auditoría de calidad.',
                errorExplanation: 'No es lo ideal. Pedir "mejorar" o "arreglar" suele resultar en cambios de estilo subjetivos sin explicar el "por qué" de los errores técnicos.'
            },
            {
                question: 'Al usar IA para generar estructuras de Mapas Mentales, ¿qué valor clave buscamos obtener sobre el texto plano?',
                options: [
                    'Que se vea más bonito en la presentación',
                    'Visualizar las relaciones y jerarquías entre conceptos',
                    'Reducir la cantidad de palabras',
                    'Generar imágenes artísticas abstractas'
                ],
                correctIndex: 1,
                explanation: 'Bien. El poder del pensamiento visual y los mapas mentales radica en entender cómo se conectan las ideas (relaciones), no solo definirlas.',
                errorExplanation: 'Falso. Aunque se vea mejor, el valor pedagógico real es entender la estructura y la jerarquía de la información.'
            }
        ],
        theme: 'orange',
        footer: 'MÓDULO 3 // CONTROL DE CALIDAD (QA)'
    },
    {
        id: 'closing',
        layout: 'hero-slide',
        title: 'MÓDULO 4:',
        subtitle: 'ÉTICA Y PROYECTO FINAL',
        tagline: 'El último paso antes de graduarte del Bootcamp.',
        footer: 'PRÓXIMAMENTE',
        nextLink: '/curso-ia/modulo4',
        nextTitle: 'FINALIZAR',
        downloadLink: '/curso-ia/papers/modulo3.pdf'
    }
];