export enum ToolCategory {
	SAFE_READ = "SAFE_READ",
	MUTATION = "MUTATION",
	DESTRUCTIVE = "DESTRUCTIVE",
}

export interface ToolMetadata {
	name: string
	category: ToolCategory
}

export const ToolClassification: Record<string, ToolCategory> = {
	read_file: ToolCategory.SAFE_READ,
	list_files: ToolCategory.SAFE_READ,

	write_file: ToolCategory.MUTATION,

	delete_file: ToolCategory.DESTRUCTIVE,
	delete_folder: ToolCategory.DESTRUCTIVE,
}
