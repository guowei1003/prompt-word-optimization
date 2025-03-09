'use client';

export function Header() {
  return (
    <header className="h-16 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.05)] flex items-center">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* 品牌标识 */}
        <div className="flex items-center">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h1 className="ml-2 text-xl font-semibold text-[#2563EB]">AI提示词优化平台</h1>
          </div>
        </div>
        
        {/* 功能入口 */}
        <nav className="flex items-center">
          <div className="flex space-x-4">
            <button className="w-8 h-8 flex items-center justify-center rounded-md text-[#64748B] hover:bg-[#F1F5F9] transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md text-[#64748B] hover:bg-[#F1F5F9] transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md text-[#64748B] hover:bg-[#F1F5F9] transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md text-[#64748B] hover:bg-[#F1F5F9] transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}