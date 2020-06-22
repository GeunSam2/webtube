import routes from './routes'
import multer from 'multer'

const multerUpload = multer({ dest: 'uploads/videos' })

export const videoUpload = multerUpload.single('video')

export const localsMiddleware = (req, res, next) => {
	res.locals.siteName = 'WebTube'
	res.locals.routes = routes
	res.locals.users = {
		id: 1,
		authIsYes: true
	}
	next()
}
