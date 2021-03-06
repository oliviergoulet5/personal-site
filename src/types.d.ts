export type EventType = "education" | "career" | "job" | "project" | "activity"

export interface Event {
    date: string; // ex: May 2022
    type: EventType
    title: string;
    id: string;
    imageSrc?: string;
    defaultEnabled?: boolean;
}

export interface Filter {
    name: string;
    id: string;
    defaultEnabled: boolean;
}