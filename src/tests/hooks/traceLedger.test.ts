import fs from "fs"
import { TraceSerializer } from "../../trace/TraceSerializer"

describe("Trace Ledger", () => {
	it("should append trace with intent ID", () => {
		const filePath = "trace_test.ts"
		const content = "console.log('hello')"

		TraceSerializer.appendTrace(filePath, "INTENT-999", content)

		const ledger = fs.readFileSync(".orchestration/agent_trace.jsonl", "utf-8")

		expect(ledger).toContain("INTENT-999")
	})
})
