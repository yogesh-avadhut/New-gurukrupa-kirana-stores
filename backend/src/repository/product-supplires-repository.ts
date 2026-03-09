import { supplierModel } from "../model/product-supplires-model.js";
import bcrypt from "bcrypt";
import { sendForgotPasswordVerificationCode, sendVerificationCode } from "../email/email.js";

const createSupplier = async function (supplierdata: any) {
    const addSupplier = await supplierModel.create({
        suppliername: supplierdata.suppliername,
        email: supplierdata.email,
        purpuse: supplierdata.purpuse,
        mobile: supplierdata.mobile,
        address: supplierdata.address,
        totalPaidAmount: supplierdata.totalPaidAmount,
        pendingAmount: supplierdata.pendingAmount
    })

    return addSupplier
}


const findAllSuppliers = async function () {
    const supplierData = await supplierModel.find({ status: "active" });
    return supplierData;
};


const findAllSuppliersById = async function (id: string) {
    const supplierData = await supplierModel.findById(id)
    return supplierData;
};

const updateSupplierById = async function (id: string, data: any) {
    const updatedSupplier = await supplierModel.findByIdAndUpdate(
        id,
        {
            status: "active"
        },
        data
    )
    updatedSupplier
}

const deleteSupplierById = async function (id: string) {
    const deletedSupplier = await supplierModel.findByIdAndUpdate(
        id,
        { $set: { status: "inactive" } },
        { new: true }
    )
    return deletedSupplier
}

const restoreDeletedSupplier = async function (id: string) {
    const restoredSupplier = await supplierModel.findByIdAndUpdate(
        id,
        { $set: { status: "active" } },
        { new: true }
    )
    return restoredSupplier
}


const updatePassword = async function (id: any, data: any) {

    const passwordHash = await bcrypt.hash(data.password, 10);
    const updatepass = await supplierModel.findByIdAndUpdate(
        id,
        { $set: { password: passwordHash } },
        { new: true }
    )
    return updatepass
}


const verifySupplier = async function (data: any) {
    let code = data.code
    const verifycode = await supplierModel.findOne({ verificationCode: code })
    if (!verifycode) {
        throw new Error("please enter valid otp ...")
    }
    let id = verifycode._id
    let password = data.password
    updatePassword(id, password)
}

const validateEmail = async function (data: any) {
    const isavaliablesupplier = await supplierModel.findOne({ verificationCode: data.otp })
    if (!isavaliablesupplier) {
        throw new Error("wrong otp enter a vlidate otp ....")
    }
    const id = isavaliablesupplier._id
    const setValidation = await supplierModel.findOneAndUpdate(
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
    createSupplier,
    findAllSuppliers,
    findAllSuppliersById,
    updateSupplierById,
    deleteSupplierById,
    restoreDeletedSupplier,
    verifySupplier,
    validateEmail
}