import { ScopeEnforcementHook } from "../../hooks/ScopeEnforcementHook"

describe("Scope Enforcement", () => {
	it("should block writes outside scope", async () => {
		const hook = new ScopeEnforcementHook("src/owned")

		const result = await hook.preExecute("write_file", {
			path: "src/other/file.ts",
		})

		expect(result.success).toBe(false)
	})
})
