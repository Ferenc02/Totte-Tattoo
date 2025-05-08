import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    if (conn) {
      console.log(`Databasen är ansluten till ${conn.connection.host}`);
    }
  } catch (error) {
    console.error(error);
  }
};

export default connectDb;
