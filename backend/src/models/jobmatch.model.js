import mongoose from "mongoose";

const recommendationSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 200,
        },
        description: {
            type: String,
            required: true,
            trim: true,
            maxlength: 2000,
        },
        priority: {
            type: String,
            enum: ["low", "medium", "high"],
            default: "medium",
        },
        category: {
            type: String,
            enum: [
                "skills",
                "keywords",
                "experience",
                "projects",
                "education",
                "formatting",
                "other",
            ],
            default: "other",
        },
    },
    { _id: false }
);

const jobMatchSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        resumeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Resume",
            required: true,
        },
        job: {
            title: {
                type: String,
                trim: true,
                maxlength: 200,
                default: "",
            },
            company: {
                type: String,
                trim: true,
                maxlength: 200,
                default: "",
            },
            location: {
                type: String,
                trim: true,
                maxlength: 200,
                default: "",
            },
            jobType: {
                type: String,
                enum: [
                    "full-time",
                    "part-time",
                    "contract",
                    "internship",
                    "remote",
                    "other",
                ],
                default: "other",
            },
            description: {
                type: String,
                required: true,
                maxlength: 30000,
            },
            sourceUrl: {
                type: String,
                trim: true,
                default: null,
            },
        },
        status: {
            type: String,
            enum: ["pending", "processing", "completed", "failed"],
            default: "pending",
            required: true,
        },
        overallScore: {
            type: Number,
            min: 0,
            max: 100,
            default: null,
        },
        dimensions: {
            skillsMatch: {
                type: Number,
                min: 0,
                max: 100,
                default: null,
            },
            keywordMatch: {
                type: Number,
                min: 0,
                max: 100,
                default: null,
            },
            experienceMatch: {
                type: Number,
                min: 0,
                max: 100,
                default: null,
            },
        },
        matchedSkills: {
            type: [String],
            default: [],
        },
        missingSkills: {
            type: [String],
            default: [],
        },
        matchedRequirements: {
            type: [String],
            default: [],
        },
        missingRequirements: {
            type: [String],
            default: [],
        },
        summary: {
            type: String,
            trim: true,
            maxlength: 5000,
            default: "",
        },
        recommendations: {
            type: [recommendationSchema],
            default: [],
        },
        modelName: {
            type: String,
            default: null,
        },
        errorMessage: {
            type: String,
            default: null,
            select: false,
        },
        completedAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

jobMatchSchema.index({ userId: 1, createdAt: -1 });

jobMatchSchema.index({
    userId: 1,
    resumeId: 1,
    createdAt: -1,
});

const JobMatch = mongoose.model("JobMatch", jobMatchSchema);

export default JobMatch;
