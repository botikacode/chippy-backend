import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import jobsRoutes from './routes/jobs';
import customersRoutes from './routes/customers';

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(jobsRoutes);
app.use(customersRoutes);

export default app