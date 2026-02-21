// src/hooks/LoggingHook.ts
import { ToolHook } from "./ToolHook"

export class LoggingHook implements ToolHook {
	public async execute(toolCall: any) {
		console.log("Logging tool call:", toolCall)
		return toolCall // Continue with the original tool call
	}
}
