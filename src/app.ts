import express, { Application } from 'express';

// Routes
import IndexRouter from './routes/index.route'

export class App {

    app: Application;
    port: number | string;

    constructor(port: number | string) {
        this.port = port || 3000;
        this.app = express();
        this.settings();
        this.routes();
    }

    settings(): void {
        this.app.set('port', process.env.PORT || this.port);
    }

    routes(): void {
        this.app.use('/', IndexRouter);
    }

    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

}
