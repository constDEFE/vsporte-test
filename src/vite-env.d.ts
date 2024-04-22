/// <reference types="vite/client" />

declare global {
	interface Array<T> {
		toReversed(): T[];
	}
}
