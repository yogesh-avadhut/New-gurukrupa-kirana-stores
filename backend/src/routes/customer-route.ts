import express from "express"
import  { addnewcustomer, seeAllCustomers,seeCustomerById, modifyCustomer, deleteCustomer, restoreCustomer} from "../controller/customer-controller.js"


const customerRouter = express.Router()

//add new customer 
customerRouter.post('/add-customer', addnewcustomer);

//get all customer 
customerRouter.get('/see-all-customers', seeAllCustomers);

//get customer by id 
customerRouter.get('/see-customer-by-id/:id', seeCustomerById);

//update customer 
customerRouter.patch('/update-customer-by-id/:id', modifyCustomer);

//delete customer 
customerRouter.delete('/delete-customer-by-id/:id', deleteCustomer);

//restore customer 
customerRouter.patch('/restore-customer-by-id/:id', restoreCustomer);

export { customerRouter }