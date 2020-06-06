export const home = (req, res) => res.render('home', { pageTitle: 'Home' })
export const search = (req, res) => {
	console.log(req)
	const {
		query: { term: searchBy }
	} = req
	res.render('search', { searchBy })
}
export const videos = (req, res) => res.render('some', { pageTitle: 'videos' })
export const upload = (req, res) => res.render('videoUpload', { pageTitle: 'upload' })
export const videoDetail = (req, res) => res.render('some', { pageTitle: 'videoDetail' })
export const editVideo = (req, res) => res.render('some', { pageTitle: 'editVideo' })
export const deleteVideo = (req, res) => res.render('some', { pageTitle: 'deleteVideo' })
