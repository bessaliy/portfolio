import {Project} from './project_type';

const Projects: Project[] = [
    {
        id: 'sedona',
        title: 'Sedona',
        category: 'website',
        difficulty: 'beginner',
        shortDescription: 'My first frontend project built from Figma design',

        stack: ['HTML', 'CSS'],

        coverImage: '',
        galleryImages: ['',''],

        githubUrl: 'https://github.com/bessaliy/2650337-sedona-2',
        liveUrl: 'https://bessaliy.github.io/2650337-sedona-2/',

        featured: false,
        year: 2025,

        challenge: 'As my first frontend project, the biggest challenge was understanding how layouts are built and how different HTML and CSS concepts work together. ' +
            'I had to learn semantic markup, positioning, spacing, and how to turn a static design into a functional website.',

        about: 'Sedona was my first frontend project built from a provided Figma design.\n' +
            '\n' +
            'The goal was to learn the fundamentals of HTML and CSS and understand how a website is structured from the ground up.\n' +
            '\n' +
            'The project includes several pages, basic interactions, and a modal window.',

        whatIDid: [
            'Built a multi-page website from a Figma design',
            'Implemented semantic HTML structure',
            'Created layouts using CSS Flexbox and Grid',
            'Added navigation and modal interactions',
            'Organized project structure and assets'
        ],

        lessonLearned: 'This project showed me that frontend development is much more than writing HTML tags.\n' +
            '\n' +
            'It was the first time I transformed a design into a real website and learned how structure, layout, and visual details come together in the browser.',

        highlights: [
            'First frontend project',
            'Multi-page website',
            'Semantic HTML',
            'Figma to code',
            'CSS Flexbox and Grid'
        ],

        note: 'First time turning a design into code',

        status: 'completed',
    },
    {
        id: 'keksogram',
        title: 'Keksogram',
        category: 'web-app',
        difficulty: 'intermediate',
        shortDescription: 'Photo-sharing application with filters, uploads, and server data.',

        stack: ['HTML', 'CSS', 'JavaScript'],

        coverImage: '',
        galleryImages: ['',''],

        githubUrl: 'https://github.com/bessaliy/2650337-kekstagram-2',
        liveUrl: 'https://bessaliy.github.io/2650337-kekstagram-2/',

        featured: false,
        year: 2025,

        challenge: 'The biggest challenge was understanding how frontend applications communicate with a server. ' +
            'Working with asynchronous requests and keeping the interface synchronized with incoming data was completely new to me after building static websites.',

        about: 'Keksogram was my first JavaScript-focused project. Users can browse photos loaded from a server, upload their own images, apply effects, and leave comments. ' +
            'The project introduced me to interactive frontend development and working with external data.',

        whatIDid: [
            'Fetched and displayed data from a remote API',
            'Implemented photo sorting and filtering',
            'Created image upload functionality',
            'Added image effects and filter controls',
            'Built comment submission and form validation',
            'Integrated third-party libraries including Pristine'
        ],

        lessonLearned: 'This project taught me how frontend applications interact with APIs and user input. ' +
            'It was my first experience working with asynchronous data, form validation, and features that depended on server responses.',

        highlights: [
            'First API integration',
            'Image upload',
            'Photo filters',
            'Form validation',
            'Data filtering'
        ],

        note: 'Where JavaScript started making sense',

        status: 'completed',
    },
    {
        id: 'bigTrip',
        title: 'Big Trip',
        category: 'spa',
        difficulty: 'advanced',
        shortDescription: 'Single-page travel planner built with MVP architecture.',

        stack: ['HTML', 'CSS', 'JavaScript'],

        coverImage: '',
        galleryImages: ['',''],

        githubUrl: 'https://github.com/bessaliy/2650337-big-trip-2',
        liveUrl: 'https://htmlacademy-ecmascript.github.io/2650337-big-trip-2/17/',

        featured: true,
        year: 2025,

        challenge: 'The biggest challenge was understanding how different parts of an application communicate with each other.\n' +
            '\n' +
            'Unlike previous projects, Big Trip required working with application architecture, managing state, and keeping multiple UI components synchronized with server data.',

        about: 'Big Trip is a single-page travel planning application where users can build and manage their travel routes.\n' +
            '\n' +
            'The application allows creating, editing, filtering, and sorting trip events while automatically calculating the total route cost.\n' +
            '\n' +
            'This was my first experience working with application architecture and managing a project that felt closer to a real-world frontend application.',

        whatIDid: [
            'Managed application state and UI updates',
            'Built a single-page application using MVP architecture',
            'Implemented route creation and editing',
            'Added filtering and sorting functionality',
            'Integrated server-side data storage',
            'Worked with date pickers and third-party libraries'
        ],

        lessonLearned: 'This project taught me how larger frontend applications are structured.\n' +
            '\n' +
            'I learned how architectural patterns help organize code, separate responsibilities, and keep growing projects maintainable as new features are added.',

        highlights: [
            'SPA architecture',
            'MVP pattern',
            'State management',
            'API communication',
            'Dynamic event management'
        ],

        note: 'My first large-scale frontend application',

        status: 'completed',
    },
    {
        id: 'sixCities',
        title: 'Six Cities',
        category: 'spa',
        difficulty: 'advanced',
        shortDescription: 'Property booking application with maps, authentication, and state management.',

        stack: ['React', 'Redux', 'Jest', 'TypeScript'],

        coverImage: '',
        galleryImages: ['',''],

        githubUrl: 'https://github.com/bessaliy/2650337-six-cities-3',
        liveUrl: 'https://six-cities-vert-omega.vercel.app/',

        featured: true,
        year: 2026,

        challenge: 'The biggest challenge was understanding state management and how data flows through a React application.\n' +
            '\n' +
            'Working with Redux slices, asynchronous actions, and keeping different parts of the interface synchronized required a new way of thinking compared to previous projects.',

        about: 'Six Cities is a property booking application where users can browse accommodations, view detailed information, save favorites, and leave reviews.\n' +
            '\n' +
            'The project was built with React and TypeScript and introduced me to working with modern frontend tools such as Redux, React Router, and interactive maps.',

        whatIDid: [
            'Built a React application with TypeScript',
            'Implemented client-side routing with React Router',
            'Managed application state using Redux Toolkit',
            'Integrated interactive maps with Leaflet',
            'Added authentication and protected routes',
            'Implemented favorites and review functionality',
            'Worked with API requests and asynchronous actions'
        ],

        lessonLearned: 'This project helped me understand how modern React applications are structured.\n' +
            '\n' +
            'I learned how state management, routing, API communication, and component architecture work together to create a scalable application. ' +
            'It was also my first experience working with TypeScript in a larger project.',

        highlights: [
            'React',
            'TypeScript',
            'Redux Toolkit',
            'React Router',
            'Leaflet Maps',
            'Authentication'
        ],

        note: 'My first application built with React and TypeScript',

        status: 'completed',
    },
    {
        id: 'escapeRoom',
        title: 'Escape Room',
        category: 'spa',
        difficulty: 'advanced',
        shortDescription: 'Quest booking platform with maps, filtering, and reservation management.',

        stack: ['React', 'Redux', 'TypeScript'],

        coverImage: '',
        galleryImages: ['',''],

        githubUrl: 'https://github.com/bessaliy/escape-room',
        liveUrl: 'https://escape-room-lovat.vercel.app/',

        featured: true,
        year: 2026,

        challenge: 'The biggest challenge was building the entire application independently within a limited timeframe.\n' +
            '\n' +
            'I also had to learn React Hook Form from scratch and integrate it into an existing React architecture while keeping the user experience smooth and intuitive.',

        about: 'Escape Room is a quest booking application where users can browse available quests, filter them by genre and difficulty, view detailed information, and make reservations.\n' +
            '\n' +
            'The project was developed independently as a final assessment and brought together everything I had learned throughout the course.',

        whatIDid: [
            'Built a React application with TypeScript',
            'Implemented quest filtering and sorting',
            'Integrated interactive maps with Leaflet',
            'Created a booking system with form validation',
            'Implemented API communication and data fetching',
            'Worked with Redux Toolkit for state management',
            'Integrated React Hook Form'
        ],

        lessonLearned: 'This project showed me how much I had learned throughout the course.\n' +
            '\n' +
            'For the first time, I was responsible for making all architectural decisions, choosing implementation approaches, ' +
            'and solving problems without any guidance. It helped me become more confident in navigating unfamiliar tools and building complete applications independently.',

        highlights: [
            'Built independently',
            'Completed in 5 days',
            'Interactive Maps',
            'React Hook Form',
            'Booking System'
        ],

        note: 'The project that proved I could do it on my own',

        status: 'completed',
    },
    {
        id: 'portfolio',
        title: 'My Portfolio',
        category: 'portfolio',
        difficulty: 'advanced',
        shortDescription: 'A personal portfolio website designed to showcase my projects, skills, and growth as a frontend developer.',

        stack: ['React', 'Next.js', 'Figma', 'CSS', 'TypeScript'],

        coverImage: '',
        galleryImages: ['',''],

        githubUrl: '',
        liveUrl: '',

        featured: true,
        year: 2026,

        challenge: 'How do I design and build a portfolio that reflects both my work and the way I think?',

        about: 'Unlike my previous projects, there was no predefined design, roadmap, or specification. ' +
            'Every decision had to be made from scratch, from the visual identity and content structure to the technical implementation.',

        whatIDid: [
            'Designed the entire website structure and user experience',
            'Created wireframes and UI concepts in Figma',
            'Built the application with React and TypeScript',
            'Structured project case studies and content',
            'Developed reusable UI components',
            'Used AI-assisted workflows for research and implementation'
        ],

        lessonLearned: 'This project taught me that building a product from scratch is very different from implementing an existing specification.\n' +
            '\n' +
            'A large part of the work happened before writing any code: defining the structure, refining ideas, prioritizing features, and deciding how to present both myself and my projects in a meaningful way.',

        highlights: [
            'Designed from scratch',
            'Personal branding',
            'UX/UI design',
            'Case study system',
            'AI-assisted workflow'
        ],

        note: 'Building my own corner of the internet',

        status: 'in-progress',
    },
];
