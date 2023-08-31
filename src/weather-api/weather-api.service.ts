import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { lastValueFrom } from 'rxjs'

@Injectable()
export class WeatherApiService {
  constructor(private readonly httpService: HttpService) {}

  async getWeatherInfo() {
    console.log('getWeatherInfo')
    const params = {
      access_key: '4f9733e72a5191748cf128ed6ed27eef',
      query: 'New York',
      language: 'ko'
    }

    const apiUrl = `http://api.weatherstack.com/current?access_key=${params.access_key}&query=${params.query}`

    const response = await lastValueFrom(this.httpService.get(apiUrl))
    console.log(response.data)
  }
}
