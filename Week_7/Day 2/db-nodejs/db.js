const knex = require('knex');
const dotenv = require('dotenv');
dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

const db = knex({
  client: "pg",
  connection: {
    host: PGHOST, 
    port: PGPORT, 
    user: PGUSER, 
    database: PGDATABASE,
    password: PGPASSWORD,
    ssl: { rejectUnauthorized: false },
  },
});

// async function getVersion() {
//     const result = await db.raw('select version()');
// console.log(result.rows);
// }
// getVersion();

db("products")
  .select("*")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    db.destroy();
  })