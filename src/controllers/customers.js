import {connection} from '../database'


export const getCustomers = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT * FROM customers');
    res.json(result);
}

export const getCustomer = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT * FROM customers WHERE id =?', [req.params.id]);
    res.json(result[0]);
}

export const getCustomerWithPass = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT * FROM customers WHERE email =? AND password =?', [req.params.email, req.params.password]);
    res.json(result[0]);
}

export const getCustomersCount = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query('SELECT COUNT(*) FROM customers');
    res.json(result[0]["COUNT(*)"]);
}

export const saveCustomer = async (req, res) => {
    const conn = await connection();
    const [result] = await conn.query("INSERT INTO customers(lastName, firstName, address, city, image, description, phone, email, password, web,isShelter) VALUES (?,?,?,?,?,?,?,?,?,?,?)", [
        req.body.lastName || "",
        req.body.firstName || "",
        req.body.address || "",
        req.body.city || "",
        req.body.image || "",
        req.body.description || "",
        req.body.phone || "",
        req.body.email || "",
        req.body.password || "",
        req.body.web || "",
        req.body.isShelter || false
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
