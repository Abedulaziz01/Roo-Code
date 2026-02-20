import * as fs from "fs"
import { ToolHook, HookResult } from "./ToolHook"
import { ToolCategory, ToolClassification } from "./ToolClassification"

export class OptimisticLockHook implements ToolHook {
	async preExecute(toolName: string, payload: any): Promise<HookResult> {
		const category = ToolClassification[toolName]

		// Only apply to MUTATION tools
		if (category !== ToolCategory.MUTATION) {
			return { success: true }
		}

		const filePath = payload?.path
		const expectedMTime = payload?.expectedMTime

		if (!filePath || !expectedMTime) {
			return { success: true } // skip if no lock info
		}

		try {
			const stats = fs.statSync(filePath)
			const currentMTime = stats.mtimeMs

			if (currentMTime !== expectedMTime) {
				return {
					success: false,
					error: "File has changed since last read (optimistic lock failed)",
				}
			}
		} catch (err) {
			return {
				success: false,
				error: "File does not exist or cannot access file",
			}
		}

		return { success: true }
	}

	async postExecute(): Promise<HookResult> {
		return { success: true }
	}
}
