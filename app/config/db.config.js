module.exports = {
  HOST: "ec2-23-23-162-138.compute-1.amazonaws.com",
  USER: "evidqwuidrknfk",
  PASSWORD: "71176e70808cc6de85977818e2319fd32b2246df017f19aeac014352fc445708",
  DB: "d9ioba3fd92dvn",
  dialect: "postgres",
  port : 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};