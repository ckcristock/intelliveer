import { environment } from '@src/environments/environment';

export const CONFIG = {
  auth: {
    host: environment.authAppHost,
  },
  backend: {
    host: environment.backendHost,
  },
};
