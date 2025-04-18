import { loadClient } from "./openllm/loadClient";

const llm = loadClient();

const run = async () => {
  const result = await llm.prompt("Write a Python function to reverse a string");
  console.log(result);
};

run();
