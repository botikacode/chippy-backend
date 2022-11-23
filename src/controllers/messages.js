import {connection} from '../database'

export const getUserMessages = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT * FROM messages WHERE userId =?', [req.params.userId]);
    res.json(result);
}

export const getChatMessages = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT * FROM messages WHERE chatId =?', [req.params.chatId]);
    res.json(result);
}

export const getMessages = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT * FROM messages');
    res.json(result);
}

export const saveMessage = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query("INSERT INTO messages(content, userId, mDate, chatId) VALUES (?,?,?, ?)", [
        req.body.content || "",
        req.body.userId || "",
        req.body.mDate || "",
        req.body.chatId || ""
    ]);
    res.json({
        id: result.insertId,
        ...req.body,
    });
}