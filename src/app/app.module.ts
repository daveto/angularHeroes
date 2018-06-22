import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroeComponent } from './heroe/heroe.component';
import { NgModule } from '@angular/core';
// <-- NgModel lives here

@NgModule({
	declarations: [ AppComponent, HeroeComponent ],
	imports: [ BrowserModule, FormsModule ],
	providers: [],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
