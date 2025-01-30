import ollama from 'ollama';

async function main() {
  const response = await ollama.chat({
    model: 'deepseek-r1:8b',
    messages: [
      {
        role: 'user',
        content: '你好'
      }
    ],
    stream: true
  })
  for await (const part of response) {
    console.log(part.message.content)
  }
}

main()