import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ShowsModule } from './shows/shows.module';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot("mongodb+srv://" + + ":<password>@cluster0.tniie.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"),ShowsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
