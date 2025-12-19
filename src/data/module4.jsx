import { AlertTriangle, Download } from 'lucide-react';

/**
 * slidesModule4
 *
 * Data definition for Module 4 slides: "Ethics, Integration and Final Project".
 * This file represents the final content layer of the Bootcamp IA Slide Engine.
 *
 * This module focuses on:
 * - Ethical use of AI and hallucination awareness
 * - Quality control and evaluation criteria
 * - Full integration of all concepts into a final project
 * - Long-term persistence and deployment of AI assistants
 *
 * Each slide object defines:
 * - `id`: Unique slide identifier
 * - `layout`: Layout key consumed by the Slide Engine
 * - Layout-specific properties required by the renderer
 *
 * This structure keeps content fully decoupled from
 * navigation, animations, and UI logic.
 */
export const slidesModule4 = [
    {
        id: 'cover',
        layout: 'hero-slide',
        title: 'LA ENTREGA FINAL',
        subtitle: 'ÉTICA, INTEGRACIÓN Y FUTURO',
        tagline: 'En este módulo tu Asistente Académico cobra vida completa y demuestra su valor.',
        footer: 'MÓDULO 4 • INGENIERIA EN COMPUTACION E INFORMÁTICA'
    },
    {
        id: 'intro-ethics',
        layout: 'big-statement-slide',
        pretitle: 'SYSTEM_WARNING: CRITICAL_THINKING',
        title: 'EL PELIGRO',
        content: 'La IA es un copiloto increíble, pero un piloto mentiroso.',
        highlight: 'ALUCINACIONES Y ÉTICA',
    },
    {
        id: 'hallucination-demo',
        layout: 'error-analysis-slide',
        title: 'DETECTA LA ALUCINACIÓN',
        subtitle: '¿Por qué fallan los modelos? Encuentra el error en esta respuesta.',
        aiText: '"La Batalla de Rancagua ocurrió el 1 y 2 de octubre de 1814, donde las tropas realistas derrotaron a los patriotas liderados por Arturo Prat."',
        correction: '¡ERROR! Arturo Prat no nació hasta 1848. El líder fue Bernardo O\'Higgins. La IA mezcló dos héroes patrios por contexto histórico similar.',
        icon: <AlertTriangle size={40} />
    },
    {
        id: 'ethics-core',
        layout: 'ethics-accordion-slide',
        title: 'LOS 3 MANDAMIENTOS',
        subtitle: 'El código de honor para usar IA sin destruir tu carrera.',
        principles: [
            {
                id: 'integrity',
                icon: 'ShieldAlert',
                title: 'INTEGRIDAD ACADÉMICA',
                headline: 'La IA no eres tú.',
                desc: 'Copiar y pegar texto generado es PLAGIO. La IA es una herramienta de generación de borradores, no el autor final. Cita siempre el uso de herramientas.',
                color: 'from-red-500 to-rose-600',
                textColor: 'text-red-400'
            },
            {
                id: 'truth',
                icon: 'SearchCheck',
                title: 'VERIFICACIÓN DE DATOS',
                headline: 'La IA miente con confianza.',
                desc: 'Se llama "Alucinación". Los modelos inventan fechas, leyes y citas bibliográficas. Si no lo verificas, fallarás.',
                color: 'from-amber-500 to-orange-600',
                textColor: 'text-amber-400'
            },
            {
                id: 'reasoning',
                icon: 'BrainCircuit',
                title: 'SOBERANÍA COGNITIVA',
                headline: 'Copiloto, no Piloto.',
                desc: 'Si la IA piensa por ti, tu cerebro se atrofia. Úsala para desbloquear ideas o criticar tu trabajo, nunca para saltarte el razonamiento.',
                color: 'from-blue-500 to-indigo-600',
                textColor: 'text-blue-400'
            }
        ]
    },
    {
        id: 'quality-criteria',
        layout: 'rubric-grid-slide',
        title: 'QA: CONTROL DE CALIDAD',
        subtitle: 'Tu asistente debe pasar estas 4 pruebas de estrés:',
        items: [
            {
                title: 'IDENTIDAD SÓLIDA',
                icon: 'Fingerprint',
                desc: '¿Tiene un "System Prompt" claro? No queremos un robot genérico; queremos un experto con personalidad definida.'
            },
            {
                title: 'PRECISIÓN TÉCNICA',
                icon: 'Target',
                desc: '¿Alucina? Verifica que las fórmulas, fechas y definiciones sean exactas. Cero tolerancia al error factual.'
            },
            {
                title: 'UTILIDAD PRÁCTICA',
                icon: 'Zap',
                desc: '¿Resuelve problemas reales? Si solo define conceptos teóricos sin ejemplos aplicados, no sirve para ingeniería.'
            },
            {
                title: 'CREATIVIDAD',
                icon: 'Lightbulb',
                desc: '¿Sorprende? Uso de formatos novedosos (tablas, código, diagramas ASCII) en lugar de texto plano.'
            }
        ]
    },
    {
        id: 'integration-intro',
        layout: 'hero-slide',
        title: 'EL PROYECTO FINAL',
        subtitle: 'INTEGRACIÓN TOTAL',
        tagline: 'Es hora de unir todas las piezas que construimos durante el curso.',
        footer: 'ENSAMBLAJE DEL PORTAFOLIO'
    },
    {
        id: 'project-stack',
        layout: 'project-stack-slide',
        title: 'ARQUITECTURA FULL STACK',
        subtitle: 'Tu Proyecto Final debe integrar estas 4 capas de procesamiento:',
        layers: [
            {
                id: 'ui',
                name: 'LAYER 4: VISUALIZACIÓN (UI)',
                desc: 'Output Gráfico: Mapas Mentales Vivos y Diagramas Técnicos Despiezados.',
                icon: 'Eye',
                color: 'from-emerald-400 to-teal-600',
                tech: 'Render Engine'
            },
            {
                id: 'qa',
                name: 'LAYER 3: EVALUACIÓN (QA)',
                desc: 'Control de Calidad: Quizzes Dinámicos con Feedback y Rúbricas Automáticas.',
                icon: 'ShieldCheck',
                color: 'from-teal-400 to-cyan-600',
                tech: 'Logic Core'
            },
            {
                id: 'data',
                name: 'LAYER 2: CONTENIDO (DATA)',
                desc: 'Procesamiento: Explicaciones tipo Feynman y Tablas Comparativas Estructuradas.',
                icon: 'Database',
                color: 'from-cyan-400 to-blue-600',
                tech: 'Processing Unit'
            },
            {
                id: 'kernel',
                name: 'LAYER 1: IDENTIDAD (KERNEL)',
                desc: 'Base del Sistema: Prompt Maestro con Rol de Experto, Tono y Restricciones.',
                icon: 'Cpu',
                color: 'from-blue-500 to-indigo-700',
                tech: 'System Prompt'
            }
        ]
    },
    {
        id: 'presentation-tips',
        layout: 'deployment-checklist-slide',
        title: 'PROTOCOL: DEPLOYMENT',
        subtitle: 'Para que tu Asistente sea eterno, debes persistir estos 4 activos:',
        steps: [
            {
                label: 'SOURCE CODE (PROMPT)',
                desc: 'Guarda el Prompt Maestro en un .txt o Notion. Sin esto, tu asistente muere.',
                icon: 'FileCode'
            },
            {
                label: 'EXECUTION LOGS (CHATS)',
                desc: 'Exporta tus mejores conversaciones a PDF. Es la evidencia de que funciona.',
                icon: 'History'
            },
            {
                label: 'VISUAL OUTPUT (DIAGRAMAS)',
                desc: 'Guarda los esquemas técnicos generados. Son la evidencia visual de tu proyecto.',
                icon: 'Image'
            },
            {
                label: 'REPO (CARPETA FINAL)',
                desc: 'Centraliza todo en una carpeta llamada "AI_Assistant_v1.0".',
                icon: 'FolderArchive'
            }
        ]
    },
    {
        id: 'activity-final',
        layout: 'big-statement-slide',
        pretitle: 'MODE: FINAL_RENDERING',
        title: 'MANOS A LA OBRA',
        content: 'Ensambla tu documento, pule tu prompt y compila todo.',
        highlight: 'A tu propio ritmo',
    },
    {
        id: 'final-checklist',
        layout: 'final-checklist-slide',
        title: 'CHECKLIST DE DESPEGUE',
        subtitle: 'Verificación final de sistemas antes de operar:',
        levels: [
            { name: 'SISTEMA 1: KERNEL (Identidad)', desc: '¿El asistente sabe quién es y cómo debe hablar?', icon: 'Cpu' },
            { name: 'SISTEMA 2: DATA (Contenido)', desc: '¿Explica conceptos complejos con claridad?', icon: 'Database' },
            { name: 'SISTEMA 3: QA (Evaluación)', desc: '¿Es capaz de corregirte y crear exámenes?', icon: 'ShieldCheck' },
            { name: 'SISTEMA 4: UI (Visual)', desc: '¿Puede generar diagramas técnicos descriptivos?', icon: 'Eye' }
        ],
        usageTip: '>> INSTRUCCIÓN DE INICIO: Copia tu Prompt Maestro -> Abre Chat -> Pega -> "Hola, estoy listo para estudiar".'
    },
    {
        id: 'final-quiz',
        layout: 'module-final-quiz-slide',
        title: 'JUICIO FINAL',
        subtitle: 'DEMUESTRA QUE ERES EL PILOTO',

        questions: [
            {
                question: 'Módulo 1: Para definir la "personalidad" y el comportamiento base de tu Asistente, ¿qué componente es el más crítico?',
                options: [
                    'El saludo inicial',
                    'El System Prompt (Rol e Identidad)',
                    'La longitud del texto',
                    'El uso de emojis'
                ],
                correctIndex: 1,
                explanation: 'Correcto. El System Prompt es el "ADN" o la Cédula de Identidad de la IA. Sin un Rol definido, es solo un chatbot genérico.',
                errorExplanation: 'Incorrecto. El saludo es superficial. El comportamiento profundo se define instruyendo el ROL en el System Prompt.'
            },
            {
                question: 'Módulo 1: Si necesitas analizar un video en tiempo real o una imagen compleja, ¿a qué "Agente" deberías recurrir?',
                options: [
                    'ChatGPT (El Estratega)',
                    'Gemini (El Visionario)',
                    'Un modelo de Excel',
                    'Google Translate'
                ],
                correctIndex: 1,
                explanation: 'Exacto. Gemini es nativamente multimodal, lo que le permite "ver" y "escuchar" mejor que los modelos basados puramente en texto/lógica.',
                errorExplanation: 'No. ChatGPT es excelente en lógica y estructura, pero Gemini tiene la ventaja nativa en procesamiento multimodal (video/imagen).'
            },
            {
                question: 'Módulo 2: Según la Técnica Feynman, ¿cuál es la prueba definitiva de que realmente entiendes un concepto?',
                options: [
                    'Poder explicárselo a un niño de 6 años (simplificación)',
                    'Memorizar la definición de Wikipedia',
                    'Usar palabras técnicas rimbombantes',
                    'Hacer un resumen de 10 páginas'
                ],
                correctIndex: 0,
                explanation: 'Bien. La complejidad suele disfrazar la falta de entendimiento. Si no puedes hacerlo simple, no lo entiendes.',
                errorExplanation: 'Falso. Memorizar o usar jerga compleja es "ilusión de competencia". La verdadera maestría está en la simplicidad.'
            },
            {
                question: 'Módulo 3: ¿En qué consiste la técnica de "La Inversión" para estudiar?',
                options: [
                    'Leer el libro al revés',
                    'Pedirle a la IA que te haga las preguntas a ti (Socrático)',
                    'Preguntar siempre "por qué"',
                    'Escribir en blanco sobre negro'
                ],
                correctIndex: 1,
                explanation: 'Correcto. Dejar de pedir respuestas y empezar a pedir evaluaciones fuerza a tu cerebro a trabajar (Active Recall).',
                errorExplanation: 'Incorrecto. La Inversión se refiere a invertir los roles: Tú eres el alumno examinado, la IA es el profesor evaluador.'
            },
            {
                question: 'Módulo 4: ¿Por qué llamamos a la IA un "Piloto Mentiroso" o propenso a alucinaciones?',
                options: [
                    'Porque tiene intenciones malvadas',
                    'Porque predice palabras por probabilidad, no por verdad',
                    'Porque saca información de sitios de bromas',
                    'Porque quiere confundir a los estudiantes'
                ],
                correctIndex: 1,
                explanation: 'Exacto. El modelo no "sabe" hechos, solo completa patrones estadísticos. Te mentirá con total confianza si la probabilidad matemática lo sugiere.',
                errorExplanation: 'Falso. La IA no tiene intenciones ni sentimientos. Su error es puramente probabilístico/estadístico.'
            },
            {
                question: 'Módulo 4: Tu asistente genera un párrafo excelente con una cita bibliográfica. ¿Qué debes hacer?',
                options: [
                    'Copiar y pegar, la IA es autora legal',
                    'Verificar la cita real y reescribir con tus palabras',
                    'Confiar ciegamente porque suena técnico',
                    'Descartarlo por miedo'
                ],
                correctIndex: 1,
                explanation: 'Vital. Integridad ante todo: Verifica (porque inventan citas) y Reescribe (para mantener tu autoría y estilo).',
                errorExplanation: 'Error grave. Copiar textual es plagio y las citas generadas suelen ser falsas (alucinaciones).'
            },
            {
                question: 'FINAL: El curso termina hoy. ¿Qué archivo debes guardar para que tu Asistente "sobreviva" y te ayude en el futuro?',
                options: [
                    'El historial de chat en PDF',
                    'El Prompt Maestro (.txt / Notion)',
                    'Una captura de pantalla',
                    'Tu contraseña de Google'
                ],
                correctIndex: 1,
                explanation: '¡Misión Cumplida! El Prompt Maestro es el código fuente de tu asistente. Guárdalo, mejóralo y úsalo en tu carrera.',
                errorExplanation: 'Insuficiente. El historial es solo el pasado. El Prompt Maestro es la "semilla" para generar futuros chats con la misma inteligencia.'
            }
        ],
        theme: 'amber',
        footer: 'MÓDULO 4 // PROTOCOLO DE CIERRE'
    },
    {
        id: 'closing-reflection',
        layout: 'grand-finale-slide',
        nextLink: '/',
        nextTitle: 'VOLVER AL INICIO',
        downloadLink: '/curso-ia/papers/modulo4.pdf'
    }
];