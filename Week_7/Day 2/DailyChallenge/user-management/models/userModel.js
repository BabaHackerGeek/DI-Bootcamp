const pool = require('../config/db');

const addUser = async (userData, passwordHash) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const userQuery = `
      INSERT INTO users (email, username, first_name, last_name)
      VALUES ($1, $2, $3, $4) RETURNING username;
    `;
    const res = await client.query(userQuery, [
      userData.email,
      userData.username,
      userData.first_name,
      userData.last_name,
    ]);

    const username = res.rows[0].username;

    const pwdQuery = `
      INSERT INTO hashpwd (username, password)
      VALUES ($1, $2);
    `;
    await client.query(pwdQuery, [username, passwordHash]);

    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
};

const getUserByUsername = async (username) => {
  const query = `
    SELECT u.id, u.username, h.password FROM users u
    JOIN hashpwd h ON u.username = h.username
    WHERE u.username = $1;
  `;
  const res = await pool.query(query, [username]);
  return res.rows[0];
};

const getAllUsers = async () => {
  const query = `SELECT * FROM users`;
  const res = await pool.query(query);
  return res.rows;
};

const getUserById = async (id) => {
  const query = `SELECT * FROM users WHERE id = $1`;
  const res = await pool.query(query, [id]);
  return res.rows[0];
};

const updateUserById = async (id, userData) => {
  const query = `
    UPDATE users SET email = $1, first_name = $2, last_name = $3
    WHERE id = $4 RETURNING *;
  `;
  const res = await pool.query(query, [
    userData.email,
    userData.first_name,
    userData.last_name,
    id,
  ]);
  return res.rows[0];
};

module.exports = { addUser, getUserByUsername, getAllUsers, getUserById, updateUserById };
