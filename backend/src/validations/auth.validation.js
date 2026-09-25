import { z } from 'zod';

export const signUpSchema = z.object({
    name: z.string().min(1).max(255).trim(),
    email: z.string().min(1).max(255).trim(),
    password: z.string().min(8).max(12).trim(),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ['confirmPassword']
})

export const loginSchema = z.object({
    email: z.string().min(1).max(255).trim(),
    password: z.string().min(8).max(12).trim(),
})
