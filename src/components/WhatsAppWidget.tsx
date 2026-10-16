import React, { useState } from 'react';
import { 
  X, 
  Send, 
  Phone, 
  Copy, 
  Check, 
  ShieldCheck, 
  Clock, 
  Building2, 
  HardHat,
  ChevronDown
} from 'lucide-react';
import { companyDetails } from '../data/companyData';

interface WhatsAppWidgetProps {
  phoneNumber?: string; // default: '082 853 2960'
  companyName?: string;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  phoneNumber = '082 853 2960',
  companyName = 'HBC Construction (Pty) Ltd'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  // International format for wa.me: South Africa is 27
  // Raw clean digits: 27828532960
  const cleanNumber = '27828532960';

  const quickEnquiries = [
    { label: 'Tender & RFQ Pricing', text: 'Hello HBC Construction, I would like to request tender pricing / rates for an upcoming project.' },
    { label: 'Civil, Roads & Bridges', text: 'Good day HBC Construction, I am enquiring regarding civil engineering / road construction services.' },
    { label: 'Building & Infrastructure', text: 'Hi HBC Construction, I would like to discuss a commercial / public building construction project.' },
    { label: 'Plant Hire & Fleet', text: 'Hello HBC team, I would like to enquire about your plant hire equipment and availability.' },
    { label: 'CIDB Compliance & Profile', text: 'Good day, please share your CIDB Grade 9GB / 9CE company profile and compliance pack.' },
  ];

  const handleSelectTopic = (enquiryText: string, label: string) => {
    setSelectedTopic(label);
    setMessage(enquiryText);
  };

  const handleSendWhatsApp = () => {
    const textToSend = message.trim() || 'Hello HBC Construction, I would like to enquire about your civil engineering and construction services.';
    const encodedText = encodeURIComponent(textToSend);
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyNumber = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="whatsapp-widget fixed bottom-6 right-6 z-40 flex flex-col items-end select-none">
      {/* ─────────────────────────────────────────────────────────────
          EXPANDABLE WHATSAPP CHAT CARD
      ───────────────────────────────────────────────────────────── */}
      {isOpen && (
        <div 
          className="w-[calc(100vw-1.75rem)] sm:w-[380px] max-w-[380px] mb-2 sm:mb-4 bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300 flex flex-col"
          style={{ maxHeight: 'calc(100dvh - 90px)' }}
          role="dialog"
          aria-label="HBC Construction WhatsApp Chat"
        >
          {/* Header (Dark Charcoal with Orange/Red Accent) */}
          <div className="relative bg-neutral-950 text-white p-4">
            {/* Top Accent line: Orange to Red */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 via-orange-500 to-red-600" />

            <div className="flex items-start justify-between gap-3 pt-1">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 flex items-center justify-center flex-shrink-0 shadow-inner">
                  {/* Hardhat / Building icon in orange */}
                  <HardHat className="w-6 h-6 text-orange-500" />
                  {/* Online pulsing green badge */}
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-neutral-950"></span>
                  </span>
                </div>

                <div>
                  <h3 className="font-extrabold text-sm tracking-tight text-white flex items-center gap-1.5">
                    <span>HBC Construction</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-orange-600/30 text-orange-400 border border-orange-500/40">CIDB 9GB / 9CE</span>
                  </h3>
                  <p className="text-[12px] text-neutral-300 font-medium">
                    Technical & Tender Enquiries
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 mt-0.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Online • Instant WhatsApp Response</span>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white flex items-center justify-center transition focus:outline-none"
                aria-label="Close WhatsApp chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Direct Number Bar */}
            <div className="mt-3 pt-2.5 border-t border-neutral-800/90 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-neutral-300">
                <Phone className="w-3.5 h-3.5 text-orange-500" />
                <span className="font-semibold text-white tracking-wide">{phoneNumber}</span>
              </div>
              <button
                onClick={handleCopyNumber}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold text-neutral-300 hover:text-white bg-neutral-800/80 hover:bg-neutral-800 transition"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Chat Body (Scrollable if needed) */}
          <div className="p-4 bg-neutral-50 flex-1 overflow-y-auto space-y-3.5 text-xs text-neutral-700">
            {/* Automated Welcome Speech Bubble */}
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm shadow-sm border border-neutral-200/80 space-y-2">
              <div className="flex items-center justify-between text-[11px] text-neutral-400 font-medium">
                <span className="font-bold text-neutral-800">HBC Engineering Desk</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-neutral-400" />
                  <span>Just now</span>
                </span>
              </div>
              <p className="text-neutral-700 leading-relaxed font-normal">
                Hello! Welcome to <strong className="font-bold text-neutral-900">HBC Construction (Pty) Ltd</strong>.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Connect directly with our estimators and project directors on WhatsApp for rapid responses regarding tenders, civil works, or turnkey infrastructure.
              </p>
              <div className="pt-1 flex items-center gap-2 text-[11px] text-neutral-500 border-t border-neutral-100">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
                <span>100% Black-Owned • CIDB Grade 9GB / 9CE</span>
              </div>
            </div>

            {/* Quick Inquiry Options */}
            <div className="space-y-1.5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 px-0.5">
                Quick Enquiry Options:
              </div>
              <div className="flex flex-col gap-1.5">
                {quickEnquiries.map((q) => {
                  const isSelected = selectedTopic === q.label;
                  return (
                    <button
                      key={q.label}
                      onClick={() => handleSelectTopic(q.text, q.label)}
                      className={`text-left px-3 py-2 rounded-xl transition text-[11.5px] flex items-center justify-between border ${
                        isSelected 
                          ? 'bg-orange-50 border-orange-500 text-orange-950 font-bold shadow-xs' 
                          : 'bg-white hover:bg-neutral-100 border-neutral-200/90 text-neutral-700 font-medium'
                      }`}
                    >
                      <span className="truncate">{q.label}</span>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ml-2 flex-shrink-0 ${
                        isSelected ? 'bg-orange-600 text-white' : 'bg-neutral-100 text-neutral-500'
                      }`}>
                        Select
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message Text Input */}
            <div className="space-y-1.5 pt-1">
              <label htmlFor="whatsapp-message" className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
                Your Message:
              </label>
              <textarea
                id="whatsapp-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your project enquiry or click a quick option above..."
                rows={2}
                className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition resize-none font-normal"
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-3.5 bg-white border-t border-neutral-200 space-y-2">
            <button
              onClick={handleSendWhatsApp}
              className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs tracking-wide flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition transform active:scale-98"
            >
              {/* WhatsApp Icon */}
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.18-.553-1.898-.785-3.13-2.73-3.224-2.856-.096-.125-.769-1.023-.769-1.95 0-.927.487-1.383.66-1.574.174-.19.379-.239.505-.239.126 0 .253.002.363.007.118.006.275-.045.43.329.16.388.544 1.332.592 1.431.049.098.081.213.016.342-.064.129-.096.208-.19.319-.094.11-.198.246-.283.33-.095.094-.194.196-.083.388.11.19.49.808 1.05 1.306.72.642 1.326.84 1.516.935.19.094.301.079.412-.048.11-.128.474-.553.601-.743.126-.19.253-.158.427-.095.174.063 1.107.522 1.296.617.19.095.316.142.363.221.047.079.047.458-.097.863z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.177L2 22l4.981-1.396A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2a8.167 8.167 0 0 1-4.321-1.229l-.31-.184-2.96.83.834-2.884-.202-.321A8.168 8.168 0 0 1 3.8 12c0-4.522 3.678-8.2 8.2-8.2 4.522 0 8.2 3.678 8.2 8.2 0 4.522-3.678 8.2-8.2 8.2z" />
              </svg>
              <span>Send WhatsApp Message</span>
            </button>

            <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-1">
              <a 
                href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                className="hover:text-orange-600 transition flex items-center gap-1 font-semibold"
              >
                <Phone className="w-3 h-3 text-orange-500" />
                <span>Call Directly</span>
              </a>
              <span>Mon – Fri 07:30 – 17:00</span>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          FLOATING GREEN WHATSAPP BUTTON (BOTTOM RIGHT)
      ───────────────────────────────────────────────────────────── */}
      <div className="flex items-center">
        {/* The Green Floating Trigger Button - Compact, Sleek Size */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative group w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 transform active:scale-95 ${
            isOpen
              ? 'bg-neutral-900 hover:bg-neutral-800 text-white rotate-90 ring-2 ring-orange-500/20'
              : 'bg-[#25D366] hover:bg-[#20BD5A] hover:scale-105 shadow-[#25D366]/25'
          }`}
          aria-label="WhatsApp quick contact"
        >
          {isOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <>
              {/* Official WhatsApp Brand Icon */}
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
