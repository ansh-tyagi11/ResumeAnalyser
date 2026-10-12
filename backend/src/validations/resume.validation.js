import { z } from "zod";
import mongoose from "mongoose";

export const resumeSchema = z.object({
    userId: z.string()
        .refine(
            (id) => mongoose.isObjectIdOrHexString(id),
            "Invalid user ID"
        ),

    title: z.string()
        .trim()
        .min(1, "Resume title is required")
        .max(150, "Title cannot exceed 150 characters"),

    originalFileName: z.string()
        .trim()
        .min(1, "Resume file name is required")
        .max(255, "File name cannot exceed 255 characters"),

    fileUrl: z.string()
        .trim()
        .min(1, "File URL is required"),

    fileType: z.enum(["pdf", "doc", "docx"], {
        message: "File type must be pdf, doc, or docx",
    }),

    fileSize: z.number()
        .int("File size must be an integer")
        .positive("File size must be greater than zero"),
});
