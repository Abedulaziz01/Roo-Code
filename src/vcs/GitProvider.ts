import { execSync } from "child_process"

export class GitProvider {
	static getHeadSha(): string {
		try {
			const sha = execSync("git rev-parse HEAD").toString().trim()
			return sha
		} catch (err) {
			console.warn("Unable to get Git HEAD SHA", err)
			return "UNKNOWN_SHA"
		}
	}

	static getRepoStatus(): string {
		try {
			const status = execSync("git status --porcelain").toString().trim()
			return status
		} catch (err) {
			console.warn("Unable to get Git status", err)
			return ""
		}
	}
}
