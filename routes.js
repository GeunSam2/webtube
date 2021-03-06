//Global
const HOME = '/'
const JOIN = '/join'
const LOGIN = '/login'
const LOGOUT = '/logout'
const SEARCH = '/search'

//Users
const USERS = '/users'
const USER_DETAIL = '/:id'
const EDIT_PROFILE = '/edit-profile'
const CHANGE_PASSWORD = '/changepassword'

//Videos
const VIDEOS = '/videos'
const UPLOAD_VIDEOS = '/upload'
const VIDEOS_DETAIL = '/:id'
const EDIT_VIDEOS = '/:id/edit'
const DELETE_VIDEOS = ':id/delete'

const routes = {
	home: HOME,
	join: JOIN,
	login: LOGIN,
	logout: LOGOUT,
	search: SEARCH,
	users: USERS,
	userDetail: (id) => {
		if (id) {
			return `/users/${id}`
		} else {
			return USER_DETAIL
		}
	},
	editProfile: EDIT_PROFILE,
	changePassword: CHANGE_PASSWORD,
	videos: VIDEOS,
	uploadVideo: UPLOAD_VIDEOS,
	videoDetail: (id) => {
		if (id) {
			return `/videos/${id}`
		} else {
			return VIDEOS_DETAIL
		}
	},
	editVideo: (id) => {
		if (id) {
			return `/videos/${id}/edit`
		} else {
			return EDIT_VIDEOS
		}
	},
	deleteVideo: (id) => {
		if (id) {
			return `/videos/${id}/delete`
		} else {
			return DELETE_VIDEOS
		}
	}
}

export default routes
