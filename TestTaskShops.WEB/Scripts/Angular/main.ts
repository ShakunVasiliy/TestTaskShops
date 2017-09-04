import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MainModule } from './main.module';

let platform = platformBrowserDynamic();
platform.bootstrapModule(MainModule);