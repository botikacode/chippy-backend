import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import jobsRoutes from './routes/jobs';

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(jobsRoutes);

export default app