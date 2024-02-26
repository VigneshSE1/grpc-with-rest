import { App } from '@/app';
import { ValidateEnv } from '@utils/validateEnv';
import { ZohoDeskRoute } from './routes/zohodesk.route';

ValidateEnv();

const app = new App([new ZohoDeskRoute()]);

app.listen();
