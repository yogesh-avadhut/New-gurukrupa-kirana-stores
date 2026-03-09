import {
    createCustomer,
    findAllCustomers,
    findAllCustomersById,
    updateCustomerById,
    deleteCustomerById,
    restoreDeletedCustomer
} from "../repository/customer-repository.js"


const addnewcustomer = async function (req: any, res: any) {
    console.log("add customer controller called ...")
    console.log(req.body)
    try {
        const newCustomerData = await createCustomer(req.body)
        res.send({
            error: false,
            message: "customer created successful...",
            data: newCustomerData
        })
    }
    catch (err: any) {
        res.send({
            error: true,
            message: "customer are not created ...",
            errorMessage: err.message
        })
    }
}


const seeAllCustomers = async function (req: any, res: any) {
    try {
        const customerData = await findAllCustomers()
        res.send({
            error: false,
            message: "customer fatched successful...",
            data: customerData
        })
    }
    catch (err: any) {
        res.send({
            error: true,
            message: "customer are not found ...",
            errorMessage: err.message
        })
    }
}

const seeCustomerById = async function (req: any, res: any) {
    try {
        const id = req.params.id
        const customerData = await findAllCustomersById(id)
        res.send({
            error: false,
            message: "customer fatched successful...",
            data: customerData
        })
    }
    catch (err: any) {
        res.send({
            error: true,
            message: "customer are not found ...",
            errorMessage: err.message
        })
    }
}

const modifyCustomer = async function (req: any, res: any) {
    try {
        const id = req.params.id
        const data = req.body
        const modifyedCustomer = await updateCustomerById(id, data)

        res.send({
            error: false,
            message: "customer updated successful...",
            data: modifyedCustomer
        })
    }
    catch (err: any) {
        res.send({
            error: true,
            message: "customer are not updated ...",
            errorMessage: err.message
        })
    }
}

const deleteCustomer = async function (req: any, res: any) {
    try {
        const id = req.params.id
        const deletedcustomer = await deleteCustomerById(id)

        res.send({
            error: false,
            message: "customer deleted successful...",
            data: deletedcustomer
        })
    }
    catch (err: any) {
        res.send({
            error: true,
            message: "customer are not deleted ...",
            errorMessage: err.message
        })
    }
}

const restoreCustomer = async function (req: any, res: any) {
    try {
        const id = req.params.id
        const restorecustomer = await restoreDeletedCustomer(id)

        res.send({
            error: false,
            message: "customer restored successful...",
            data: restorecustomer
        })
    }
    catch (err: any) {
        res.send({
            error: true,
            message: "customer are not restored ...",
            errorMessage: err.message
        })
    }
}


export { addnewcustomer, seeAllCustomers,seeCustomerById, modifyCustomer, deleteCustomer, restoreCustomer}

