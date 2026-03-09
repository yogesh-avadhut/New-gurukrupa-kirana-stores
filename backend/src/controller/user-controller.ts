import {
       createUser,
    findAllUsers,
    findAllAdmin,
    findAllSuperAdmin,
    findAllUsersById,
    updateUserById,
    deleteUserById,
    restoreDeletedUser,
    forgotPasswordgetOtp,
    verifyUser,
    validateEmail
} from "../repository/user-repository.js"


const addnewuser = async function (req: any, res: any) {
    console.log("add user controller called ...")
    console.log(req.body)
    try {
        const newUserData = await createUser(req.body)
        res.send({
            error: false,
            message: "user created successful...",
            data: newUserData
        })
    }
    catch (err: any) {
        res.send({
            error: true,
            message: "user are not created ...",
            errorMessage: err.message
        })
    }
}


const seeAllUsers = async function (req: any, res: any) {
    try {
        const userData = await findAllUsers()
        res.send({
            error: false,
            message: "user fatched successful...",
            data: userData
        })
    }
    catch (err: any) {
        res.send({
            error: true,
            message: "user are not found ...",
            errorMessage: err.message
        })
    }
}

const seeAllAdmin = async function (req: any, res: any) {
    try {
        const userData = await findAllAdmin()
        res.send({
            error: false,
            message: "admin fatched successful...",
            data: userData
        })
    }
    catch (err: any) {
        res.send({
            error: true,
            message: "admin are not found ...",
            errorMessage: err.message
        })
    }
}

const seeAllSuperAdmin = async function (req: any, res: any) {
    try {
        const userData = await findAllSuperAdmin()
        res.send({
            error: false,
            message: "Super Admin fatched successful...",
            data: userData
        })
    }
    catch (err: any) {
        res.send({
            error: true,
            message: "Super Admin are not found ...",
            errorMessage: err.message
        })
    }
}

const seeUserById = async function (req: any, res: any) {
    try {
        const id = req.params.id
        const userData = await findAllUsersById(id)
        res.send({
            error: false,
            message: "user fatched successful...",
            data: userData
        })
    }
    catch (err: any) {
        res.send({
            error: true,
            message: "user are not found ...",
            errorMessage: err.message
        })
    }
}

const modifyUser = async function (req: any, res: any) {
    try {
        const id = req.params.id
        const data = req.body
        const modifyedUser = await updateUserById(id, data)

        res.send({
            error: false,
            message: "user updated successful...",
            data: modifyedUser
        })
    }
    catch (err: any) {
        res.send({
            error: true,
            message: "user are not updated ...",
            errorMessage: err.message
        })
    }
}

const deleteUser = async function (req: any, res: any) {
    try {
        const id = req.params.id
        const deleteduser = await deleteUserById(id)

        res.send({
            error: false,
            message: "user deleted successful...",
            data: deleteduser
        })
    }
    catch (err: any) {
        res.send({
            error: true,
            message: "user are not deleted ...",
            errorMessage: err.message
        })
    }
}

const restoreUser = async function (req: any, res: any) {
    try {
        const id = req.params.id
        const restoreuser = await restoreDeletedUser(id)

        res.send({
            error: false,
            message: "user restored successful...",
            data: restoreuser
        })
    }
    catch (err: any) {
        res.send({
            error: true,
            message: "user are not restored ...",
            errorMessage: err.message
        })
    }
}


const forgotpassword = async function (req: any, res: any) {
    try {
        const sendotp = await forgotPasswordgetOtp(req.body)
        res.send({
            error: false,
            message: "otp send successful...",
            data: sendotp
        })
    }
    catch (err: any) {
        res.send({
            error: true,
            message: "otp are not send ...",
            errorMessage: err.message
        })
    }
}
const validateOtpAndResetPassword = async function (req: any, res: any) {
    try {
        const validate = await verifyUser(req.body)
        res.send({
            error: false,
            message: "password reset successful...",
            data: validate
        })
    }
    catch (err: any) {
        res.send({
            error: true,
            message: "password did not reset...",
            errorMessage: err.message
        })
    }

}

const verifyEmailOtp = async function (req: any, res: any) {
    try {
        const validate = await validateEmail(req.body)
        res.send({
            error: false,
            message: "email verification successful...",
            data: validate
        })
    }
    catch (err: any) {
        res.send({
            error: true,
            message: "otp didnot validate...",
            errorMessage: err.message
        })
    }

}



export { addnewuser, seeAllUsers, seeAllAdmin, seeAllSuperAdmin, seeUserById, modifyUser, deleteUser, restoreUser, forgotpassword, validateOtpAndResetPassword,verifyEmailOtp }

