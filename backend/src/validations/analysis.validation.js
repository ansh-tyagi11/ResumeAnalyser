import { z } from "zod";

const objectIdSchema = z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, "Invalid MongoDB ObjectId");

const scoreSchema = z
    .number()
    .min(0, "Score cannot be less than 0")
    .max(100, "Score cannot exceed 100")
    .nullable()
    .optional();

const suggestionSchema = z.object({
    category: z.enum([
        "skills",
        "experience",
        "education",
        "projects",
        "formatting",
        "general",
    ]),

    title: z.string()
        .trim()
        .min(1, "Suggestion title is required")
        .max(200),

    description: z.string()
        .trim()
        .min(1, "Suggestion description is required")
        .max(2000),

    priority: z.enum(["low", "medium", "high"])
        .default("medium"),
});

export const analysisSchema = z.object({
    userId: objectIdSchema,

    resumeId: objectIdSchema,

    status: z.enum([
        "pending",
        "processing",
        "completed",
        "failed",
    ]).default("pending"),

    overallScore: scoreSchema,

    scores: z.object({
        atsCompatibility: scoreSchema,
        skills: scoreSchema,
        experience: scoreSchema,
        formatting: scoreSchema,
    }).optional(),

    summary: z.string().max(10000).default(""),

    extractedSkills: z.array(
        z.string().trim().min(1).max(100)
    ).default([]),

    missingSkills: z.array(
        z.string().trim().min(1).max(100)
    ).default([]),

    suggestions: z.array(suggestionSchema).default([]),

    modelName: z.string().max(200).nullable().optional(),

    errorMessage: z.string().max(5000).nullable().optional(),

    completedAt: z.union([
        z.string().datetime(),
        z.null(),
    ]).optional(),
});

export const createAnalysisSchema = z.object({
    resumeId: objectIdSchema,
});

export const analysisIdSchema = z.object({
    analysisId: objectIdSchema,
});