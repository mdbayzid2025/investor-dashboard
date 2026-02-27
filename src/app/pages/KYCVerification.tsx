import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Upload, Check, ChevronRight, AlertCircle, FileText, Lock } from 'lucide-react';
import { Link } from 'react-router';

const STEPS = [
  { id: 1, title: 'Personal Info', icon: UserStepIcon },
  { id: 2, title: 'Financial Status', icon: WalletStepIcon },
  { id: 3, title: 'Documents', icon: FileStepIcon },
  { id: 4, title: 'Review', icon: CheckStepIcon },
];

function UserStepIcon({ active, completed }: { active: boolean; completed: boolean }) {
  return (
    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
      active ? 'border-[#D4AF37] text-[#D4AF37]' : completed ? 'border-[#D4AF37] bg-[#D4AF37] text-black' : 'border-gray-700 text-gray-700'
    }`}>
      {completed ? <Check className="w-5 h-5" /> : <span className="font-serif font-bold">1</span>}
    </div>
  );
}

function WalletStepIcon({ active, completed }: { active: boolean; completed: boolean }) {
  return (
    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
      active ? 'border-[#D4AF37] text-[#D4AF37]' : completed ? 'border-[#D4AF37] bg-[#D4AF37] text-black' : 'border-gray-700 text-gray-700'
    }`}>
      {completed ? <Check className="w-5 h-5" /> : <span className="font-serif font-bold">2</span>}
    </div>
  );
}

function FileStepIcon({ active, completed }: { active: boolean; completed: boolean }) {
  return (
    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
      active ? 'border-[#D4AF37] text-[#D4AF37]' : completed ? 'border-[#D4AF37] bg-[#D4AF37] text-black' : 'border-gray-700 text-gray-700'
    }`}>
      {completed ? <Check className="w-5 h-5" /> : <span className="font-serif font-bold">3</span>}
    </div>
  );
}

function CheckStepIcon({ active, completed }: { active: boolean; completed: boolean }) {
    return (
      <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
        active ? 'border-[#D4AF37] text-[#D4AF37]' : completed ? 'border-[#D4AF37] bg-[#D4AF37] text-black' : 'border-gray-700 text-gray-700'
      }`}>
        <span className="font-serif font-bold">4</span>
      </div>
    );
}

export function KYCVerification() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    idNumber: '',
    phone: '',
    address: '',
    investorType: '',
    netWorth: '',
    sourceOfFunds: ''
  });
  const [files, setFiles] = useState<string[]>([]);

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    // Visual mock only
    setFiles([...files, 'id_document.pdf']);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Shield className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <h1 className="text-3xl font-serif text-white mb-2">Investor Verification</h1>
          <p className="text-gray-400">Complete your profile to access exclusive deal flow.</p>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-between items-center mb-12 relative">
            {/* Line background */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -z-10" />
            
            {/* Active Line */}
            <div 
                className="absolute top-1/2 left-0 h-0.5 bg-[#D4AF37] -z-10 transition-all duration-500" 
                style={{ width: `${((currentStep - 1) / 3) * 100}%` }} 
            />

            {STEPS.map((step) => {
                const Icon = step.icon;
                const isActive = currentStep === step.id;
                const isCompleted = currentStep > step.id;

                return (
                    <div key={step.id} className="flex flex-col items-center bg-[#0A0A0A] px-2">
                        <Icon active={isActive} completed={isCompleted} />
                        <span className={`text-xs mt-2 font-medium uppercase tracking-wider ${
                            isActive ? 'text-[#D4AF37]' : isCompleted ? 'text-[#D4AF37]' : 'text-gray-600'
                        }`}>
                            {step.title}
                        </span>
                    </div>
                );
            })}
        </div>

        {/* Form Content */}
        <motion.div 
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-8 shadow-2xl shadow-[#D4AF37]/5"
        >
            {currentStep === 1 && (
                <div className="space-y-6">
                    <h2 className="text-xl text-white font-serif mb-6">Personal Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-400 text-sm mb-2">First Name</label>
                            <input 
                                type="text" 
                                className="w-full bg-[#0A0A0A] border border-[#D4AF37]/30 rounded p-3 text-white focus:border-[#D4AF37] outline-none"
                                value={formData.firstName}
                                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm mb-2">Last Name</label>
                            <input 
                                type="text" 
                                className="w-full bg-[#0A0A0A] border border-[#D4AF37]/30 rounded p-3 text-white focus:border-[#D4AF37] outline-none"
                                value={formData.lastName}
                                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-gray-400 text-sm mb-2">ID / Passport Number</label>
                            <input 
                                type="text" 
                                className="w-full bg-[#0A0A0A] border border-[#D4AF37]/30 rounded p-3 text-white focus:border-[#D4AF37] outline-none"
                                value={formData.idNumber}
                                onChange={(e) => setFormData({...formData, idNumber: e.target.value})}
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-gray-400 text-sm mb-2">Residential Address</label>
                            <input 
                                type="text" 
                                className="w-full bg-[#0A0A0A] border border-[#D4AF37]/30 rounded p-3 text-white focus:border-[#D4AF37] outline-none"
                                value={formData.address}
                                onChange={(e) => setFormData({...formData, address: e.target.value})}
                            />
                        </div>
                    </div>
                </div>
            )}

            {currentStep === 2 && (
                <div className="space-y-6">
                    <h2 className="text-xl text-white font-serif mb-6">Financial Accreditation</h2>
                    <div className="space-y-4">
                        <label className="block text-gray-400 text-sm mb-2">Investor Classification</label>
                        <div className="grid gap-4">
                            {['Individual Investor', 'Institutional Investor', 'Family Office', 'Fund Manager'].map((type) => (
                                <label key={type} className={`flex items-center p-4 border rounded cursor-pointer transition-all ${
                                    formData.investorType === type 
                                    ? 'border-[#D4AF37] bg-[#D4AF37]/10' 
                                    : 'border-gray-800 hover:border-gray-600'
                                }`}>
                                    <input 
                                        type="radio" 
                                        name="investorType"
                                        className="hidden"
                                        checked={formData.investorType === type}
                                        onChange={() => setFormData({...formData, investorType: type})}
                                    />
                                    <div className={`w-4 h-4 rounded-full border mr-3 flex items-center justify-center ${
                                        formData.investorType === type ? 'border-[#D4AF37]' : 'border-gray-600'
                                    }`}>
                                        {formData.investorType === type && <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />}
                                    </div>
                                    <span className="text-white">{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {currentStep === 3 && (
                <div className="space-y-6">
                    <h2 className="text-xl text-white font-serif mb-6">Document Verification</h2>
                    
                    <div 
                        className="border-2 border-dashed border-[#D4AF37]/30 rounded-xl p-12 text-center hover:border-[#D4AF37] transition-colors cursor-pointer bg-[#0A0A0A]"
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleFileDrop}
                        onClick={() => setFiles([...files, 'passport_scan.pdf'])}
                    >
                        <Upload className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                        <h3 className="text-white font-medium mb-2">Upload ID or Passport</h3>
                        <p className="text-gray-500 text-sm mb-4">Drag and drop or click to browse</p>
                        <p className="text-xs text-gray-600">Supported formats: PDF, JPG, PNG (Max 10MB)</p>
                    </div>

                    {files.length > 0 && (
                        <div className="mt-6 space-y-3">
                            {files.map((file, idx) => (
                                <div key={idx} className="flex items-center justify-between bg-[#1A1A1A] p-3 rounded border border-gray-800">
                                    <div className="flex items-center gap-3">
                                        <FileText className="w-4 h-4 text-[#D4AF37]" />
                                        <span className="text-sm text-gray-300">{file}</span>
                                    </div>
                                    <Check className="w-4 h-4 text-green-500" />
                                </div>
                            ))}
                        </div>
                    )}
                    
                    <div className="flex gap-3 bg-blue-900/10 border border-blue-900/30 p-4 rounded text-sm text-blue-200 mt-6">
                        <Lock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <p>Your documents are encrypted and stored securely. We never share your personal data without consent.</p>
                    </div>
                </div>
            )}

            {currentStep === 4 && (
                <div className="text-center py-8">
                    <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Shield className="w-10 h-10 text-[#D4AF37]" />
                    </div>
                    <h2 className="text-2xl font-serif text-white mb-4">Ready for Submission</h2>
                    <p className="text-gray-400 max-w-md mx-auto mb-8">
                        Please confirm that all provided information is accurate. Our compliance team will review your application within 24 hours.
                    </p>
                    
                    <div className="bg-[#1A1A1A] max-w-sm mx-auto p-4 rounded border border-gray-800 text-left mb-8">
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-500 text-sm">Name</span>
                            <span className="text-white text-sm">{formData.firstName} {formData.lastName}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-500 text-sm">Type</span>
                            <span className="text-white text-sm">{formData.investorType || 'Not Selected'}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500 text-sm">Documents</span>
                            <span className="text-white text-sm">{files.length} Attached</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Actions */}
            <div className="flex justify-between mt-12 pt-6 border-t border-[#D4AF37]/10">
                <button 
                    onClick={handleBack}
                    className={`px-6 py-2 rounded text-gray-400 hover:text-white transition-colors ${
                        currentStep === 1 ? 'invisible' : ''
                    }`}
                >
                    Back
                </button>
                
                {currentStep < 4 ? (
                    <button 
                        onClick={handleNext}
                        className="bg-[#D4AF37] text-black px-8 py-2 rounded font-medium hover:bg-[#F4CF57] transition-colors flex items-center gap-2"
                    >
                        Next Step <ChevronRight className="w-4 h-4" />
                    </button>
                ) : (
                    <Link 
                        to="/dashboard"
                        className="bg-[#D4AF37] text-black px-8 py-2 rounded font-medium hover:bg-[#F4CF57] transition-colors flex items-center gap-2"
                        onClick={() => alert('Application Submitted!')}
                    >
                        Submit Application
                    </Link>
                )}
            </div>
        </motion.div>
      </div>
    </div>
  );
}
