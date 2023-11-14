// server.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
  ],
};

export default serverConfig;
