import {connection} from '../database'


export const getMessages = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT * FROM messages');
    res.json(result);
}