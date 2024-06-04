import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PanelService } from './panel.service';
import { PanelDto } from './dto/panel.dto';

@Controller('panel')
export class PanelController {
  constructor(private readonly panelService: PanelService) {}

  @Post()
  calcularPanel(@Body() panelDto: PanelDto):{cantidadMaximaPanel:number} {
    const cantidadMaximaPanel = this.panelService.calcularMaximo(panelDto)
    return {cantidadMaximaPanel}
    
  }
}
