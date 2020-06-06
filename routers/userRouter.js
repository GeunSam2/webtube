import express from 'express'
import routes from '../routes'
import { userlist, userdetail, edituser, changepassword } from '../controllers/userController'

const userRouter = express.Router()

userRouter.get(routes.home, userlist)
userRouter.get(routes.editProfile, edituser)
userRouter.get(routes.changePassword, changepassword)
userRouter.get(routes.userDetail, userdetail)

export default userRouter
