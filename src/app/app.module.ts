import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from 'src/app/core/core.module';
import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinSnapshotComponent } from './coin-snapshot/coin-snapshot.component';
import { SEOService } from './services/seo.service';

@NgModule({
  declarations: [AppComponent, CoinListComponent, CoinSnapshotComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    TransferHttpCacheModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [SEOService],
  bootstrap: [AppComponent],
})
export class AppModule {}
