import {connection} from '../database'


export const getMessages = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT * FROM messages');
    res.json(result);
}

export const saveMessage = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query("INSERT INTO messages(content, userId, mDate) VALUES (?,?,?)", [
        req.body.content || "",
        req.body.userId || "",
        req.body.mDate || ""
    ]);
    res.json({
        id: result.insertId,
        ...req.body,
    });
}