import { ToolHook } from "./ToolHook"
import { ToolCategory, ToolClassification } from "./ToolClassification"

export class ScopeEnforcementHook implements ToolHook {
	constructor(private ownedScope: string) {}

	async preExecute(toolName: string, payload: any) {
		const category = ToolClassification[toolName]

		if (!category) {
			return { success: true }
		}

		// Only enforce for MUTATION tools
		if (category === ToolCategory.MUTATION) {
			const filePath = payload?.path

			if (!filePath || !filePath.startsWith(this.ownedScope)) {
				return {
					success: false,
					error: `File path outside owned scope: ${filePath}`,
				}
			}
		}

		return { success: true }
	}

	async postExecute() {
		return { success: true }
	}
}
