const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@<IP_DO_HOST>/database?retryWrites=true&w=majority`
    );
    console.log("Conexão ao banco de dados realizada com sucesso!");
  } catch (error) {
    console.error("Ocorreu um erro ao se conectar com o banco de dados: ", error);
  }
};

module.exports = connectToDatabase;
