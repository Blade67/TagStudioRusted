// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	type Programs = {
		[name: string]: string;
	}
	type Library = {
		[name: string]: string;
	}
}

export { };