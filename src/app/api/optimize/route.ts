import { NextRequest, NextResponse } from 'next/server';
import { analyzePrompt, optimizePrompt } from '@/lib/optimization/rules';


// 模拟AI生成结果
function simulateAIGeneration(prompt: string, parameters: any) {
  // 这里只是模拟，实际应用中会调用真实的AI API
  return `这是使用"${prompt}"作为提示词，在温度${parameters.temperature}下生成的模拟结果。\n\n这只是一个示例响应，实际实现时会集成真实的大语言模型API来生成内容。`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prompt, parameters } = body;
    
    if (!prompt) {
      return NextResponse.json({
        original: {
          prompt: '',
          issues: [],
          result: ''
        },
        optimized: {
          prompt: '',
          appliedRules: [],
          result: ''
        },
        message: '提示词为空'
      });
    }
    
    // 分析原始提示词
    const issues = analyzePrompt(prompt);
    
    // 优化提示词
    const { optimized, appliedRules } = optimizePrompt(prompt);
    
    // 模拟生成结果（实际应用中会调用真实的AI API）
    const originalResult = simulateAIGeneration(prompt, parameters);
    const optimizedResult = simulateAIGeneration(optimized, parameters);
    
    return NextResponse.json({
      original: {
        prompt,
        issues,
        result: originalResult
      },
      optimized: {
        prompt: optimized,
        appliedRules,
        result: optimizedResult
      }
    });
  } catch (error) {
    console.error('提示词优化API错误:', error);
    return NextResponse.json(
      { error: '处理请求时发生错误' },
      { status: 500 }
    );
  }
}