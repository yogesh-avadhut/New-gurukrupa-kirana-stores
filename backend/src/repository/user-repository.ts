import { userModel } from "../model/user-model.js";
import bcrypt from "bcrypt";
import { sendForgotPasswordVerificationCode, sendVerificationCode } from "../email/email.js";

const createUser = async function (userdata: any) {
    const passwordHash = await bcrypt.hash(userdata.password, 10);
    const VerificationCode = Math.floor(100000 + Math.random() * 900000).toString()
    const addUser = await userModel.create({
        username: userdata.username,
        email: userdata.email,
        password: passwordHash,
        role: userdata.role,
        verificationCode: VerificationCode
    })
    await sendVerificationCode(addUser.email, VerificationCode);
    return addUser
}

const forgotPasswordgetOtp = async function (userdata: any) {
    const useravaliable = await userModel.findOne({ email: userdata.email })
    if (!useravaliable) {
        throw new Error("user not exist .....")
    }
    const user_id = useravaliable._id
    const VerificationCode = Math.floor(100000 + Math.random() * 900000).toString()

    const setCode = await userModel.findByIdAndUpdate(
        user_id,
        { $set: { verificationCode: VerificationCode } },
        { new: true }
    )
    await sendForgotPasswordVerificationCode(useravaliable.email, VerificationCode);
    return setCode
}

const findAllUsers = async function () {
    const userData = await userModel.find({ status: "active" });
    return userData;
};

const findAllAdmin = async function () {
    const employeeData = await userModel.find({ status: "active", role: "admin" })
    return employeeData
}

const findAllSuperAdmin = async function () {
    const tlData = await userModel.find({ status: "active", role: "superAdmin" })
    return tlData
}


const findAllUsersById = async function (id: string) {
    const userData = await userModel.findById(id)
    return userData;
};

const updateUserById = async function (id: string, data: any) {
    const updatedUser = await userModel.findByIdAndUpdate(
        id,
        {
            status: "active"
        },
        data
    )
    updatedUser
}

const deleteUserById = async function (id: string) {
    const deletedUser = await userModel.findByIdAndUpdate(
        id,
        { $set: { status: "inactive" } },
        { new: true }
    )
    return deletedUser
}

const restoreDeletedUser = async function (id: string) {
    const restoredUser = await userModel.findByIdAndUpdate(
        id,
        { $set: { status: "active" } },
        { new: true }
    )
    return restoredUser
}


const updatePassword = async function (id: any, data: any) {

    const passwordHash = await bcrypt.hash(data.password, 10);
    const updatepass = await userModel.findByIdAndUpdate(
        id,
        { $set: { password: passwordHash } },
        { new: true }
    )
    return updatepass
}


const verifyUser = async function (data: any) {
    let code = data.code
    const verifycode = await userModel.findOne({ verificationCode: code })
    if (!verifycode) {
        throw new Error("please enter valid otp ...")
    }
    let id = verifycode._id
    let password = data.password
    updatePassword(id, password)
}

const validateEmail = async function (data: any) {
    const isavaliableuser = await userModel.findOne({ verificationCode: data.otp })
    if (!isavaliableuser) {
        throw new Error("wrong otp enter a vlidate otp ....")
    }
    const id = isavaliableuser._id
    const setValidation = await userModel.findOneAndUpdate(
        id,
        {
            $set: {
                verificationCode: null,
                isVerifiedEmail: true
            }
        }

    )
    return setValidation
}




export {
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
}