// src/orchestration/intent_specification.ts

interface IntentSpecification {
	id: string
	description: string
	status: "PENDING" | "IN_PROGRESS" | "COMPLETED"
	createdAt: string
	updatedAt: string
}

export { IntentSpecification }
