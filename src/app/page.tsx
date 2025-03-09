'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EditorPanel } from '@/components/editor/EditorPanel';
import { ComparisonView } from '@/components/comparison/ComparisonView';
import { ParameterPanel } from '@/components/parameters/ParameterPanel';
import { Header } from '@/components/layout/Header';
import { TemplateLibrary } from '@/components/templates/TemplateLibrary';

export default function Home() {
  const [originalPrompt, setOriginalPrompt] = useState('');
  const [optimizedPrompt, setOptimizedPrompt] = useState('');
  const [originalResult, setOriginalResult] = useState('');
  const [optimizedResult, setOptimizedResult] = useState('');
  const [parameters, setParameters] = useState({
    temperature: 0.7,
    maxLength: 1000,
    topP: 1,
    frequencyPenalty: 0,
    presencePenalty: 0,
  });
  
  // 处理模板选择
  const handleSelectTemplate = (template: string) => {
    setOriginalPrompt(template);
  };
  
  const handleOptimize = async () => {
    try {
      // 调用后端API进行提示词优化
      const response = await fetch('/api/optimize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: originalPrompt,
          parameters: parameters
        }),
      });
      
      const data = await response.json();
      
      if (data.message === '提示词为空') {
        alert('请输入提示词后再进行优化');
        return;
      }
      
      if (!response.ok) {
        throw new Error('优化请求失败');
      }
      
      // 更新状态
      setOptimizedPrompt(data.optimized.prompt);
      setOriginalResult(data.original.result);
      setOptimizedResult(data.optimized.result);
    } catch (error) {
      console.error('提示词优化错误:', error);
      alert('提示词优化失败，请稍后重试');
    }
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* 页面标题和描述 */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-[#1E293B] mb-2">智能提示词优化</h2>
          <p className="text-[#475569] max-w-2xl mx-auto text-sm">通过AI技术分析和优化您的提示词，提升大模型输出质量和相关性</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* 左侧编辑器区域 - 720px */}
          <div className="w-full lg:w-[720px] bg-[#F8FAFC] rounded-lg p-6 space-y-6">
            <EditorPanel 
              originalPrompt={originalPrompt} 
              setOriginalPrompt={setOriginalPrompt}
              optimizedPrompt={optimizedPrompt}
              onOptimize={handleOptimize}
            />
            
            {/* 模板库 */}
            <TemplateLibrary 
              onSelectTemplate={handleSelectTemplate}
            />
          </div>
          
          {/* 右侧参数和结果区域 - 576px */}
          <div className="w-full lg:w-[576px] space-y-6">
            <div className="sticky top-6">
              <ParameterPanel 
                parameters={parameters}
                setParameters={setParameters}
              />
              
              <div className="bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.05)] p-4 mt-6 border border-gray-100">
                <h2 className="text-lg font-medium mb-4 flex items-center text-[#1E293B]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  生成结果对比
                </h2>
                <ComparisonView 
                  originalResult={originalResult}
                  optimizedResult={optimizedResult}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 底部信息栏 */}
      <footer className="h-12 bg-[#F3F4F6] text-[#64748B] flex items-center mt-8">
        <div className="container mx-auto px-4 text-xs">
          <p>© 2023 AI提示词优化平台 | 基于8px栅格系统和Airbnb风格设计语言</p>
        </div>
      </footer>
    </main>
  );
}