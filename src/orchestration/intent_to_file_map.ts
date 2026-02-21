// src/orchestration/intent_to_file_map.ts

interface FileChange {
	filePath: string
	linesChanged: Array<{ start: number; end: number }>
}

class IntentToFileMap {
	private map: Map<string, FileChange[]> = new Map()

	public addMapping(intentId: string, filePath: string, lineRange: { start: number; end: number }): void {
		if (!this.map.has(intentId)) {
			this.map.set(intentId, [])
		}

		const mappings = this.map.get(intentId)
		mappings?.push({ filePath, linesChanged: [lineRange] })

		this.saveMap()
	}

	private saveMap(): void {
		// Example of saving to disk or external storage
		console.log("Saving intent-to-file mapping: ", JSON.stringify([...this.map]))
		// Actual save logic (e.g., to a file or DB) goes here
	}

	public getMappings(): Map<string, FileChange[]> {
		return this.map
	}
}

export { IntentToFileMap }
