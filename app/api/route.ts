import OpenAI from "openai";
import { formattedPrompt, prompt } from "@/utils/strings";
import { len, diff } from "@/utils/arrys";

const openai = new OpenAI({
  apiKey: process.env["NEXT_PUBLIC_OPENAI_KEY"],
  dangerouslyAllowBrowser: true,
});

export async function POST(request: Request) {
  const res = await request.json();

  const { values } = res;

  const difficulty = diff[res.difficulty];
  const duration = len[res.duration];

  const prompt = formattedPrompt(difficulty, duration, values);

  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-4",
    });

    const newData = JSON.parse(
      chatCompletion?.choices[0]?.message?.content || ""
    );

    return Response.json({ data: newData, status: "success" });
  } catch (error: any) {
    console.error("error", error);
    return Response.json({ data: error, status: "error" });
  }
}
