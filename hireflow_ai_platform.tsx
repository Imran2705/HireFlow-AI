import React, { useState, useEffect } from 'react';
import { 
  Brain, FileText, Briefcase, BarChart, Target, Zap, LayoutDashboard, 
  UserCircle, CheckCircle, UploadCloud, ChevronRight, Star, ArrowRight,
  MessageSquare, Video, LineChart, ShieldCheck, Search, FileSignature, AlertCircle
} from 'lucide-react';

// --- MAIN APP COMPONENT ---
export default function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing', 'dashboard', 'ats-demo'

  return (
    <div className="min-h-screen bg-[#0B1121] text-slate-200 font-sans selection:bg-cyan-500/30">
      <Navbar setView={setCurrentView} currentView={currentView} />
      
      {currentView === 'landing' && <LandingPage setView={setCurrentView} />}
      {currentView === 'ats-demo' && <ATSDemoPage setView={setCurrentView} />}
      {currentView === 'dashboard' && <UserDashboard setView={setCurrentView} />}
    </div>
  );
}

// --- NAVBAR ---
function Navbar({ setView, currentView }) {
  return (
    <nav className="fixed w-full z-50 top-0 border-b border-white/10 bg-[#0B1121]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setView('landing')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
              HireFlow <span className="text-cyan-400">AI</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button className="hover:text-cyan-400 transition-colors">Features</button>
            <button className="hover:text-cyan-400 transition-colors">Resume Builder</button>
            <button className="hover:text-cyan-400 transition-colors">Pricing</button>
            <div className="h-4 w-px bg-white/20"></div>
            <button onClick={() => setView('dashboard')} className="hover:text-white transition-colors">Login</button>
            <button 
              onClick={() => setView('ats-demo')}
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md transition-all flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// --- LANDING PAGE ---
function LandingPage({ setView }) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="flex-1 space-y-8 z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            <SparklesIcon className="w-4 h-4" />
            The All-In-One Career Operating System
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Land Your Dream Job Faster With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">AI</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0">
            Create ATS-friendly resumes, optimize them for specific jobs, generate cover letters, prepare for interviews, and track applications — all in one platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button 
              onClick={() => setView('ats-demo')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_40px_rgba(79,70,229,0.5)] transition-all flex items-center justify-center gap-2"
            >
              Check Resume Free <UploadCloud className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setView('dashboard')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 font-semibold transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              Build Resume Now <FileText className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Hero Demo: Interactive ATS Analyzer Mockup */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none z-10">
          <div className="relative rounded-2xl border border-white/10 bg-[#151D2F]/80 backdrop-blur-xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-slate-400 font-mono">Live ATS Analyzer</span>
            </div>
            
            <div className="space-y-6">
              <div className="h-32 rounded-xl border-2 border-dashed border-cyan-500/30 bg-cyan-500/5 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer">
                <UploadCloud className="w-8 h-8 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-cyan-200">Drag & Drop Resume.pdf</p>
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent -translate-y-full animate-[scan_3s_ease-in-out_infinite]" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/5 p-4 border border-white/5">
                  <div className="text-sm text-slate-400 mb-1">ATS Match Score</div>
                  <div className="text-3xl font-bold text-green-400">92%</div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full mt-2">
                    <div className="bg-green-400 h-1.5 rounded-full w-[92%]" />
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 p-4 border border-white/5">
                  <div className="text-sm text-slate-400 mb-1">Hiring Probability</div>
                  <div className="text-3xl font-bold text-cyan-400">High</div>
                  <div className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                    <TrendingUpIcon className="w-3 h-3" /> Top 8% of applicants
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium text-slate-300">AI Recommendations</div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="text-slate-300">Missing keyword: <span className="text-white font-semibold">"Kubernetes"</span> (Required by JD)</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                  <span className="text-slate-300">Strong impact statements detected in Experience section.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-[#0e1526] py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">17+ AI Features to Get You Hired</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">From creating an ATS-optimized resume to simulating interviews, HireFlow AI handles the entire job search lifecycle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Target />} title="AI ATS Resume Checker" 
              desc="Analyze formatting, keyword density, and missing skills against industry standards to generate a 0-100 ATS Score."
            />
            <FeatureCard 
              icon={<FileSignature />} title="AI Resume Builder" 
              desc="Drag & drop builder with real-time AI content generation, tailored templates, and live ATS scoring."
            />
            <FeatureCard 
              icon={<Zap />} title="AI Tailoring Engine" 
              desc="Upload your resume and a job description. Our AI completely rewrites and optimizes your resume for that specific job in seconds."
            />
            <FeatureCard 
              icon={<Search />} title="Job Description Analyzer" 
              desc="Extract required skills, hidden keywords, and experience levels from any JD to reveal your true match percentage."
            />
            <FeatureCard 
              icon={<Video />} title="AI Interview Coach" 
              desc="Simulate voice and video interviews. Get real-time feedback on confidence, communication, and technical knowledge."
            />
            <FeatureCard 
              icon={<ShieldCheck />} title="AI Recruiter Simulator" 
              desc="See your resume exactly how a recruiter sees it. Predicts first impression score and flags potential red flags."
            />
          </div>
        </div>
      </section>

      {/* Application Package Generator Banner */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-[#0B1121] border border-white/10 p-8 md:p-16 text-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium mb-4">
              <Zap className="w-4 h-4 text-cyan-400" />
              Ultimate Competitive Advantage
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">One-Click Job Application Package</h2>
            <p className="text-lg text-slate-300">
              Paste a job description and generate a tailored ATS Resume, Cover Letter, LinkedIn optimization plan, Interview Questions, and Skill Gap Analysis in under 60 seconds.
            </p>
            <button 
              onClick={() => setView('dashboard')}
              className="px-8 py-4 rounded-full bg-white text-blue-900 hover:bg-slate-100 font-bold text-lg shadow-xl transition-all"
            >
              Generate Package Now
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0B1121] py-12 text-center text-slate-500">
        <p className="flex items-center justify-center gap-2">
          <Brain className="w-5 h-5 text-cyan-500" />
          HireFlow AI — From Resume to Offer Letter. &copy; 2026
        </p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all cursor-default">
      <div className="w-12 h-12 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:text-cyan-400 transition-all">
        {React.cloneElement(icon, { className: "w-6 h-6" })}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}

// --- ATS DEMO PAGE (Interactive Flow) ---
function ATSDemoPage({ setView }) {
  const [step, setStep] = useState(0); // 0: upload, 1: scanning, 2: results
  
  useEffect(() => {
    if (step === 1) {
      const timer = setTimeout(() => setStep(2), 3500);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-[#111827] rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />
        
        <div className="p-8 md:p-12">
          <button 
            onClick={() => setView('landing')}
            className="text-slate-400 hover:text-white mb-8 flex items-center gap-2 text-sm transition-colors"
          >
            &larr; Back to Home
          </button>

          {step === 0 && (
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold">Upload Resume for Free Analysis</h2>
              <p className="text-slate-400">Find out how ATS systems read your resume.</p>
              
              <div 
                onClick={() => setStep(1)}
                className="mt-8 border-2 border-dashed border-cyan-500/40 rounded-2xl p-16 bg-cyan-500/5 hover:bg-cyan-500/10 cursor-pointer transition-all group flex flex-col items-center justify-center"
              >
                <UploadCloud className="w-16 h-16 text-cyan-400 mb-4 group-hover:-translate-y-2 transition-transform" />
                <p className="text-lg font-medium text-white">Click to upload or drag and drop</p>
                <p className="text-sm text-slate-400 mt-2">PDF, DOCX, TXT (Max 5MB)</p>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="text-center space-y-8 py-16">
              <div className="relative w-32 h-32 mx-auto">
                <div className="absolute inset-0 rounded-full border-4 border-slate-800" />
                <div className="absolute inset-0 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-purple-400 animate-pulse" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold animate-pulse text-white">Analyzing Resume...</h3>
                <div className="text-slate-400 mt-2 space-y-1 text-sm h-6 overflow-hidden">
                  <p className="animate-[slideUp_2s_ease-in-out_infinite]">Extracting Contact Info...</p>
                  <p className="animate-[slideUp_2s_ease-in-out_infinite_0.5s]">Evaluating Keyword Density...</p>
                  <p className="animate-[slideUp_2s_ease-in-out_infinite_1s]">Checking ATS Formatting...</p>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="text-center">
                <h2 className="text-3xl font-bold">Analysis Complete</h2>
                <p className="text-slate-400 mt-2">Here is a snapshot of your ATS performance.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1 bg-[#1A2235] p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center">
                  <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" stroke="#1e293b" strokeWidth="8" fill="none" />
                      <circle cx="50" cy="50" r="40" stroke="#f59e0b" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="62.8" className="transition-all duration-1000" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-bold text-white">75</span>
                      <span className="text-xs text-slate-400">/ 100</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg text-yellow-400">Moderate Fit</h3>
                  <p className="text-xs text-slate-400 mt-2">Your resume passes basic ATS but needs optimization to rank high.</p>
                </div>

                <div className="col-span-1 md:col-span-2 space-y-4">
                  <div className="bg-[#1A2235] p-5 rounded-2xl border border-white/5 flex items-start gap-4">
                    <div className="p-2 bg-red-500/10 rounded-lg text-red-400 mt-1"><AlertCircle className="w-5 h-5"/></div>
                    <div>
                      <h4 className="font-semibold text-white">Formatting Issue Detected</h4>
                      <p className="text-sm text-slate-400 mt-1">We found complex tables or text boxes that ATS parsers cannot read. Stick to single-column standard layouts.</p>
                    </div>
                  </div>
                  
                  <div className="bg-[#1A2235] p-5 rounded-2xl border border-white/5 flex items-start gap-4">
                    <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400 mt-1"><Zap className="w-5 h-5"/></div>
                    <div>
                      <h4 className="font-semibold text-white">Weak Action Verbs</h4>
                      <p className="text-sm text-slate-400 mt-1">4 bullet points start with "Responsible for" instead of strong action verbs like "Spearheaded" or "Developed".</p>
                    </div>
                  </div>

                  <div className="bg-[#1A2235] p-5 rounded-2xl border border-white/5 flex items-start gap-4">
                    <div className="p-2 bg-green-500/10 rounded-lg text-green-400 mt-1"><CheckCircle className="w-5 h-5"/></div>
                    <div>
                      <h4 className="font-semibold text-white">Good Length & Sections</h4>
                      <p className="text-sm text-slate-400 mt-1">Resume is 1 page long and contains all mandatory sections (Summary, Experience, Education).</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setView('dashboard')}
                  className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-white hover:opacity-90 transition-opacity"
                >
                  Create Free Account to Fix Resume
                </button>
                <button 
                  onClick={() => setStep(0)}
                  className="px-6 py-4 bg-white/5 hover:bg-white/10 rounded-xl font-medium transition-colors"
                >
                  Scan Another
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// --- USER DASHBOARD ---
function UserDashboard({ setView }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex font-sans">
      {/* Sidebar - Light/Modern SaaS Theme */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col h-screen sticky top-0">
        <div className="h-20 flex items-center px-6 border-b border-slate-100 cursor-pointer" onClick={() => setView('landing')}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mr-3">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl text-slate-800">HireFlow</span>
        </div>
        
        <div className="p-4 flex-1 overflow-y-auto">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 ml-2 mt-4">Platform</div>
          <nav className="space-y-1">
            <SidebarItem icon={<LayoutDashboard />} label="Dashboard" active />
            <SidebarItem icon={<FileText />} label="Resumes & CVs" />
            <SidebarItem icon={<Search />} label="Job Analyzer" />
            <SidebarItem icon={<Target />} label="Application Tracker" badge="3" />
            <SidebarItem icon={<Video />} label="Interview Prep" />
            <SidebarItem icon={<MessageSquare />} label="AI Career Coach" />
          </nav>

          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 ml-2 mt-8">Tools</div>
          <nav className="space-y-1">
            <SidebarItem icon={<UserCircle />} label="LinkedIn Optimizer" />
            <SidebarItem icon={<Zap />} label="Skill Gap Analysis" />
          </nav>
        </div>

        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-xl cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">JD</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-800 truncate">John Doe</p>
              <p className="text-xs text-slate-500 truncate">Pro Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <h1 className="text-2xl font-bold text-slate-800">Overview</h1>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors shadow-sm flex items-center gap-2">
              <Zap className="w-4 h-4" /> New AI Package
            </button>
          </div>
        </header>

        <div className="p-8 max-w-6xl mx-auto w-full space-y-8">
          
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard title="Total Applications" value="24" trend="+3 this week" icon={<Briefcase />} color="blue" />
            <StatCard title="Avg ATS Score" value="88%" trend="+12% increase" icon={<Target />} color="green" />
            <StatCard title="Interviews Scheduled" value="4" trend="2 upcoming" icon={<Video />} color="purple" />
            <StatCard title="Profile Views" value="156" trend="LinkedIn Optimizer active" icon={<UserCircle />} color="cyan" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Center Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* App Tracker Widget */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-slate-800">Recent Applications</h2>
                  <button className="text-sm text-blue-600 font-medium hover:underline">View All</button>
                </div>
                <div className="space-y-4">
                  <AppRow company="Google" role="Frontend Engineer" status="Interview" date="Today" score="94%" />
                  <AppRow company="Stripe" role="Full Stack Developer" status="Applied" date="Yesterday" score="91%" />
                  <AppRow company="Airbnb" role="React Developer" status="Rejected" date="Oct 12" score="82%" />
                </div>
              </div>

              {/* AI Tailor Action Area */}
              <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
                <div className="absolute right-0 bottom-0 opacity-10">
                  <Brain className="w-64 h-64 -mb-16 -mr-16" />
                </div>
                <div className="relative z-10 max-w-md">
                  <h2 className="text-2xl font-bold mb-2">Tailor a new resume</h2>
                  <p className="text-slate-300 mb-6 text-sm">Paste a job description and our AI will instantly rewrite your base resume to maximize your ATS score.</p>
                  <button className="px-5 py-2.5 bg-white text-blue-900 font-semibold rounded-lg shadow hover:bg-slate-100 transition-colors">
                    Start Tailoring
                  </button>
                </div>
              </div>
            </div>

            {/* Right Sidebar Area */}
            <div className="space-y-8">
              {/* AI Coach Suggestion */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-md font-bold text-slate-800">AI Career Coach</h2>
                    <p className="text-xs text-slate-500">Action required</p>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm text-slate-700 leading-relaxed">
                  "I noticed you have an interview with Google coming up. Want to run a 15-minute mock technical interview covering React and system design?"
                </div>
                <button className="w-full mt-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition-colors">
                  Start Mock Interview
                </button>
              </div>

              {/* Skill Gap */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h2 className="text-md font-bold text-slate-800 mb-4">Skill Gap Analysis</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-slate-700">TypeScript</span>
                      <span className="text-slate-500">High Demand</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full">
                      <div className="bg-cyan-500 h-2 rounded-full w-[40%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-slate-700">GraphQL</span>
                      <span className="text-slate-500">Medium Demand</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full">
                      <div className="bg-purple-500 h-2 rounded-full w-[20%]" />
                    </div>
                  </div>
                </div>
                <button className="w-full mt-6 text-sm text-blue-600 font-medium hover:underline text-center">
                  Generate Learning Roadmap &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// --- DASHBOARD HELPERS ---
function SidebarItem({ icon, label, active, badge }) {
  return (
    <div className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${active ? 'bg-blue-50 text-blue-700 font-medium' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
      <div className="flex items-center gap-3">
        {React.cloneElement(icon, { className: `w-5 h-5 ${active ? 'text-blue-600' : 'text-slate-400'}` })}
        <span className="text-sm">{label}</span>
      </div>
      {badge && (
        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </div>
  );
}

function StatCard({ title, value, trend, icon, color }) {
  const colorMap = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    cyan: 'bg-cyan-50 text-cyan-600',
  };

  return (
    <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${colorMap[color]}`}>
          {React.cloneElement(icon, { className: "w-6 h-6" })}
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-slate-800 mb-1">{value}</h3>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <p className="text-xs text-slate-400 mt-2">{trend}</p>
      </div>
    </div>
  );
}

function AppRow({ company, role, status, date, score }) {
  const getStatusColor = (s) => {
    switch(s) {
      case 'Interview': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Applied': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Rejected': return 'bg-slate-100 text-slate-600 border-slate-200';
      case 'Offer': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-slate-300 hover:shadow-sm transition-all bg-white">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-400 text-xl border border-slate-200">
          {company.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-slate-800">{role}</h4>
          <p className="text-sm text-slate-500">{company} • Applied {date}</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden sm:block text-right">
          <div className="text-xs text-slate-400 mb-0.5">ATS Match</div>
          <div className="font-bold text-green-600 text-sm">{score}</div>
        </div>
        <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(status)}`}>
          {status}
        </span>
      </div>
    </div>
  );
}

// Sparkles/Icons specific to landing text
function SparklesIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

function TrendingUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

// Add basic custom animations directly to standard Tailwind classes 
// for the scanner effect via a style block to ensure it runs anywhere
const styles = `
  @keyframes scan {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
  @keyframes slideUp {
    0%, 100% { transform: translateY(100%); opacity: 0; }
    10%, 90% { transform: translateY(0); opacity: 1; }
  }
`;

// Inject styles on mount
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}