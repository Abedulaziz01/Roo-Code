// src/utils/MutationClassifier.ts
export class MutationClassifier {
	public classifyMutation(beforeCode: string, afterCode: string): string {
		// A real heuristic or AST comparison should be used here
		if (beforeCode === afterCode) {
			return "AST_REFACTOR"
		} else {
			return "INTENT_EVOLUTION"
		}
	}
}
