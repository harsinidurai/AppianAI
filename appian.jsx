import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  ExternalLink, 
  Clock, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

const CaseDashboard = () => {
  // Mock State for Case Data
  const [caseData, setCaseData] = useState({
    id: "INS-99281-KL",
    event: "Storm",
    location: "Kerala, India",
    amount: 1200000, // ₹12 Lakhs
    category: "Residential",
    lastUpdated: "Oct 24, 2025"
  });

  const [isDetailed, setIsDetailed] = useState(false);

  // Logic: AI Guidance updates based on case amount and location
  const isHighValue = caseData.amount > 1000000;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 p-6">
      {/* Top Header */}
      <header className="max-w-7xl mx-auto mb-6 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">Context-Aware Knowledge Assistant</h1>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>Policy Update: {caseData.lastUpdated}</span>
          </div>
          <button 
            onClick={() => setIsDetailed(!isDetailed)}
            className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
          >
            {isDetailed ? 'Simplified View' : 'Detailed View'}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* LEFT PANEL: CASE INFORMATION (Read-Only) */}
        <section className="md:col-span-4 space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">Case Information</h2>
            
            <div className="space-y-6">
              <div>
                <label className="text-sm text-slate-500 block">Case ID</label>
                <p className="font-mono font-bold text-lg">{caseData.id}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-500 block">Event Type</label>
                  <p className="font-semibold flex items-center gap-1.5">
                    <AlertTriangle size={16} className="text-amber-500" /> {caseData.event}
                  </p>
                </div>
                <div>
                  <label className="text-sm text-slate-500 block">Category</label>
                  <p className="font-semibold">{caseData.category}</p>
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500 block">Location</label>
                <p className="font-semibold flex items-center gap-1.5">
                  <MapPin size={16} className="text-blue-500" /> {caseData.location}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <label className="text-sm text-slate-500 block">Claim Amount</label>
                <p className="text-2xl font-bold text-slate-900">
                  ₹{(caseData.amount / 100000).toFixed(1)} Lakhs
                </p>
                {isHighValue && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 mt-2">
                    High Risk Threshold
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT PANEL: AI KNOWLEDGE ASSISTANT */}
        <section className="md:col-span-8 space-y-4">
          <div className="bg-white rounded-2xl border-2 border-blue-100 shadow-md overflow-hidden transition-all">
            <div className="bg-blue-50 p-4 border-b border-blue-100 flex justify-between items-center">
              <h2 className="font-bold text-blue-900 flex items-center gap-2">
                <FileText size={18} /> AI Case Guidance
              </h2>
              <span className="text-[10px] bg-blue-200 text-blue-800 px-2 py-0.5 rounded font-bold uppercase">Automated Rule Retrieval</span>
            </div>

            <div className="p-6">
              {/* Highlighted Rule */}
              <div className="bg-amber-50 border-l-4 border-amber-400 p-5 mb-6 rounded-r-lg">
                <h3 className="text-amber-900 text-sm font-bold uppercase mb-1">Applicable Rule</h3>
                <p className="text-lg text-slate-800 leading-relaxed">
                  "For {caseData.location.split(',')[0]} storm claims exceeding <span className="font-bold">₹10 lakhs</span>, 
                  secondary verification is <span className="underline decoration-amber-500 decoration-2">mandatory</span>."
                </p>
              </div>

              {/* Source Section */}
              <div className="flex flex-wrap items-center gap-6 mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded shadow-sm">
                    <FileText className="text-slate-400" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-semibold">Document</p>
                    <p className="text-sm font-medium">Disaster SOP 2024-V2</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-semibold">Section</p>
                  <p className="text-sm font-medium">Clause 4.2</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-semibold">Page</p>
                  <p className="text-sm font-medium">14</p>
                </div>
                <button className="ml-auto flex items-center gap-1.5 text-blue-600 font-semibold text-sm hover:underline">
                  Preview Source <ExternalLink size={14} />
                </button>
              </div>

              {/* Action Checklist */}
              <div>
                <h3 className="font-bold text-slate-800 mb-4">Required Actions</h3>
                <div className="grid gap-3">
                  {[
                    "Verify documents (Identity & Property)",
                    "Assign certified field surveyor",
                    "Complete secondary verification (Manager Level)"
                  ].map((task, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-200 transition-all cursor-pointer group">
                      <div className="h-5 w-5 border-2 border-slate-300 rounded group-hover:border-blue-500 flex items-center justify-center">
                        {idx === 0 && <div className="h-2 w-2 bg-blue-500 rounded-sm"></div>}
                      </div>
                      <span className="text-slate-700 font-medium">{task}</span>
                      <ChevronRight size={16} className="ml-auto text-slate-300" />
                    </div>
                  ))}
                </div>
              </div>

              {isDetailed && (
                <div className="mt-8 pt-6 border-t border-slate-100 animate-in fade-in slide-in-from-top-2">
                  <h4 className="text-sm font-bold text-slate-500 mb-2">Legal Context</h4>
                  <p className="text-sm text-slate-600 italic leading-relaxed">
                    Under the National Disaster Management Act, claims originating from designated 'High Impact' zones 
                    (which includes Kerala coastal districts) require dual-auth validation if the disbursement 
                    exceeds the 1 million INR threshold.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CaseDashboard;