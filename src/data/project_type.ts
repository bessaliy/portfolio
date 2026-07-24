export type Project = {
    id: string;
    title: string;
    category: 'website' | 'web-app' | 'spa' | 'portfolio';
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    shortDescription: string;

    stack: string[];

    coverImage: string;
    galleryImages: string[];

    githubUrl: string;
    liveUrl: string;

    featured: boolean;
    year: number;

    challenge: string;
    about: string;
    whatIDid: string[];
    lessonLearned: string;
    highlights: string[];
    note: string;

    status: 'completed' | 'in-progress';
};
