import {connection} from '../database'


export const getUserComments = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT * FROM comments WHERE profileOwnerId =?', [req.params.profileOwnerId]);
    res.json(result);
}

export const getComments = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT * FROM comments');
    res.json(result);
}

export const getComment = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT * FROM comments WHERE id =?', [req.params.id]);
    res.json(result[0]);
}

export const getCommentsCount = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT COUNT(*) FROM comments');
    res.json(result[0]["COUNT(*)"]);
}

export const saveComment = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query("INSERT INTO comments(content, profileOwnerId, commentatorId) VALUES (?,?,?)", [
        req.body.content || "",
        req.body.profileOwnerId || "",
        req.body.commentatorId || ""
    ]);
    res.json({
        id: result.insertId,
        ...req.body,
    });
}

export const deleteComment = async (req, res) => {
    const conn = await connection();
    await conn.query("DELETE comments WHERE id = ?", [req.params.id])
    res.sendStatus(204);
}

export const updateComment = async (req, res) => {
    const conn = await connection();
    await conn.query('UPDATE comments SET ? WHERE id = ?', [
        req.body,
        req.params.id
    ]);
    console.log(result)
    res.sendStatus(204);
}
