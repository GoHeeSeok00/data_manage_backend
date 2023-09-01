import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { lastValueFrom } from 'rxjs'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class WeatherApiService {
  constructor(private readonly httpService: HttpService, private readonly configService: ConfigService) {}

  async getWeatherInfo() {
    console.log('getWeatherInfo')
    console.log(this.configService.get<string>('WEATHER_API_ACCESS_KEY'))
    const params = {
      access_key: this.configService.get<string>('WEATHER_API_ACCESS_KEY'),
      query: 'New York',
      language: 'ko'
    }

    const apiUrl = `http://api.weatherstack.com/current?access_key=${params.access_key}&query=${params.query}`

    const response = await lastValueFrom(this.httpService.get(apiUrl))
    console.log(response.data)
  }
}
