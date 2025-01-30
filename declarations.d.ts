declare module 'ollama' {
  export function chat(options: { model: string, messages: Array<{ role: string, content: string }> }): Promise<{ content: string }>;
}