import {connection} from '../database'


export const getPetJobs = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT * FROM petJobs');
    res.json(result);
}

export const getPetJobByJobId = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT * FROM petJobs WHERE jobId =?', [req.params.jobId]);
    res.json(result[0]);
}

export const savePetJob = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query("INSERT INTO petJobs(petId, jobId) VALUES (?,?)", [
        req.body.petId,
        req.body.jobId
    ]);
    res.json({
        id: result.insertId,
        ...req.body,
    });
}

export const deletePetJob = async (req, res) => {
    const conn = await connection();
    await conn.query("DELETE FROM petJobs WHERE id = ?", [req.params.id])
    res.sendStatus(204);
}

export const updatePetJob = async (req, res) => {
    const conn = await connection();
    await conn.query('UPDATE petJobs SET ? WHERE id = ?', [
        req.body,
        req.params.id
    ]);
    console.log(result)
    res.sendStatus(204);
}
