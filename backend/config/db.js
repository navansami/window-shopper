import mongoose from 'mongoose';

const dbOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
}

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, dbOptions);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;