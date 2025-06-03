import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { MOCK_ITEMS } from './app/core/constants/items';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

const items = localStorage.getItem('items');
if (!items) localStorage.setItem('items', JSON.stringify(MOCK_ITEMS));