import fs from "fs"
import path from "path"

export class SharedBrain {
	static loadBrain(): string {
		const brainPath = path.join(process.cwd(), "CLAUDE.md")

		if (!fs.existsSync(brainPath)) {
			return ""
		}

		return fs.readFileSync(brainPath, "utf-8")
	}
}
