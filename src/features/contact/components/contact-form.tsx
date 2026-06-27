'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormValues } from '../schemas/contact';
import { Send } from 'lucide-react';
import { useState } from 'react';

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div>
      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">Bizə Yazın</h3>
      <p className="text-slate-500 dark:text-slate-400 mb-8 transition-colors">İT ehtiyaclarınızı müzakirə etmək üçün mütəxəssislərimizlə əlaqə saxlayın.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {[
          { name: 'name', label: 'Adınız', placeholder: 'Ad və Soyad', type: 'text' },
          { name: 'email', label: 'E-poçt ünvanınız', placeholder: 'nümunə@email.com', type: 'email' },
        ].map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 transition-colors">
              {field.label}
            </label>
            <input
              id={field.name}
              type={field.type}
              placeholder={field.placeholder}
              {...register(field.name as keyof ContactFormValues)}
              className={`w-full px-4 py-3.5 rounded-xl border transition-all ${
                errors[field.name as keyof ContactFormValues] 
                ? 'border-red-500 focus:ring-red-200' 
                : 'border-slate-200 dark:border-slate-800 focus:border-[#0275d8] dark:focus:border-[#3b82f6] focus:ring-[#0275d8]/20 bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white'
              }`}
            />
            {errors[field.name as keyof ContactFormValues] && (
              <p className="mt-1.5 text-sm text-red-500">{errors[field.name as keyof ContactFormValues]?.message}</p>
            )}
          </div>
        ))}

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 transition-colors">Mesajınız</label>
          <textarea
            id="message"
            rows={4}
            placeholder="Sizə necə kömək edə bilərik?"
            {...register('message')}
            className={`w-full px-4 py-3.5 rounded-xl border transition-all ${
              errors.message ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 dark:border-slate-800 focus:border-[#0275d8] dark:focus:border-[#3b82f6] focus:ring-[#0275d8]/20 bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white resize-none'
            }`}
          />
          {errors.message && <p className="mt-1.5 text-sm text-red-500">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full flex items-center justify-center gap-2 bg-[#0275d8] dark:bg-[#3b82f6] hover:bg-[#025aa5] dark:hover:bg-[#2563eb] text-white px-8 h-13 rounded-xl font-bold transition-all disabled:opacity-70 shadow-[0_8px_20px_rgba(2,117,216,0.2)]"
        >
          {isSubmitting ? 'Göndərilir...' : (
            <>
              Mesajı Göndər
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

        {isSuccess && (
          <div className="mt-2 p-4 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-xl text-sm font-semibold text-center border border-emerald-100 dark:border-emerald-500/20">
            Mesajınız uğurla göndərildi!
          </div>
        )}
      </form>
    </div>
  );
};