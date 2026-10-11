import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, MessageSquare, FileText } from 'lucide-react';
import { companyInfo } from '../data/company';
import { useLanguage } from '../i18n/LanguageContext';

interface Props {
  prefilledProduct?: string;
  onSubmitted?: () => void;
}

export const ConsultationForm: React.FC<Props> = ({ prefilledProduct, onSubmitted }) => {
  const { language, t, isRtl } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cropType: language === 'en' ? 'Pistachio Orchard' : language === 'ar' ? 'بساتين الفستق' : 'باغات پسته',
    city: '',
    areaSize: '',
    problem: prefilledProduct ? `${language === 'en' ? 'Inquiry for product: ' : language === 'ar' ? 'طلب استشارة بخصوص: ' : 'درخواست استعلام محصول '}${prefilledProduct}` : '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setIsSubmitting(true);

    try {
      await fetch('/api/consultations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } catch {
      // Local fallback
    }

    try {
      const existing = JSON.parse(localStorage.getItem('pishgaman_inquiries') || '[]');
      const newInquiry = {
        id: Date.now().toString(),
        ...formData,
        createdAt: new Date().toLocaleDateString(language === 'en' ? 'en-US' : language === 'ar' ? 'ar-AE' : 'fa-IR'),
        status: 'new'
      };
      localStorage.setItem('pishgaman_inquiries', JSON.stringify([newInquiry, ...existing]));
    } catch {
      // ignore
    }

    setIsSubmitting(false);
    setIsSuccess(true);
    if (onSubmitted) onSubmitted();
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `${language === 'en' ? 'Hello Dr. Rostami, I am ' : language === 'ar' ? 'مرحباً د. رستمي، أنا ' : 'سلام وقت بخیر، جناب دکتر رستمی. من '}${formData.name || (language === 'en' ? 'a grower' : 'کشاورز')}${language === 'en' ? ', crop: ' : ' هستم برای محصول '}${formData.cropType}. ${formData.problem}`
    );
    window.open(`https://wa.me/989128247415?text=${text}`, '_blank');
  };

  return (
    <section id="consult" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient from-emerald-950/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Informational column */}
          <div className={`lg:col-span-5 space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <FileText className="w-3.5 h-3.5" />
              <span>{t.consultTitle}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              {t.consultSubtitle}
            </h2>

            <p className="text-sm text-stone-300 leading-relaxed font-light">
              {t.consultDesc}
            </p>

            {/* Direct hotline box */}
            <div className="bg-stone-800/80 rounded-2xl p-6 border border-stone-700/80 space-y-4">
              <div className="text-xs text-stone-400">
                {t.consultDirectCall}:
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="block text-lg font-black text-white">{t.managerName}</span>
                  <span className="text-xs text-emerald-400">{t.management}</span>
                </div>
                <a
                  href={companyInfo.callUrl}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-all active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span dir="ltr" className="font-mono">{companyInfo.phoneFormatted}</span>
                </a>
              </div>

              <div className="pt-3 border-t border-stone-700/60 flex items-center justify-between">
                <span className="text-xs text-stone-400">{t.directWhatsapp}:</span>
                <button
                  onClick={handleWhatsAppDirect}
                  className="px-4 py-2 bg-emerald-800/60 hover:bg-emerald-800 text-emerald-200 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Open WhatsApp' : language === 'ar' ? 'فتح واتساب' : 'ارسال پیام در واتس‌اپ'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7">
            <div className={`bg-stone-800/90 rounded-3xl p-6 sm:p-10 border border-stone-700 shadow-2xl backdrop-blur-md ${isRtl ? 'text-right' : 'text-left'}`}>
              
              {isSuccess ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white">{t.consultSuccessTitle}</h3>
                  <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
                    {t.consultSuccessDesc}
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        phone: '',
                        cropType: 'باغات پسته',
                        city: '',
                        areaSize: '',
                        problem: ''
                      });
                    }}
                    className="mt-4 px-6 py-2.5 bg-stone-700 hover:bg-stone-600 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                  >
                    {language === 'en' ? 'Submit Another Request' : language === 'ar' ? 'إرسال طلب استشارة جديد' : 'ثبت درخواست جدید'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-stone-300 block">
                        {t.farmerName} <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={language === 'en' ? 'e.g. John Doe' : language === 'ar' ? 'مثال: أحمد المحمد' : 'مثال: علی احمدی'}
                        className="w-full bg-stone-900/90 border border-stone-700 rounded-xl py-2.5 px-3.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-stone-300 block">
                        {t.phoneNumber} <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0912..."
                        dir="ltr"
                        className="w-full bg-stone-900/90 border border-stone-700 rounded-xl py-2.5 px-3.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-left"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Crop */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-stone-300 block">
                        {t.cropType}
                      </label>
                      <input
                        type="text"
                        value={formData.cropType}
                        onChange={(e) => setFormData({ ...formData, cropType: e.target.value })}
                        placeholder={language === 'en' ? 'Pistachio, Citrus...' : language === 'ar' ? 'فستق، حمضيات...' : 'پسته، گردو، صیفی...'}
                        className="w-full bg-stone-900/90 border border-stone-700 rounded-xl py-2.5 px-3.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    {/* City */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-stone-300 block">
                        {t.cityOrProvince}
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder={language === 'en' ? 'City / State' : language === 'ar' ? 'المدينة / المحافظة' : 'رفسنجان، شیراز، دزفول...'}
                        className="w-full bg-stone-900/90 border border-stone-700 rounded-xl py-2.5 px-3.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    {/* Area */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-stone-300 block">
                        {t.orchardArea}
                      </label>
                      <input
                        type="text"
                        value={formData.areaSize}
                        onChange={(e) => setFormData({ ...formData, areaSize: e.target.value })}
                        placeholder="۵"
                        className="w-full bg-stone-900/90 border border-stone-700 rounded-xl py-2.5 px-3.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  {/* Problem Description */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-300 block">
                      {t.problemDesc}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.problem}
                      onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                      placeholder={language === 'en' ? 'Describe soil EC, leaf yellowing, or specific fertilization inquiry...' : language === 'ar' ? 'اشرح ملوحة التربة، اصفرار الأوراق أو احتياجات التسميد...' : 'شرح زردی برگ، شوری خاک یا نیاز به کود اختصاصی...'}
                      className="w-full bg-stone-900/90 border border-stone-700 rounded-xl py-2.5 px-3.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-emerald-950/60 flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? t.submitting : t.submitConsultation}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
