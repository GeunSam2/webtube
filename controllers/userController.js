export const join = (req, res) => res.render('join', { pageTitle: 'join' })
export const login = (req, res) => res.render('login', { pageTitle: 'login' })
export const logout = (req, res) => res.render('home', { pageTitle: 'logout' })
export const edituser = (req, res) => res.render('editProfile', { pageTitle: 'EditUser' })
export const userlist = (req, res) => res.render('home', { pageTitle: 'UserList' })
export const userdetail = (req, res) => res.render('home', { pageTitle: 'UserDetail' })
export const changepassword = (req, res) => res.render('home', { pageTitle: 'ChangePassword' })
