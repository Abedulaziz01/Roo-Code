// src/trace/TraceSchema.ts

interface FileChange {
	file: string
	ranges: Array<{ start: number; end: number; content_hash: string }>
}

interface TraceEntry {
	id: string
	timestamp: string
	vcs: {
		revision_id: string
	}
	files: FileChange[]
	conversations: string[]
	related: string[]
}

export { TraceEntry, FileChange }
