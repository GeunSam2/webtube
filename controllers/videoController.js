import routes from '../routes.js'
import videos from '../models/Videos'

export const home = async (req, res) => {
	try {
		const video = await videos.find({})
		res.render('home', { pageTitle: 'Home', video })
	} catch (error) {
		console.log(error)
		res.render('home', { pageTitle: 'Home', video: [] })
	}
}
export const search = (req, res) => {
	//console.log(req)
	const {
		query: { term: searchBy },
	} = req
	res.render('search', { searchBy })
}
export const getUpload = (req, res) => res.render('videoUpload', { pageTitle: 'upload' })
export const postUpload = async (req, res) => {
	const {
		file,
		body: { title, description },
	} = req
	//console.log(file.path, title, description)
	const newVideo = await videos.create({
		fileUrl: file.path,
		title,
		description,
	})
	console.log(newVideo)
	res.redirect(routes.videoDetail(newVideo.id))
}
export const videoDetail = async (req, res) => {
	const {
		params: { id },
	} = req
	try {
		const video = await videos.findById(id)
		console.log(video)
		res.render('videoDetail', { pageTitle: 'videoDetail', Video: video })
	} catch (error) {
		console.log(error)
		res.redirect(routes.home)
	}
}
export const getEditVideo = (req, res) => {
	const {
		params: { id },
	} = req
	res.render('editVideo', { pageTitle: 'editVideo', id })
}

export const postEditVideo = (req, res) => {
	res.redirect(routes.home)
}
export const deleteVideo = (req, res) => res.render('some', { pageTitle: 'deleteVideo' })
