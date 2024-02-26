import { CONFIG } from '@/environment/environment.appSettings';

const mongoDbUrl: string = CONFIG.DB_CONNECTION;

export const dbConnection = {
  url: mongoDbUrl,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
