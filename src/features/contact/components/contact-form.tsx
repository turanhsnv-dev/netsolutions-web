'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormValues } from '../schemas/contact';
import { Send } from 'lucide-react';
import { useState } from 'react';

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Gələcəkdə bura API (məs: Resend və ya Nodemailer) məntiqi əlavə ediləcək
    console.log('Form Datası:', data);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000); // 5 saniyə sonra mesajı gizlət
    }, 1500);
  };

  return (
    <div className="p-2 md:p-6">
      <h3 className="text-3xl font-bold text-slate-900 mb-2">Bizə Yazın</h3>
      <p className="text-slate-500 mb-8">İT ehtiyaclarınızı müzakirə etmək üçün mütəxəssislərimizlə əlaqə saxlayın.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">Adınız</label>
          <input
            id="name"
            type="text"
            placeholder="Ad və Soyad"
            {...register('name')}
            className={`w-full px-4 py-3.5 rounded-xl border ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-[#0275d8] focus:ring-[#0275d8]/20'} focus:outline-none focus:ring-4 transition-all bg-slate-50 focus:bg-white`}
          />
          {errors.name && <p className="mt-1.5 text-sm text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">E-poçt ünvanınız</label>
          <input
            id="email"
            type="email"
            placeholder="nümunə@email.com"
            {...register('email')}
            className={`w-full px-4 py-3.5 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-[#0275d8] focus:ring-[#0275d8]/20'} focus:outline-none focus:ring-4 transition-all bg-slate-50 focus:bg-white`}
          />
          {errors.email && <p className="mt-1.5 text-sm text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">Mesajınız</label>
          <textarea
            id="message"
            rows={4}
            placeholder="Sizə necə kömək edə bilərik?"
            {...register('message')}
            className={`w-full px-4 py-3.5 rounded-xl border ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-[#0275d8] focus:ring-[#0275d8]/20'} focus:outline-none focus:ring-4 transition-all bg-slate-50 focus:bg-white resize-none`}
          />
          {errors.message && <p className="mt-1.5 text-sm text-red-500">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full flex items-center justify-center gap-2 bg-[#0275d8] hover:bg-[#025aa5] text-white px-8 h-[52px] rounded-xl font-bold transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_8px_20px_rgba(2,117,216,0.2)]"
        >
          {isSubmitting ? 'Göndərilir...' : (
            <>
              Mesajı Göndər
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

        {isSuccess && (
          <div className="mt-2 p-4 bg-emerald-50 text-emerald-700 rounded-xl text-sm font-semibold text-center border border-emerald-100">
            Mesajınız uğurla göndərildi! Qısa zamanda sizinlə əlaqə saxlayacağıq.
          </div>
        )}
      </form>
    </div>
  );
};