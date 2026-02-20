import fs from "fs"
import path from "path"
import YAML from "yaml"

export class IntentValidator {
	static validate(): boolean {
		const filePath = path.join(process.cwd(), ".orchestration", "active_intents.yaml")

		if (!fs.existsSync(filePath)) {
			console.error("active_intents.yaml not found")
			return false
		}

		const fileContent = fs.readFileSync(filePath, "utf-8")

		const data = YAML.parse(fileContent)

		if (!Array.isArray(data.intents)) {
			console.error("Invalid schema: intents must be an array")
			return false
		}

		for (const intent of data.intents) {
			if (!intent.id || !intent.scope) {
				console.error("Intent missing id or scope")
				return false
			}
		}

		return true
	}
}
