import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, SKILLS_DATA, EXPERIENCE } from '../constants';

// Construct a system prompt based on the portfolio data
const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${PERSONAL_INFO.name}'s portfolio website. 
Your goal is to represent ${PERSONAL_INFO.name} professionally and answer visitor questions based on the provided context.

Context:
- Name: ${PERSONAL_INFO.name}
- Role: ${PERSONAL_INFO.role}
- About: ${PERSONAL_INFO.about}
- Skills: ${SKILLS_DATA.map(s => s.subject).join(', ')}
- Experience: ${EXPERIENCE.map(e => `${e.title} at ${e.company} (${e.date})`).join('; ')}
- Projects: ${PROJECTS.map(p => p.title).join(', ')}

Guidelines:
- Be concise, friendly, and professional.
- Use a tone that matches a senior engineer (knowledgeable but approachable).
- If asked about contact info, provide: ${PERSONAL_INFO.email}.
- If asked about something not in the context, politely mention you don't have that specific info but can tell them about ${PERSONAL_INFO.name}'s professional work.
- Do not make up facts not present in the context.
`;

let chatInstance: Chat | null = null;

export const getChatInstance = (): Chat => {
  if (chatInstance) return chatInstance;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is not defined in process.env");
    // We return a mock chat or throw error, but for safety in this demo, let's allow it to fail gracefully in UI
  }

  const ai = new GoogleGenAI({ apiKey: apiKey });
  
  chatInstance = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });

  return chatInstance;
};

export const sendMessageStream = async (message: string) => {
  try {
    const chat = getChatInstance();
    const result = await chat.sendMessageStream({ message });
    return result;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};
