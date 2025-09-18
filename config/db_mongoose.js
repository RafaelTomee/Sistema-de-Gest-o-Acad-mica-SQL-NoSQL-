const mongoose = require("mongoose");

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("✅ Conectado ao MongoDB Atlas");
  } catch (err) {
    console.error("❌ Erro ao conectar ao MongoDB:", err);
  }
};

module.exports = connectMongo;
