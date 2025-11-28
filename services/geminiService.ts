import { GoogleGenAI, Type } from "@google/genai";
import { StudySection, QuizQuestion, TrilingualText } from "../types";

export const generateExamOutline = async (examName: string): Promise<StudySection[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Create a high-level study outline for the AWS ${examName} exam. 
  Break it down into 4-6 main domains (Sections) as per the official guide.
  For each domain, list 3-5 key topics.
  
  IMPORTANT: 
  - Provide titles in English, Simplified Chinese, and Japanese.
  - For Japanese text, YOU MUST use <ruby> tags for Kanji readings (Furigana). Example: <ruby>学習<rt>がくしゅう</rt></ruby>.
  - Provide the approximate exam weightage (percentage) for each domain (e.g., "20%" or "24%").
  - Ensure the JSON structure matches the schema exactly.
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            title: {
              type: Type.OBJECT,
              properties: {
                en: { type: Type.STRING },
                zh: { type: Type.STRING },
                ja: { type: Type.STRING, description: "Japanese text with <ruby> tags for Kanji" }
              },
              required: ["en", "zh", "ja"]
            },
            weight: { type: Type.STRING, description: "The percentage weight of this domain, e.g. '20%'" },
            topics: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: {
                     type: Type.OBJECT,
                     properties: {
                      en: { type: Type.STRING },
                      zh: { type: Type.STRING },
                      ja: { type: Type.STRING, description: "Japanese text with <ruby> tags" }
                     },
                     required: ["en", "zh", "ja"]
                  }
                },
                required: ["title"]
              }
            }
          },
          required: ["title", "topics", "weight"]
        }
      }
    }
  });

  return JSON.parse(response.text || "[]");
};

export const generateTopicContent = async (examName: string, topicName: string): Promise<TrilingualText> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Explain the topic "${topicName}" for the AWS ${examName} exam.
  Provide a concise summary suitable for study review.
  
  Output in English, Simplified Chinese, and Japanese.
  
  CRITICAL FOR JAPANESE:
  - You MUST use standard HTML <ruby> tags for ALL Kanji characters to provide Furigana readings.
  - Example: <ruby>機能<rt>きのう</rt></ruby>を利用<rt>りよう</rt>する。
  - Do NOT use parentheses (). Use <ruby><rt> tags.
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          en: { type: Type.STRING },
          zh: { type: Type.STRING },
          ja: { type: Type.STRING, description: "Japanese text containing HTML <ruby> tags for all Kanji" }
        },
        required: ["en", "zh", "ja"]
      }
    }
  });

  return JSON.parse(response.text || "{}");
};

export const generateQuiz = async (examName: string, domainName: string, count: number = 3): Promise<QuizQuestion[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Generate ${count} single-choice practice questions for the AWS ${examName} exam, specifically focusing on the domain: "${domainName}".
  
  Requirements:
  1. 4 options per question.
  2. Detailed explanation for the correct answer.
  3. All text fields (question, options, explanation) must be in English, Chinese, and Japanese.
  4. CRITICAL: All Japanese text (including questions, options, and explanations) MUST use HTML <ruby> tags for ALL Kanji. 
     Example: <ruby>選択<rt>せんたく</rt></ruby>肢<rt>し</rt>。
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            question: {
              type: Type.OBJECT,
              properties: { 
                en: { type: Type.STRING }, 
                zh: { type: Type.STRING }, 
                ja: { type: Type.STRING, description: "Text with <ruby> tags" } 
              },
              required: ["en", "zh", "ja"]
            },
            options: {
              type: Type.ARRAY,
              items: {
                 type: Type.OBJECT,
                 properties: { 
                   en: { type: Type.STRING }, 
                   zh: { type: Type.STRING }, 
                   ja: { type: Type.STRING, description: "Text with <ruby> tags" } 
                 },
                 required: ["en", "zh", "ja"]
              }
            },
            correctAnswerIndex: { type: Type.INTEGER },
            explanation: {
              type: Type.OBJECT,
              properties: { 
                en: { type: Type.STRING }, 
                zh: { type: Type.STRING }, 
                ja: { type: Type.STRING, description: "Text with <ruby> tags" } 
              },
              required: ["en", "zh", "ja"]
            }
          },
          required: ["id", "question", "options", "correctAnswerIndex", "explanation"]
        }
      }
    }
  });

  return JSON.parse(response.text || "[]");
};