import { Injectable } from '@nestjs/common';
import { PanelDto } from './dto/panel.dto';

// Cuántos paneles caben?
// El objetivo de este ejercicio es poder entender tus habilidades como programador/a, la forma en que planteas un problema, cómo los resuelves y finalmente cómo comunicas tu forma de razonar y resultados.

// Autor : Braulio Herrera
// Fecha 22-05-2024


// Condiciones extras:
// - No se pueden cortar los paneles.
// - Los paneles se pueden rotar.
// - El algoritmo debe ser capaz de calcular cuántos paneles caben en un techo de tamaño arbitrario.
// - Se espera recibir inputs y entregar outputs con resultados válidos.

// Pruebas:
// - Paneles 1x2 y techo 2x4 ⇒ Caben 4
// - Paneles 1x2 y techo 3x5 ⇒ Caben 7
// - Paneles 2x2 y techo 1x10 ⇒ Caben 0
// - Paneles 2x2 y techo 20x3 => Caben 10
// - Paneles 4x1 y techo 8x5 ⇒ Caben 10
// - Paneles 5x3 y techo 17x5 ⇒ Caben 5
@Injectable()
export class PanelService {

  // Leer el readme para mayor comprension
  calcularMaximo(dto: PanelDto): number {

    // Destructuracion de objeto
    const {largoPanelB,anchoPanelA,largoTechoY,anchoTechoX} = dto;

    // Paneles 
    const paneles = Math.floor(anchoTechoX/anchoPanelA) * Math.floor(largoTechoY/largoPanelB)

    const restoX = anchoTechoX % anchoPanelA
    const restoY = largoTechoY % largoPanelB
    const panelesTotales = (Math.floor(restoX / largoPanelB) * Math.floor(largoTechoY/anchoPanelA)) + (Math.floor(anchoTechoX / anchoPanelA) * Math.floor(restoY / largoPanelB));

    // Paneles rotacion
    const panelesRotacion = Math.floor(anchoTechoX / largoPanelB) * Math.floor(largoTechoY / anchoPanelA);

    const restoXRotacion = anchoTechoX % largoPanelB;
    const restoYRotacion = largoTechoY % anchoPanelA;
    const panelesTotalRotacion = Math.floor(restoXRotacion / anchoPanelA) * Math.floor(largoTechoY / largoPanelB) + Math.floor(anchoTechoX / largoPanelB) * Math.floor(restoYRotacion / anchoPanelA);
    
    console.log( Math.max(paneles + panelesTotales, panelesRotacion + panelesTotalRotacion))
    return Math.max(paneles + panelesTotales, panelesRotacion + panelesTotalRotacion);
  }

}
