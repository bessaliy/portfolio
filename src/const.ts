export const LinkRoute = {
    Telegram: 'https://t.me/me_raccoon',
    LinkedIn: 'https://www.linkedin.com/in/bessaliy/',
    GitHub: 'https://github.com/bessaliy',
} as const;

export const AppRoute = {
    MainPage: '/',
    ProjectsList: '/projects',
    ProjectPage: '/project/:id',
    NotFound: '/404'
} as const;

export const projectCategoryName = {
    website: 'Website',
    'web-app': 'Web-app',
    spa: 'SPA',
    portfolio: 'Portfolio',
} as const;

export const projectDifficultyName = {
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
} as const;