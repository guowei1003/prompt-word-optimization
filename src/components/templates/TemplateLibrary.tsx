'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// 模板分类
type TemplateCategory = 'writing' | 'coding' | 'creative' | 'business' | 'academic';

// 模板接口
interface PromptTemplate {
  id: string;
  title: string;
  description: string;
  template: string;
  category: TemplateCategory;
  tags: string[];
}

// 示例模板数据
const sampleTemplates: PromptTemplate[] = [
  {
    id: 'writing-blog',
    title: '博客文章生成',
    description: '生成高质量的博客文章，包含引人入胜的开头和结构化内容',
    template: `我需要写一篇关于[主题]的博客文章。

请包含以下部分：
1. 引人入胜的标题
2. 吸引读者的开场白
3. 3-5个关键点，每个点都有详细解释和例子
4. 实用的总结和行动建议

文章风格应该是[风格：专业/轻松/教育性]，目标读者是[目标受众]。

请使用Markdown格式，并确保内容原创、信息丰富且易于阅读。`,
    category: 'writing',
    tags: ['博客', '写作', '内容创作']
  },
  {
    id: 'coding-review',
    title: '代码审查助手',
    description: '帮助审查代码，找出潜在问题和改进点',
    template: `请帮我审查以下[编程语言]代码，找出潜在的问题和改进点：

\`\`\`
[在此粘贴代码]
\`\`\`

请关注以下几点：
1. 代码质量和可读性
2. 潜在的bug和边界情况
3. 性能优化机会
4. 安全隐患
5. 是否符合最佳实践

对于每个发现的问题，请提供：
- 问题描述
- 为什么这是个问题
- 改进建议，最好附带示例代码

请以结构化的方式组织你的回答，使用Markdown格式。`,
    category: 'coding',
    tags: ['代码审查', '编程', '最佳实践']
  },
  {
    id: 'creative-story',
    title: '创意故事生成器',
    description: '根据提供的元素生成创意故事',
    template: `请根据以下元素创作一个短篇故事：

- 主角：[描述主角]
- 背景设定：[时间和地点]
- 核心冲突：[主要问题或挑战]
- 情感基调：[如：神秘、欢快、悲伤等]
- 主题：[故事想要传达的信息]

故事应该包含：
1. 引人入胜的开头
2. 角色发展
3. 情节转折
4. 令人满意的结局

故事长度约[字数]字，风格[风格描述]。`,
    category: 'creative',
    tags: ['故事', '创意写作', '娱乐']
  },
  {
    id: 'business-proposal',
    title: '商业提案模板',
    description: '生成专业的商业提案框架',
    template: `请帮我创建一份关于[项目/产品名称]的商业提案。

提案应包含以下部分：

1. 执行摘要
   - 简明扼要地概述提案的主要内容和价值主张

2. 公司/团队介绍
   - 简要介绍我们的背景、专业知识和相关经验

3. 市场分析
   - 目标市场规模和增长潜力
   - 主要竞争对手分析
   - 我们的竞争优势

4. 产品/服务详情
   - 详细描述我们提供的产品或服务
   - 核心功能和特点
   - 与竞品的差异化优势

5. 营销策略
   - 目标客户群体
   - 推广和获客渠道
   - 定价策略

6. 财务预测
   - 收入模式
   - 成本结构
   - 预期投资回报率

7. 实施计划
   - 关键里程碑和时间线
   - 资源需求

8. 风险评估与应对策略

请使用专业商务语言，并确保内容逻辑清晰、数据支持充分。`,
    category: 'business',
    tags: ['商业', '提案', '营销']
  },
  {
    id: 'academic-research',
    title: '学术研究问题分析',
    description: '帮助分析和完善学术研究问题',
    template: `请帮我分析以下学术研究问题：

[研究问题]

请从以下几个方面进行分析：

1. 研究问题的清晰度和具体性
   - 问题是否明确？
   - 是否有可操作的研究变量？

2. 理论基础
   - 这个问题与哪些现有理论相关？
   - 有哪些关键概念需要定义？

3. 研究价值
   - 这个研究将如何填补现有知识空白？
   - 研究结果可能有哪些理论或实践意义？

4. 方法论考虑
   - 适合这个问题的研究方法有哪些？
   - 可能的数据来源和分析方法是什么？

5. 潜在挑战
   - 研究过程中可能遇到的主要困难是什么？
   - 如何应对这些挑战？

6. 改进建议
   - 如何使这个研究问题更加清晰和有价值？
   - 提供一个修改后的研究问题版本

请提供详细的分析和具体的建议，使用学术语言，并在适当的地方引用相关文献或研究方法。`,
    category: 'academic',
    tags: ['学术', '研究', '分析']
  },
];

interface TemplateLibraryProps {
  onSelectTemplate: (template: string) => void;
}

export function TemplateLibrary({ onSelectTemplate }: TemplateLibraryProps) {
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory>('writing');
  
  // 按分类筛选模板
  const filteredTemplates = sampleTemplates.filter(template => template.category === selectedCategory);
  
  return (
    <div className="bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.05)] p-4 border border-[#E2E8F0]">
      <h2 className="text-lg font-medium mb-4 flex items-center text-[#1E293B]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-2 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        提示词模板库
      </h2>
      
      <Tabs
        value={selectedCategory}
        onValueChange={(value) => setSelectedCategory(value as TemplateCategory)}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-5 mb-4 h-10">
          <TabsTrigger value="writing" className="data-[state=active]:border-b-2 data-[state=active]:border-[#2563EB]">写作</TabsTrigger>
          <TabsTrigger value="coding" className="data-[state=active]:border-b-2 data-[state=active]:border-[#2563EB]">编程</TabsTrigger>
          <TabsTrigger value="creative" className="data-[state=active]:border-b-2 data-[state=active]:border-[#2563EB]">创意</TabsTrigger>
          <TabsTrigger value="business" className="data-[state=active]:border-b-2 data-[state=active]:border-[#2563EB]">商业</TabsTrigger>
          <TabsTrigger value="academic" className="data-[state=active]:border-b-2 data-[state=active]:border-[#2563EB]">学术</TabsTrigger>
        </TabsList>
        
        <TabsContent value={selectedCategory} className="mt-2">
          <div className="grid grid-cols-1 gap-4">
            {filteredTemplates.map((template) => (
              <div 
                key={template.id} 
                className="border border-[#E2E8F0] rounded-lg p-4 hover:border-[#2563EB] hover:bg-[#F8FAFC] cursor-pointer transition-colors"
                onClick={() => onSelectTemplate(template.template)}
              >
                <h3 className="font-medium text-[#1E293B]">{template.title}</h3>
                <p className="text-[#475569] text-sm mt-1">{template.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {template.tags.map(tag => (
                    <span key={tag} className="bg-[#F1F5F9] text-[#64748B] text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}