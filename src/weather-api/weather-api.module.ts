import { Module } from '@nestjs/common'
import { WeatherApiController } from './weather-api.controller'
import { WeatherApiService } from './weather-api.service'
import { HttpModule } from '@nestjs/axios'

@Module({
  controllers: [WeatherApiController],
  providers: [WeatherApiService],
  exports: [WeatherApiService],
  imports: [HttpModule]
})
export class WeatherApiModule {}
