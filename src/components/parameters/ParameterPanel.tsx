'use client';

import { useState } from 'react';

interface ParameterPanelProps {
  parameters: {
    temperature: number;
    maxLength: number;
    topP: number;
    frequencyPenalty: number;
    presencePenalty: number;
  };
  setParameters: (params: any) => void;
}

export function ParameterPanel({ parameters, setParameters }: ParameterPanelProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, param: string) => {
    const value = parseFloat(e.target.value);
    setParameters({ ...parameters, [param]: value });
  };

  return (
    <div className="bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.05)] p-4 border border-gray-100">
      <h2 className="text-lg font-medium mb-4 flex items-center text-[#1E293B]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-2 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        模型参数
      </h2>
      
      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg transition-all duration-200 hover:shadow-sm">
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-[#475569]">温度 (Temperature)</label>
            <span className="text-sm font-semibold text-[#2563EB]">{parameters.temperature}</span>
          </div>
          <input
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={parameters.temperature}
            onChange={(e) => handleChange(e, 'temperature')}
            className="w-full h-1 bg-[#DBEAFE] rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
            style={{ height: '4px' }}
          />
          <div className="flex justify-between text-xs text-[#64748B] mt-1">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              精确
            </span>
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
              创造
            </span>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg transition-all duration-200 hover:shadow-sm">
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-[#475569]">最大长度</label>
            <span className="text-sm font-semibold text-[#2563EB]">{parameters.maxLength}</span>
          </div>
          <input
            type="range"
            min="100"
            max="4000"
            step="100"
            value={parameters.maxLength}
            onChange={(e) => handleChange(e, 'maxLength')}
            className="w-full bg-[#DBEAFE] rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
            style={{ height: '4px' }}
          />
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg transition-all duration-200 hover:shadow-sm">
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-[#475569]">Top P</label>
            <span className="text-sm font-semibold text-[#2563EB]">{parameters.topP}</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={parameters.topP}
            onChange={(e) => handleChange(e, 'topP')}
            className="w-full bg-[#DBEAFE] rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
            style={{ height: '4px' }}
          />
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg transition-all duration-200 hover:shadow-sm">
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-[#475569]">频率惩罚</label>
            <span className="text-sm font-semibold text-[#2563EB]">{parameters.frequencyPenalty}</span>
          </div>
          <input
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={parameters.frequencyPenalty}
            onChange={(e) => handleChange(e, 'frequencyPenalty')}
            className="w-full bg-[#DBEAFE] rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
            style={{ height: '4px' }}
          />
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg transition-all duration-200 hover:shadow-sm">
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-[#475569]">存在惩罚</label>
            <span className="text-sm font-semibold text-[#2563EB]">{parameters.presencePenalty}</span>
          </div>
          <input
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={parameters.presencePenalty}
            onChange={(e) => handleChange(e, 'presencePenalty')}
            className="w-full bg-[#DBEAFE] rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
            style={{ height: '4px' }}
          />
        </div>
      </div>
    </div>
  );
}