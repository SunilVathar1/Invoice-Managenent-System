import { Sequelize } from "sequelize";
import creaditionals from "../commons/creaditionals";

const sequelize=new Sequelize({
    database:creaditionals.postgres.DATABASE,
    username:creaditionals.postgres.USERNAME,
    password:creaditionals.postgres.PASSWORD,
    host:creaditionals.postgres.HOST,
    port:Number(creaditionals.postgres.DBPORT),
    dialect:'postgres'
})


sequelize.authenticate().then(()=>{
    console.log("Database connection established successfully");
}).catch((err)=>{
    console.log("Unable to connect to the database",err);
})

sequelize
  .sync()
  .then(() => {
    console.log("Database Syncronised Sucessfully");
  })
  .catch((err) => {
    console.log("Error while syncing database", err);
  });

export default sequelize;