import { z } from "zod";

// Validate MongoDB ObjectId strings
const objectIdSchema = z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, "Invalid MongoDB ObjectId");

// Validate the job details entered by the user
const jobDetailsSchema = z.object({
    title: z
        .string()
        .trim()
        .max(200, "Job title cannot exceed 200 characters")
        .default(""),

    company: z
        .string()
        .trim()
        .max(200, "Company name cannot exceed 200 characters")
        .default(""),

    location: z
        .string()
        .trim()
        .max(200, "Location cannot exceed 200 characters")
        .default(""),

    jobType: z
        .enum([
            "full-time",
            "part-time",
            "contract",
            "internship",
            "remote",
            "other",
        ])
        .default("other"),

    description: z
        .string()
        .trim()
        .min(50, "Job description must contain at least 50 characters")
        .max(30000, "Job description cannot exceed 30000 characters"),

    sourceUrl: z
        .string()
        .trim()
        .url("Enter a valid job URL")
        .nullable()
        .optional(),
});

// Validate one recommendation returned by analysis logic
const recommendationSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, "Recommendation title is required")
        .max(200),

    description: z
        .string()
        .trim()
        .min(1, "Recommendation description is required")
        .max(2000),

    priority: z
        .enum(["low", "medium", "high"])
        .default("medium"),

    category: z
        .enum([
            "skills",
            "keywords",
            "experience",
            "projects",
            "education",
            "formatting",
            "other",
        ])
        .default("other"),
});

// Validate a score between 0 and 100
const scoreSchema = z
    .number()
    .min(0, "Score cannot be less than 0")
    .max(100, "Score cannot exceed 100")
    .nullable()
    .optional();

// Validate the analysis results
const jobMatchResultSchema = z.object({
    status: z.enum([
        "pending",
        "processing",
        "completed",
        "failed",
    ]),

    overallScore: scoreSchema,

    dimensions: z.object({
        skillsMatch: scoreSchema,
        keywordMatch: scoreSchema,
        experienceMatch: scoreSchema,
    }).optional(),

    matchedSkills: z.array(
        z.string().trim().min(1).max(100)
    ).default([]),

    missingSkills: z.array(
        z.string().trim().min(1).max(100)
    ).default([]),

    matchedRequirements: z.array(z.string()).default([]),

    missingRequirements: z.array(z.string()).default([]),

    summary: z.string().max(5000).default(""),

    recommendations: z
        .array(recommendationSchema)
        .default([]),

    modelName: z.string().nullable().optional(),

    completedAt: z
        .union([z.string().datetime(), z.date(), z.null()])
        .optional(),
});

// Frontend request: only the resume ID and job details
export const createJobMatchSchema = z.object({
    resumeId: objectIdSchema,
    job: jobDetailsSchema,
});

// Validate a Job Match document's result fields
export const jobMatchResultValidator = jobMatchResultSchema;

// Validate a Job Match ID for routes such as GET /:id
export const jobMatchIdSchema = z.object({
    jobMatchId: objectIdSchema,
});
