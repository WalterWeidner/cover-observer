import { getCoverEntry } from "./etc/get-cover-entry";
import { CoverObserverCallback, CoverObserverOptions, CoverEntry, Observer } from "./types";

const loop = (cb: (proceed: () => void) => void) => {
	window.requestAnimationFrame(() => cb(() => loop(cb)));
}

function isSameCover(a: CoverEntry, b: CoverEntry) {
	return (
		a &&
		b &&
		a.covered === b.covered
	);
}

export class CoverObserver implements Observer {
	private cb: CoverObserverCallback;
	private coverByElement: WeakMap<HTMLElement, CoverEntry>;
	private elements: Array<HTMLElement>;
	private observing: boolean;

	constructor(cb: CoverObserverCallback, options: CoverObserverOptions) {
		this.cb = cb;
		this.coverByElement = new WeakMap();
		this.elements = [];
		this.observing = false;
	}

	private beginObservation() {
		this.observing = true;

		loop((proceed) => {
			if (this.observing) {
				this.elements.forEach((element) => {
					const cover = getCoverEntry(element);
					const lastCover = this.coverByElement.get(element);

					this.coverByElement.set(element, cover);

					if (!isSameCover(cover, lastCover)) {
						this.cb(cover);
					}
				});

				proceed();
			}
		});
	}

	disconnect() {
		this.observing = false;
	}

	observe(element: HTMLElement) {
		this.elements = [...new Set([...this.elements, element])];

		if (!this.observing) {
			this.beginObservation();
		}
	}

	unobserve(element: HTMLElement) {
		this.elements = this.elements.filter(currentElement => currentElement !== element);
	}
}
