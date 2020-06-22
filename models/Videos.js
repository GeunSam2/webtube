import mongoose from 'mongoose'

const VideoSchema = new mongoose.Schema({
	fileUrl: {
		type: String,
		required: 'File Url Is Required',
	},
	title: {
		type: String,
		required: 'Title Is Required',
	},
	description: {
		type: String,
	},
	views: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Comment',
		},
	],
})

const model = mongoose.model('videos', VideoSchema)

export default model
