// src/hooks/ContextInjectionHook.ts
import { ToolHook } from "./ToolHook"
import { IntentSelectionTool } from "../orchestration/IntentSelectionTool"

export class ContextInjectionHook implements ToolHook {
	private intentSelectionTool: IntentSelectionTool

	constructor(intentSelectionTool: IntentSelectionTool) {
		this.intentSelectionTool = intentSelectionTool
	}

	public async preProcess(toolCall: any): Promise<any> {
		const activeIntent = this.intentSelectionTool.getActiveIntent()

		if (!activeIntent) {
			throw new Error("No active intent selected. Please select an intent first.")
		}

		// Inject relevant context here
		toolCall.context = { intentId: activeIntent }
		console.log(`Context injected for intent: ${activeIntent}`)
		return toolCall
	}

	public async postProcess(toolCall: any, result: any): Promise<any> {
		return result
	}
}
