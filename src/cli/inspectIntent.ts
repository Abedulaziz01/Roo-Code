import fs from "fs"
import YAML from "yaml"
import path from "path"

const intentId = process.argv[2]

if (!intentId) {
	console.log("Please provide intent ID")
	process.exit(1)
}

const filePath = path.join(process.cwd(), ".orchestration", "active_intents.yaml")

const content = fs.readFileSync(filePath, "utf-8")
const data = YAML.parse(content)

const intent = data.intents.find((i: any) => i.id === intentId)

if (!intent) {
	console.log("Intent not found")
	process.exit(1)
}

console.log("Intent ID:", intent.id)
console.log("Scope:", intent.scope)
console.log("Constraints:", intent.constraints || "None")
