import { customerModel } from "../model/customer-model.js";
import { sendWelcomeEmailToCustomer } from "../email/email.js";

const createCustomer = async function (customerdata: any) {
    const addCustomer = await customerModel.create({
        customername: customerdata.customername,
        email: customerdata.email,
        mobile: customerdata.mobile,
        address: customerdata.address,
        pendingBalance: customerdata.pendingBalance
    })
    await sendWelcomeEmailToCustomer(addCustomer.email, addCustomer.customername);
    return addCustomer
}

const findAllCustomers = async function () {
    const customerData = await customerModel.find({ status: "active" });
    return customerData;
};


const findAllCustomersById = async function (id: string) {
    const customerData = await customerModel.findById(id)
    return customerData;
};

const updateCustomerById = async function (id: string, data: any) {
    const updatedCustomer = await customerModel.findByIdAndUpdate(
        id,
        {
            status: "active"
        },
        data
    )
    updatedCustomer
}

const deleteCustomerById = async function (id: string) {
    const deletedCustomer = await customerModel.findByIdAndUpdate(
        id,
        { $set: { status: "inactive" } },
        { new: true }
    )
    return deletedCustomer
}

const restoreDeletedCustomer = async function (id: string) {
    const restoredCustomer = await customerModel.findByIdAndUpdate(
        id,
        { $set: { status: "active" } },
        { new: true }
    )
    return restoredCustomer
}


export {
    createCustomer,
    findAllCustomers,
    findAllCustomersById,
    updateCustomerById,
    deleteCustomerById,
    restoreDeletedCustomer
}