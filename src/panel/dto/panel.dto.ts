import { IsNotEmpty, IsNumber, Min } from "class-validator"

export class PanelDto {

    @IsNotEmpty({message: "El campo largo panel no debe estar vacio"})
    @IsNumber({}, {message:"Ingrese un numero valido"})
    @Min(1, {message: "El valor minimo debe ser 1 o mayor"})
    largoPanelB: number

    @IsNotEmpty({message: "El campo ancho panel no debe estar vacio"})
    @IsNumber({}, {message:"Ingrese un numero valido positivo. "})
    @Min(1, {message: "El valor minimo debe ser 1 o mayor"})
    anchoPanelA: number
    
    @IsNotEmpty({message: "El campo largo techo no debe estar vacio"})
    @IsNumber({}, {message:"Ingrese un numero valido positivo. "})
    @Min(1, {message: "El valor minimo debe ser 1 o mayor"})
    largoTechoY: number

    @IsNotEmpty({message: "El campo ancho techo no debe estar vacio"})
    @IsNumber({}, {message:"Ingrese un numero valido positivo. "})
    @Min(1, {message: "El valor minimo debe ser 1 o mayor"})
    anchoTechoX: number

}
