// src/utils/SystemPrompt.ts
export class SystemPrompt {
	private prompt: string

	constructor() {
		this.prompt = "Agent must first select a valid intent before taking any action."
	}

	public getPrompt(): string {
		return this.prompt
	}

	public setPrompt(newPrompt: string): void {
		this.prompt = newPrompt
	}
}
