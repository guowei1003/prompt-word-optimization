# 提示词优化平台

## 项目概述

提示词优化平台是一个基于AI技术的工具，用于分析和优化提示词（Prompts），以提升与大语言模型交互的质量和效果。通过规则分析和AI增强优化，帮助用户获得更精确、更有效的AI回应。

## 功能特点

- **提示词分析**：自动检测提示词中的问题和改进空间
- **规则优化**：基于预设规则集自动优化提示词
- **AI增强优化**：利用大语言模型进一步优化提示词
- **多种优化维度**：包括明确性、具体性、结构、上下文、语气和格式等
- **结果对比**：直观对比原始提示词和优化后提示词的效果差异
- **模板库**：提供常用提示词模板，快速开始
- **参数调整**：灵活配置生成参数，满足不同需求

## 安装与配置

### 环境要求

- Node.js 18.0.0 或更高版本
- npm 或 yarn 包管理器

### 安装步骤

1. 克隆仓库

```bash
git clone https://github.com/yourusername/prompt-word-optimization.git
cd prompt-word-optimization
```

2. 安装依赖

```bash
npm install
# 或
yarn install
```

3. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

4. 访问应用

打开浏览器访问 `http://localhost:3000`

### 配置AI提供商

本平台支持多种AI提供商进行提示词优化，包括：

- OpenAI
- Anthropic
- Google Gemini
- 自定义API

#### 配置方法

1. 创建环境变量文件 `.env.local`，添加相应的API密钥：

```
# OpenAI配置
OPENAI_API_KEY=your_openai_api_key

# Anthropic配置
ANTHROPIC_API_KEY=your_anthropic_api_key

# Google Gemini配置
GEMINI_API_KEY=your_gemini_api_key

# 自定义API配置
CUSTOM_API_ENDPOINT=your_custom_api_endpoint
CUSTOM_API_KEY=your_custom_api_key
```

2. 重启开发服务器以应用新的环境变量

## 使用指南

### 基本使用流程

1. **输入提示词**：在左侧编辑器中输入您想要优化的提示词，或从模板库中选择一个模板
2. **调整参数**：在右侧参数面板中调整生成参数，如温度、最大长度等
3. **优化提示词**：点击"优化提示词"按钮，系统将分析并优化您的提示词
4. **查看结果**：在结果对比区域查看原始提示词和优化后提示词的效果差异

### 参数说明

- **温度 (Temperature)**：控制生成内容的随机性，值越低生成内容越确定，值越高创造性越强
- **最大长度**：生成内容的最大token数量
- **Top P**：控制词汇选择的多样性，值越低选择越保守
- **频率惩罚**：降低重复内容的可能性
- **存在惩罚**：控制模型对已出现内容的重复程度

### 优化维度

本平台提供多种优化维度，可以根据需求选择：

- **明确性**：确保提示词清晰明确，没有歧义
- **具体性**：添加足够的细节和上下文
- **结构**：改进提示词的组织结构，使其更易于理解和回应
- **上下文**：确保提供足够的背景信息
- **语气**：保持一致的语气和风格
- **格式**：明确指定期望的输出格式

### 使用模板库

1. 点击左侧面板底部的"模板库"区域
2. 浏览可用的提示词模板
3. 点击所需模板将其加载到编辑器中
4. 根据需要修改模板内容
5. 点击"优化提示词"按钮进行优化

## 开发指南

### 项目结构

```
src/
  app/            # Next.js应用主目录
    api/          # API路由
    page.tsx      # 主页面组件
  components/     # React组件
    comparison/   # 结果对比组件
    editor/       # 编辑器组件
    parameters/   # 参数设置组件
    templates/    # 模板库组件
  lib/
    optimization/ # 提示词优化核心逻辑
      rules.ts    # 规则定义
      ai-optimizer.ts # AI增强优化
```

### 添加新的优化规则

要添加新的优化规则，请在 `src/lib/optimization/rules.ts` 文件中定义规则对象，遵循以下接口：

```typescript
export interface OptimizationRule {
  id: string;
  name: string;
  description: string;
  category: 'clarity' | 'specificity' | 'structure' | 'context' | 'tone' | 'format';
  priority: number;
  check: (prompt: string) => string | null;
  fix: (prompt: string) => string;
}
```

### 集成新的AI提供商

要添加新的AI提供商支持，请在 `src/lib/optimization/ai-optimizer.ts` 文件中实现相应的调用函数，并更新 `optimizePromptWithAI` 函数中的提供商选择逻辑。

## 贡献指南

欢迎贡献代码、报告问题或提出改进建议。请遵循以下步骤：

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 详情请参阅 [LICENSE](LICENSE) 文件
