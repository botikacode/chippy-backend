import {connection} from '../database'


export const getJobs = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT * FROM jobs');
    res.json(result);
}

export const getJob = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT * FROM jobs WHERE id =?', [req.params.id]);
    res.json(result[0]);
}

export const getJobCount = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT COUNT(*) FROM jobs');
    res.json(result[0]["COUNT(*)"]);
}

export const saveJob = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query("INSERT INTO jobs(title, description, price) VALUES (?,?,?)", [
        req.body.title,
        req.body.description,
        req.body.price
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
    console.log(result)
    res.sendStatus(204);
}