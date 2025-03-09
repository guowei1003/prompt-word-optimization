'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Editor } from '@monaco-editor/react';

interface EditorPanelProps {
  originalPrompt: string;
  setOriginalPrompt: (value: string) => void;
  optimizedPrompt: string;
  onOptimize: () => void;
}

export function EditorPanel({
  originalPrompt,
  setOriginalPrompt,
  optimizedPrompt,
  onOptimize,
}: EditorPanelProps) {
  const [activeTab, setActiveTab] = useState('original');

  return (
    <div className="bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.05)] p-4 border border-[#E2E8F0]">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
        <h2 className="text-lg font-medium flex items-center text-[#1E293B]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          提示词编辑器
        </h2>
        <button
          onClick={onOptimize}
          className="h-10 px-4 bg-[#2563EB] text-white rounded-md hover:bg-[#3B82F6] transition-all duration-200 font-medium flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          优化提示词
        </button>
      </div>

      <Tabs
        defaultValue="original"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2 mb-4 bg-gray-100/80 p-1 rounded-lg h-10">
          <TabsTrigger value="original" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:border-b-2 data-[state=active]:border-[#2563EB]">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-2 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              原始提示词
            </span>
          </TabsTrigger>
          <TabsTrigger value="optimized" disabled={!optimizedPrompt} className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:border-b-2 data-[state=active]:border-[#2563EB]">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              优化后提示词
            </span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="original" className="h-[480px] border border-[#E2E8F0] rounded-lg overflow-hidden">
          <Editor
            height="100%"
            defaultLanguage="markdown"
            value={originalPrompt}
            onChange={(value) => setOriginalPrompt(value || '')}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              wordWrap: 'on',
              scrollBeyondLastLine: false,
              lineHeight: 1.6,
              padding: { top: 16, bottom: 16 },
            }}
          />
        </TabsContent>

        <TabsContent value="optimized" className="h-[480px] border border-[#E2E8F0] rounded-lg overflow-hidden">
          <Editor
            height="100%"
            defaultLanguage="markdown"
            value={optimizedPrompt}
            options={{
              readOnly: true,
              minimap: { enabled: false },
              fontSize: 14,
              wordWrap: 'on',
              scrollBeyondLastLine: false,
              lineHeight: 1.6,
              padding: { top: 16, bottom: 16 },
            }}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}