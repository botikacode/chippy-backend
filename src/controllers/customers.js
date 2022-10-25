import {connection} from '../database'


export const getCustomers = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT * FROM jobs');
    res.json(result);
}

export const getCustomer = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT * FROM jobs WHERE id =?', [req.params.id]);
    res.json(result[0]);
}

export const getCustomersCount = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT COUNT(*) FROM jobs');
    res.json(result[0]["COUNT(*)"]);
}

export const saveCustomer = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query("INSERT INTO jobs(lastName, firstName, address, city, image, description, phone, email, web, petId, isShelter) VALUES (?,?,?,?,?,?,?,?,?,?,?)", [
        req.body.lastName,
        req.body.firstName,
        req.body.address,
        req.body.city,
        req.body.image,
        req.body.description,
        req.body.phone,
        req.body.email,
        req.body.web,
        req.body.petId,
        req.body.isShelter
    ]);
    res.json({
        id: result.insertId,
        ...req.body,
    });
}

export const deleteCustomer = async (req, res) => {
    const conn = await connection();
    await conn.query("DELETE customers WHERE id = ?", [req.params.id])
    res.sendStatus(204);
}

export const updateCustomer = async (req, res) => {
    const conn = await connection();
    await conn.query('UPDATE customers SET ? WHERE id = ?', [
        req.body,
        req.params.id
    ]);
    console.log(result)
    res.sendStatus(204);
}