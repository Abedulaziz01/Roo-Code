// src/hooks/TraceGenerationPostHook.ts
import { ToolHook } from "./ToolHook"
import { TraceSerializer } from "../trace/TraceSerializer"

export class TraceGenerationPostHook implements ToolHook {
	private traceSerializer: TraceSerializer

	constructor(traceSerializer: TraceSerializer) {
		this.traceSerializer = traceSerializer
	}

	public async preProcess(toolCall: any): Promise<any> {
		return toolCall // No changes to pre-processing
	}

	public async postProcess(toolCall: any, result: any): Promise<any> {
		if (toolCall.type === "write_file" && result.success) {
			const files = toolCall.files // Get the files that were written
			const contentChanges = toolCall.contentChanges // The corresponding content changes
			const traceEntry = this.traceSerializer.generateTraceEntry(files, contentChanges)
			this.traceSerializer.appendTrace(traceEntry)
		}

		return result
	}
}
