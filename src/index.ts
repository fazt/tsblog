// Environment Variables
import dotenv from 'dotenv';
dotenv.config();

import { App } from './app'
import { connect } from './database'

async function main() {
    await connect();
    const app = new App(5000);
    app.listen();
}

main();