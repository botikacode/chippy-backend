import {connection} from '../database'

export const getPetsJob = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT * FROM petJobs WHERE jobId =?', [req.params.id]);
    res.json(result);
}

export const addPetJob = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query("INSERT INTO petJobs(jobId, petId) VALUES (?,?)", [
        req.body.jobId,
        req.body.petId
    ]);
    res.json({
        id: result.insertId,
        ...req.body,
    });
}

export const getJobs = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT * FROM jobs');
    res.json(result);
}

export const getJobsUser = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT * FROM jobs WHERE requesterId =?', [req.params.id])
    res.json(result);
}

export const getJobsNotUser = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT * FROM jobs WHERE requesterId <>? AND interestedId IS NULL', [req.params.id])
    res.json(result);
}

export const getJob = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT * FROM jobs WHERE id =?', [req.params.id]);
    res.json(result[0]);
}

export const getJobsCount = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT COUNT(*) FROM jobs');
    res.json(result[0]["COUNT(*)"]);
}

export const saveJob = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query("INSERT INTO jobs(title, description, price, jobType, requesterId) VALUES (?,?,?,?,?)", [
        req.body.title,
        req.body.description,
        req.body.price,
        req.body.jobType,
        req.body.requesterId
    ]);
    res.json({
        id: result.insertId,
        ...req.body,
    });
}

export const deleteJob = async (req, res) => {
    const conn = await connection();
    await conn.query("DELETE FROM jobs WHERE id = ?", [req.params.id])
    res.sendStatus(204);
}

export const updateJob = async (req, res) => {
    const conn = await connection();
    await conn.query('UPDATE jobs SET ? WHERE id = ?', [
        req.body,
        req.params.id
    ]);
    res.sendStatus(204);
}
