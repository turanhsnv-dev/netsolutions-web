import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, { message: 'Ad ən azı 2 simvoldan ibarət olmalıdır' }),
  email: z.string().email({ message: 'Düzgün e-poçt ünvanı daxil edin' }),
  message: z.string().min(10, { message: 'Mesajınız ən azı 10 simvoldan ibarət olmalıdır' }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;