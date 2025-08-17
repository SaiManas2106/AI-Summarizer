import { groq } from '@ai-sdk/groq';
import { generateText } from 'ai';

export async function POST(req) {
  try {
    const { transcript, prompt } = await req.json();

    const { text } = await generateText({
      model: groq('llama-3.3-70b-versatile'),
      prompt: `Transcript:\n${transcript}\n\nInstruction:\n${prompt}`,
    });

    return new Response(JSON.stringify({ summary: text }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}