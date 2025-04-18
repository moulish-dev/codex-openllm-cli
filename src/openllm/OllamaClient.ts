export class OllamaClient {
  async prompt(prompt: string): Promise<string> {
    const res = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "deepseek-coder:1.3b", // THE MODEL NAME
        prompt,
        stream: false
      })
    });

    const data = await res.json();
    return data.response; // clean string
  }
}
