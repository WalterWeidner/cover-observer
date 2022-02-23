export type Side = 'bottom' | 'left' | 'right' | 'top';

export type Edge = {
	coordinates: [number, number],
	side: Side,
}

export interface CoverEntry {
	covered: boolean;
}

export type CoverObserverCallback = (elementCover: CoverEntry) => void;
export interface CoverObserverOptions {
	element: HTMLElement;
}

export interface Observer {
	disconnect(): void;
	observe(element: HTMLElement): void;
	unobserve(element: HTMLElement): void;
}
