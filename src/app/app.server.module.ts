// app.server.module.ts or a similar file
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';
import serverConfig from './app.config.server';


export const config = mergeApplicationConfig(appConfig, serverConfig);
