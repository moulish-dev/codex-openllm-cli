export type ContentItem =
  | { type: "input_text"; text: string }
  | { type: "output_text"; text: string }
  | { type: "input_file"; filename: string }
  | { type: "input_image" }
  | { type: "refusal"; refusal: string };

export type ResponseInputItem = {
  type: "input_text",
  text: string,
};

export type ResponseItem =
  | {
      id: string;
      type: "message";
      role: "assistant" | "system" | "user";
      content: ContentItem[];
    }
  | {
      id: string;
      type: "function_call";
      name: string;
      arguments: string;
      call_id: string;
    }
  | {
      id: string;
      type: "function_call_output";
      output: string;
      metadata?: {
        exit_code?: number;
        duration_seconds?: number;
      };
    };
