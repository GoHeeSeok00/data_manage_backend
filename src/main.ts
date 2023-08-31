import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { JobService } from './job.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)

  const jobService = app.get(JobService)
  // await jobService.jobAtServerStart()
}

bootstrap()
