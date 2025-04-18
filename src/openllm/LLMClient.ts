export interface LLMClient {
    /*
    takes a prompt and returns a response
    */
   prompt(promptText: string): Promise<string>;
}