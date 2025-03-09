'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ReactDiffViewer } from 'react-diff-viewer-continued';

interface ComparisonViewProps {
  originalResult: string;
  optimizedResult: string;
}

export function ComparisonView({
  originalResult,
  optimizedResult,
}: ComparisonViewProps) {
  const [viewMode, setViewMode] = useState<'split' | 'unified'>('split');
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-3">
        <div className="flex space-x-2 bg-gray-100/80 p-1 rounded-full">
          <button
            onClick={() => setViewMode('split')}
            className={`px-4 py-1.5 text-sm rounded-full flex items-center transition-all duration-200 ${viewMode === 'split' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-600 hover:bg-white/50'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
            </svg>
            分屏视图
          </button>
          <button
            onClick={() => setViewMode('unified')}
            className={`px-4 py-1.5 text-sm rounded-full flex items-center transition-all duration-200 ${viewMode === 'unified' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-600 hover:bg-white/50'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            统一视图
          </button>
        </div>
      </div>
      
      {originalResult && optimizedResult ? (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <ReactDiffViewer
            oldValue={originalResult}
            newValue={optimizedResult}
            splitView={viewMode === 'split'}
            leftTitle="原始结果"
            rightTitle="优化后结果"
            useDarkTheme={false}
          />
        </div>
      ) : (
        <div className="p-8 bg-gray-50 rounded-lg text-center text-gray-500 border border-gray-200 border-dashed flex flex-col items-center justify-center min-h-[200px]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p>点击"优化提示词"按钮生成对比结果</p>
          <p className="text-xs mt-2 text-gray-400">优化后可查看原始与优化后的输出差异</p>
        </div>
      )}
    </div>
  );
}