import fs from "fs"
import path from "path"
import crypto from "crypto"
import { HashUtils } from "../utils/HashUtils"
import { GitProvider } from "../vcs/GitProvider"

interface TraceEntry {
	id: string
	timestamp: string
	vcs: { revision_id: string }
	files: Array<{
		relative_path: string
		conversations: Array<{
			url: string
			contributor: { entity_type: string; model_identifier: string }
			ranges: Array<{ start_line: number; end_line: number; content_hash: string }>
			related: Array<{ type: string; value: string }>
		}>
	}>
}

export class TraceSerializer {
	static appendTrace(filePath: string, intentId: string, content: string) {
		const traceFile = path.join(process.cwd(), ".orchestration", "agent_trace.jsonl")

		const entry: TraceEntry = {
			id: crypto.randomUUID(),
			timestamp: new Date().toISOString(),
			vcs: { revision_id: GitProvider.getHeadSha() },
			files: [
				{
					relative_path: filePath,
					conversations: [
						{
							url: "session_001",
							contributor: { entity_type: "AI", model_identifier: "claude-3-5" },
							ranges: [
								{
									start_line: 1,
									end_line: content.split("\n").length,
									content_hash: HashUtils.computeSha256(content),
								},
							],
							related: [{ type: "specification", value: intentId }],
						},
					],
				},
			],
		}

		fs.appendFileSync(traceFile, JSON.stringify(entry) + "\n")
	}
}
