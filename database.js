import mysql from 'mysql2'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: "sujayg33#",
    database: "notes_app"
}).promise()

export async function getNotes() {
    const [rows] = await pool.query("select * from notes;")
    // console.log("result", rows);
    return rows
}
export async function getId(id) {
    const [rows] = await pool.query(`select * from notes where id=?;`, [id])
    // console.log("result", rows[0]);
    return rows
}
export async function createNote(title, contents) {
    const [result] = await pool.query(`
    INSERT INTO NOTES(title,contents)
    values(?,?)
    `, [title, contents])
    return { id: result.insertId, title, contents }
}
// const resp = await createNote("test", "test")
// console.log("resp", resp);
