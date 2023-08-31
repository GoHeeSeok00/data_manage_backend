import { WeatherApiService } from './weather-api/weather-api.service'
import { Injectable, OnModuleInit } from '@nestjs/common'
import { Interval } from '@nestjs/schedule'

@Injectable()
export class JobService implements OnModuleInit {
  constructor(private weatherApiService: WeatherApiService) {}

  async onModuleInit() {
    console.log('job onModuleInit')
    this.weatherApiService.getWeatherInfo()
  }
}
