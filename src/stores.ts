import { writable } from "svelte/store";

type SupportedLanguage = "en" | "fr"; 

export const langStore = writable<SupportedLanguage>("en");