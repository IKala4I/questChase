export interface User {
    name: string;
    username: string;
    avatar: string;
}

export interface Quest {
    title: string;
    description: string;
    image: string;
}

export interface Summary {
    totalPoints: number;
    totalRewards: string;
    totalQuests: number;
}

export interface Achievement {
    title: string;
    icon: string;
    description: string;
}

export interface ProfileData {
    user: User;
    completedQuests: Quest[];
    summary: Summary;
    achievements: Achievement[];
}
