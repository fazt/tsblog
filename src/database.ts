import mongoose from 'mongoose'

declare const process: {
    env: {
        MONGODB_URI: string
    }
}

const { MONGODB_URI } = process.env;
export async function connect() {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true
        });
        console.log('DB Is connected');
    }
    catch(e) {
        console.log(e)
    }
}