import routes from '../routes'
export const getJoin = (req, res) => {
	res.render('join', { pageTitle: 'join' })
}
export const postJoin = (req, res) => {
	const {
		body: { password, password2 }
	} = req
	if (password !== password2) {
		res.status(400)
		res.redirect(routes.join)
	} else {
		res.redirect(routes.home)
	}
}
export const getLogin = (req, res) => res.render('login', { pageTitle: 'login' })
export const postLogin = (req, res) => {
	const {
		body: { email, password }
	} = req
	const user1 = {
		email: 'ggg03062@naver.com',
		password: 'ygc=016403'
	}
	if (email === user1.email && password === user1.password) {
		res.redirect(routes.home)
	} else {
		res.status('400')
		res.render('login')
	}
}
export const logout = (req, res) => {
	//need to make logout
	res.redirect(routes.home)
}
export const edituser = (req, res) => res.render('editProfile', { pageTitle: 'EditUser' })
export const userlist = (req, res) => res.render('home', { pageTitle: 'UserList' })
export const userdetail = (req, res) => res.render('userDetail', { pageTitle: 'UserDetail' })
export const changepassword = (req, res) => res.render('changePassword', { pageTitle: 'ChangePassword' })
