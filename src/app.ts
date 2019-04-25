import express, { Application } from 'express';
import morgan from 'morgan';
import exphbs from 'express-handlebars'
import path from 'path'

// Routes
import IndexRouter from './routes/index.route'

export class App {

    app: Application;
    port: number | string;

    constructor(port: number | string) {
        this.port = port || 3000;
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(): void {
        this.app.set('port', process.env.PORT || this.port);
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.engine('.hbs', exphbs({
            layoutsDir: path.join(this.app.get('views'), 'layouts'),
            partialsDir: path.join(this.app.get('views'), 'partials'),
            extname: '.hbs',
            defaultLayout: 'main'
        }));
        this.app.set('view engine', '.hbs');
    }

    middlewares():void {
        this.app.use(morgan('dev'));
    }

    routes(): void {
        this.app.use('/', IndexRouter);
        // Static files
        this.app.use(express.static(path.join(__dirname, 'public')));
    }

    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

}
