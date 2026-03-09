import express from "express"
import {
    addnewuser,
    seeAllUsers,
    seeAllAdmin,
    seeAllSuperAdmin,
    seeUserById,
    modifyUser,
    deleteUser,
    restoreUser,
    forgotpassword,
    validateOtpAndResetPassword,
    verifyEmailOtp
} from "../controller/user-controller.js"

const userRouter = express.Router()

userRouter.post('/add-user', addnewuser);

userRouter.get('/see-all-users', seeAllUsers);
userRouter.get('/see-all-admin', seeAllAdmin);
userRouter.get('/see-all-superAdmin', seeAllSuperAdmin);

userRouter.get('/see-user-by-id/:id', seeUserById);

userRouter.patch('/update-user-by-id/:id', modifyUser);

userRouter.delete('/delete-user-by-id/:id', deleteUser);

userRouter.patch('/restore-user-by-id/:id', restoreUser);

//validate email
userRouter.post('/varifyemail', verifyEmailOtp)

//send mail to reset password 
userRouter.post('/forgot-password', forgotpassword)

//validate otp and set password 
userRouter.post('/validate-otp-set-password', validateOtpAndResetPassword)


export { userRouter }