import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from'@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { LocationStrategy, HashLocationStrategy, Location } from '@angular/common';


//Libraries
import {ShContextMenuModule} from 'ng2-right-click-menu';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//Pages
import { InicioComponent } from './ENTRADAS/inicio/inicio.component';

//Complements
import { HeaderComponent } from './complements/header/header.component';
import { MenuComponent } from './complements/menu/menu.component';
import { FooterComponent } from './complements/footer/footer.component';
import { NotfoundComponent } from './complements/notfound/notfound.component';

// Administracion
import { AdministracionComponent } from './ENTRADAS/administracion/administracion.component';
import { SextoAgregarComponent } from './601/sexto-agregar/sexto-agregar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    NotfoundComponent,
    InicioComponent,
    AdministracionComponent,
    SextoAgregarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ShContextMenuModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  providers: [
    {
      provide: LocationStrategy, 
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
