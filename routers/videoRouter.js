import express from 'express'
import routes from '../routes'
import { deleteVideo, home, upload, videoDetail, editVideo } from '../controllers/videoController'

const videoRouter = express.Router()

videoRouter.get(routes.home, home)
videoRouter.get(routes.uploadVideo, upload)
videoRouter.get(routes.videoDetail, videoDetail)
videoRouter.get(routes.editVideo, editVideo)
videoRouter.get(routes.deleteVideo, deleteVideo)

export default videoRouter
