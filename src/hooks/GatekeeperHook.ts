// src/hooks/GatekeeperHook.ts
import { ToolHook } from "./ToolHook"
import { IntentSelectionTool } from "../orchestration/IntentSelectionTool"

export class GatekeeperHook implements ToolHook {
	private intentSelectionTool: IntentSelectionTool

	constructor(intentSelectionTool: IntentSelectionTool) {
		this.intentSelectionTool = intentSelectionTool
	}

	public async preProcess(toolCall: any): Promise<any> {
		// Check if the tool is a mutating action
		if (toolCall.type === "mutation") {
			const activeIntent = this.intentSelectionTool.getActiveIntent()

			if (!activeIntent) {
				throw new Error("Action blocked. Please select an intent before performing any mutating action.")
			}
		}

		return toolCall
	}

	public async postProcess(toolCall: any, result: any): Promise<any> {
		return result
	}
}
