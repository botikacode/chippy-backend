import {connection} from '../database'


export const getPets = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT * FROM pets');
    res.json(result);
}

export const getPet = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT * FROM pets WHERE id =?', [req.params.id]);
    res.json(result[0]);
}

export const getPetsCount = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT COUNT(*) FROM pets');
    res.json(result[0]["COUNT(*)"]);
}

export const savePet = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query("INSERT INTO pets(petName, petType, description, image, ownerId) VALUES (?,?,?,?,?)", [
        req.body.petName,
        req.body.petType,
        req.body.description,
        req.body.image,
        req.body.ownerId
    ]);
    res.json({
        id: result.insertId,
        ...req.body,
    });
}

export const deletePet = async (req, res) => {
    const conn = await connection();
    await conn.query("DELETE FROM pets WHERE id = ?", [req.params.id])
    res.sendStatus(204);
}

export const updatePet = async (req, res) => {
    const conn = await connection();
    await conn.query('UPDATE pets SET ? WHERE id = ?', [
        req.body,
        req.params.id
    ]);
    console.log(result)
    res.sendStatus(204);
}