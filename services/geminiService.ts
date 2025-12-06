
import { GoogleGenAI, Type } from "@google/genai";
import { QuizQuestion, TrilingualText } from "../types";

export const generateTopicContent = async (examName: string, topicName: string): Promise<TrilingualText> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Create a COMPREHENSIVE and DETAILED study guide for the topic "${topicName}" for the AWS ${examName} exam.
  
  Requirements:
  1. Structure the content with clear sections: "Introduction", "Key Concepts", "Use Cases", and "Exam Tips".
  2. Output as HTML strings for ALL languages to support formatting.
  3. Use <h3> for section headers, <ul>/<li> for bullet points, and <strong> for emphasis.
  4. The content should be substantial (at least 300 words per language) and go deep into the technical details suitable for studying.
  
  Languages:
  - English
  - Simplified Chinese
  - Japanese (MUST use HTML <ruby> tags for ALL Kanji)

  Example Japanese format: <h3><ruby>導入<rt>どうにゅう</rt></ruby></h3><p>...<ruby>機能<rt>きのう</rt></ruby>...</p>
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          en: { type: Type.STRING, description: "Detailed HTML study content in English" },
          zh: { type: Type.STRING, description: "Detailed HTML study content in Chinese" },
          ja: { type: Type.STRING, description: "Detailed HTML study content in Japanese with <ruby> tags" }
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
