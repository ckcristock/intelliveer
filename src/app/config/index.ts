import { environment } from '@environment/environment';

export const CONFIG = {
  auth: {
    host: environment.authAppHost,
  },
  backend: {
    host: environment.backendHost,
  },
};
