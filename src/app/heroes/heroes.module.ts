import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[ // aqui se llaman los componentes, lo que se ponga aqui solo será visible dentro del módulo
        HeroeComponent,
        ListadoComponent
    ],
    exports:[ // cosas que van a ser visibles fuera del modulo
        ListadoComponent
    ],
    imports:[ // aqui se importan modulos
        CommonModule
    ]

})
export class HeroesModule{


}