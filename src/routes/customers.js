import { Router } from 'express';
import { deleteCustomer, getCustomers, getCustomersCount, getCustomer, saveCustomer, updateCustomer } from '../controllers/customers';

const router = Router()

router.get('/customers', getCustomers)
router.get('/customers/count', getCustomersCount)
router.get('/customers/:id', getCustomer)
router.post('/customers', saveCustomer)
router.delete('/customers/:id', deleteCustomer)
router.put('/customers/:id', updateCustomer)

export default router