import { Controller } from '@nestjs/common'
import { Episode } from '@libs/db/models/episode.model'
import { InjectModel } from 'nestjs-typegoose'
import { ReturnModelType } from '@typegoose/typegoose'
import { ApiTags } from '@nestjs/swagger'
import { Crud } from 'nestjs-mongoose-crud'

@Crud({
  model: Episode
})
@Controller('episodes')
@ApiTags('课时')
export class EpisodesController {
  constructor(
    @InjectModel(Episode)
    private readonly model: ReturnModelType<typeof Episode>
  ) {}
}
