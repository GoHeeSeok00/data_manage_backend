import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { WeatherApiModule } from './weather-api/weather-api.module'
import { JobService } from './job.service'

@Module({
  imports: [WeatherApiModule],
  controllers: [AppController],
  providers: [AppService, JobService]
})
export class AppModule {}
