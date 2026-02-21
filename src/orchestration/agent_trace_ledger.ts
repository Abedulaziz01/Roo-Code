// src/orchestration/agent_trace_ledger.ts
import { TraceEntry } from "../trace/TraceSchema"

class AgentTraceLedger {
	private ledger: TraceEntry[] = []

	public addEntry(traceEntry: TraceEntry): void {
		this.ledger.push(traceEntry)
		this.saveLedger() // Save the ledger to a persistent storage
	}

	private saveLedger(): void {
		// Save to disk or external storage (mock example)
		console.log("Saving trace ledger: ", JSON.stringify(this.ledger))
		// Actual save logic (e.g., to a file or DB) goes here
	}

	public getEntries(): TraceEntry[] {
		return this.ledger
	}
}

export { AgentTraceLedger }
