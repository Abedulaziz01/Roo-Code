export interface HookResult {
	success: boolean
	error?: string
}

export interface ToolHook {
	preExecute(toolName: string, payload: any): Promise<HookResult>

	postExecute(toolName: string, payload: any, result: any): Promise<HookResult>
}
