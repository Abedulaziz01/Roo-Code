import fs from "fs"
import path from "path"

export class IntentMapUpdater {
	static updateIntentMap(intentId: string, filePath: string, content: string) {
		const mapFilePath = path.join(process.cwd(), "intent_map.md")

		const totalLines = content.split("\n").length

		const entry = `
## ${intentId}

- File: ${filePath}
- Lines: 1-${totalLines}

`

		// If file does not exist, create it
		if (!fs.existsSync(mapFilePath)) {
			fs.writeFileSync(mapFilePath, "# Intent Map\n")
		}

		fs.appendFileSync(mapFilePath, entry)
	}
}
