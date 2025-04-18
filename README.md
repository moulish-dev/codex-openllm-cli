
# 🧠 Codex OpenLLM CLI

A blazing-fast, terminal-first AI coding assistant powered by **Ollama**, with full offline model support. Built as a simplified alternative to the OpenAI Codex CLI, this tool provides natural language coding capabilities via locally running LLMs like `mistral`, `llama2`, `codellama`, and more.


## 🚀 Features

- 🤖 Local model support via [Ollama](https://ollama.com)
- 💻 Terminal-based conversational interface
- 📁 Full-context mode: loads entire project directory into LLM
- 🧠 Single-pass edit mode (experimental)
- 🔧 Easy to extend with your own tools and workflows
- 🛠️ Shell command execution support (opt-in)

> ⚠️ **Note:** This project is still in active development. Expect breaking changes. Contributions are welcome!

## 📦 Requirements

- Node.js `v18+`
- TypeScript
- [Ollama](https://ollama.com) with a supported model installed already (e.g., `mistral`, `codellama`, `deepseek-coder`)
- Git (optional but recommended for context-aware operations)

## 📥 Installation

```bash
git clone https://github.com/moulish-dev/codex-openllm-cli.git
cd codex-openllm-cli
npm install
```

> ⛔ **Make `cli.tsx` executable if running directly from terminal:**
```bash
chmod +x src/cli.tsx
```

## 🧪 Usage

### Run a Single Prompt

```bash
tsx src/cli.tsx "Write a Python function to reverse a string"
```

### Full Context Mode

Load an entire codebase into memory and let the AI reason and edit it in a single go:

```bash
tsx src/cli.tsx --full-context "Convert all async functions to regular functions"
```

### Quiet Mode

Great for scripting and CI:

```bash
tsx src/cli.tsx -q "Fix broken imports"
```

### Model Selection

You can specify a local Ollama model:

```bash
tsx src/cli.tsx -m deepseek-coder "Refactor this script"
```


## ⚠️ Warnings & Notes

- ⚠️ **LLMs may hallucinate.** Always verify generated code before use.
- ⚠️ **Shell commands can be dangerous.** The CLI may suggest terminal commands — always review before execution.
- 🚫 **No sandbox by default.** Commands will run directly if you approve them. Use with caution.
- 🖼️ **Image support is disabled.** For simplicity and compatibility, image inputs are not currently used.
- 🧪 **Full-context mode is experimental.** It can consume large memory for big repos — use wisely.

> ⚠️ **Note:** This project is still in active development. Expect breaking changes. Contributions are welcome!


## 🧠 Inspirations

This CLI is inspired by [OpenAI Codex CLI](https://github.com/openai/openai-codex) but rebuilt to run entirely on **local LLMs** using [Ollama](https://ollama.com).

## 🙌 Contributing

Pull requests are welcome. Open an issue first if you’d like to suggest a major feature or change.

## 📄 License

[LICENSE](LICENSE)

---

# Challenges

## 🚧 Development Roadmap

- [x] Removed OpenAI API key dependency
- [x] Integrated Ollama client
- [x] Stubbed out model checks
- [x] CLI prints output with `--full-context`
- [x] Refactored `AgentLoop.ts` to remove OpenAI dependency
- [x] Defined and used custom `ResponseItem` types
- [x] Adapted UI handlers to work with raw streaming data
- [ ] Add model selector UI
- [ ] Add image input support (optional)
- [ ] Implement persistent prompt history
- [ ] Plugin architecture for custom workflows


```
