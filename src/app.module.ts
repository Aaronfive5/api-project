import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from "@nestjs/mongoose";


@Module({
  imports: [ProductModule, MongooseModule.forRoot("mongodb+srv://aaronfive:Z6TQa76-SamxHNh@webapp.yugtokm.mongodb.net/?retryWrites=true&w=majority")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
