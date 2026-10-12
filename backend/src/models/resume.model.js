import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 150
    },
    originalFileName: {
        type: String,
        required: true,
        trim: true,
    },
    fileUrl: {
        type: String,
        required: true,
    },
    fileType: {
        type: String,
        required: true,
        enum: ["pdf", "doc", "docx"]
    },
    fileSize: {
        type: Number,
        required: true,
        min: 1,
    },
    score: {
        type: Number,
        min: 0,
        max: 100,
        default: null
    },
    lastAnalyzed: {
        type: Date,
        default: null
    }
},
    {
        timestamps: true
    }
);


resumeSchema.index({ userId: 1, createdAt: -1 });

const Resume = mongoose.model('Resume', resumeSchema);

export default Resume;