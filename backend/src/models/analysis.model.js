import mongoose, { modelNames } from "mongoose";

const analysisSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    resumeId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Resume"
    },
    status: {
        type: String,
        enum: ["pending", "processing", "completed", "failed"],
        default: "pending",
        required: true
    },
    overAllScore: {
        type: Number,
        min: 0,
        max: 100,
        default: null
    },
    scores: {
        atsCompatibility: {
            type: Number,
            min: 0,
            max: 100,
            default: null
        },
        skills: {
            type: Number,
            min: 0,
            max: 100,
            default: null
        },
        experience: {
            type: Number,
            min: 0,
            max: 100,
            default: null,
        },
        formatting: {
            type: Number,
            min: 0,
            max: 100,
            default: null
        }
    },
    summary: {
        type: String,
        default: ""
    },
    extractedSkills: {
        type: [String],
        default: []
    },
    missingSkills: {
        type: [String],
        default: []
    },
    suggestion: [
        {
            category: {
                type: String,
                enum: ["skills", "experience", "education", "projects", "formatting", "general"],
                required: true,
            },
            title: {
                type: String,
            },
            description: {
                type: String
            },
            priority: {
                type: String,
                enum: ["low", "medium", "high"],
                default: "medium"
            },
        },
    ],
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
    }
},
    {
        timestamps: true
    }
);

analysisSchema.index({ userId: 1, createdAt: -1 });

analysisSchema.index({ userId: 1, resumeId: 1, createdAt: -1 });

const Analysis = mongoose.model("Analysis", analysisSchema);

export default Analysis;
