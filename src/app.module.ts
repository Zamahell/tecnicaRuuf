import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PanelModule } from './panel/panel.module';

@Module({
  imports: [PanelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
