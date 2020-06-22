import express from 'express'
import routes from '../routes'
import {
	deleteVideo,
	home,
	videoDetail,
	getUpload,
	postUpload,
	getEditVideo,
	postEditVideo,
} from '../controllers/videoController'
import { videoUpload } from '../middleware'

const videoRouter = express.Router()

videoRouter.post(routes.uploadVideo, videoUpload, postUpload)
videoRouter.post(routes.editVideo(), postEditVideo)

videoRouter.get(routes.home, home)
videoRouter.get(routes.uploadVideo, getUpload)
videoRouter.get(routes.videoDetail(), videoDetail)
videoRouter.get(routes.editVideo(), getEditVideo)
videoRouter.get(routes.deleteVideo(), deleteVideo)

export default videoRouter
