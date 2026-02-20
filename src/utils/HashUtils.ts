import crypto from "crypto"

export class HashUtils {
	static computeSha256(content: string): string {
		return crypto.createHash("sha256").update(content).digest("hex")
	}
}
