import { OllamaClient } from "./OllamaClient";
import { LLMClient } from "./LLMClient";

export function loadClient(): LLMClient {
  return new OllamaClient(); // or llama2, deepseek-coder, etc.
}
