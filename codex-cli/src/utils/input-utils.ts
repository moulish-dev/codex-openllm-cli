import type { ResponseInputItem } from "../../../src/types/response";

/**
 * Creates a text-based input item compatible with the AgentLoop.
 *
 * @param text - The prompt text to send as input.
 * @param _images - Currently unused; reserved for future image support.
 * @returns A `ResponseInputItem` object with input text.
 */
export async function createInputItem(
  text: string,
  _images: Array<string>, // kept for future extensibility
): Promise<ResponseInputItem> {
  return {
    type: "input_text",
    text,
  };
}
