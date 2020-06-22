import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true
})

const db = mongoose.connection

const handleOpen = () => console.log('✅ Connected to DB!')
const handleErr = () => console.log('❌ Failed to Connect DB!')

db.on('error', handleErr)
db.once('open', handleOpen)

// export const videos = [
// 	{
// 		id: 158273,
// 		title: 'Video Awesome',
// 		description: 'This is fucking awesome',
// 		views: 24,
// 		videoFile: 'https://interactive-examples.mdn.mozilla.net/media/examples/flower.webm',
// 		creator: {
// 			id: 12392,
// 			name: 'Yeom',
// 			email: 'yeom@yeom.com'
// 		}
// 	},
// 	{
// 		id: 345233,
// 		title: 'TestTest',
// 		description: 'This is fucking awesome',
// 		views: 24,
// 		videoFile: 'https://interactive-examples.mdn.mozilla.net/media/examples/flower.webm',
// 		creator: {
// 			id: 12392,
// 			name: 'Yeom',
// 			email: 'yeom@yeom.com'
// 		}
// 	},
// 	{
// 		id: 342613,
// 		title: 'FBI Waring',
// 		description: 'This is fucking awesome',
// 		views: 24,
// 		videoFile: 'https://interactive-examples.mdn.mozilla.net/media/examples/flower.webm',
// 		creator: {
// 			id: 12392,
// 			name: 'Yeom',
// 			email: 'yeom@yeom.com'
// 		}
// 	},
// 	{
// 		id: 1241234,
// 		title: 'Test Video',
// 		description: 'This is fucking awesome',
// 		views: 24,
// 		videoFile: 'https://interactive-examples.mdn.mozilla.net/media/examples/flower.webm',
// 		creator: {
// 			id: 12392,
// 			name: 'Yeom',
// 			email: 'yeom@yeom.com'
// 		}
// 	}
// ]
