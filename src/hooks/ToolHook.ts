import { ToolClassification, HookError } from "./types"

export interface ToolHook {
	// Pre-execution hook
	preExecute(toolName: string, payload: any): Promise<void | HookError>

	// Post-execution hook
	postExecute(toolName: string, payload: any): Promise<void | HookError>

	// Optionally classify the tool
	classification?: ToolClassification
}
export interface HookResult {
	success: boolean
	error?: string
}

export interface ToolHook {
	preExecute(toolName: string, payload: any): Promise<HookResult>
	postExecute(toolName: string, payload: any, result: any): Promise<HookResult>
}
