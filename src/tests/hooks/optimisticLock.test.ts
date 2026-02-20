import fs from "fs"
import { OptimisticLockHook } from "../../hooks/OptimisticLockHook"

import { HashUtils } from "../../utils/HashUtils"

describe("Optimistic Locking", () => {
	it("should block stale file write", async () => {
		const path = "temp_test.ts"
		fs.writeFileSync(path, "original")

		const hook = new OptimisticLockHook()

		const wrongHash = HashUtils.computeSha256("something else")

		const result = await hook.preExecute("write_file", {
			path,
			original_hash: wrongHash,
		})

		expect(result.success).toBe(false)

		fs.unlinkSync(path)
	})
})
