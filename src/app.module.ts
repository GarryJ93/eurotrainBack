import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TravelDocumentModule } from './travel_document/travel_document.module';
import { TravelDocument } from './travel_document/entities/travel_document.entity';
import { LanguageModule } from './language/language.module';
import { Language } from './language/entities/language.entity';
import { CurrencyModule } from './currency/currency.module';
import { Currency } from './currency/entities/currency.entity';
import { TransportTypeModule } from './transport_type/transport_type.module';
import { TransportType } from './transport_type/entities/transport_type.entity';
import { TransportCompanyModule } from './transport_company/transport_company.module';
import { TransportCompany } from './transport_company/entities/transport_company.entity';
import { StayCatModule } from './stay_cat/stay_cat.module';
import { StayCat } from './stay_cat/entities/stay_cat.entity';
import { CountryModule } from './country/country.module';
import { Country } from './country/entities/country.entity';
import { CityModule } from './city/city.module';
import { City } from './city/entities/city.entity';
import { PhotoModule } from './photo/photo.module';
import { Photo } from './photo/entities/photo.entity';
import { ItineraryModule } from './itinerary/itinerary.module';
import { Itinerary } from './itinerary/entities/itinerary.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: [`.env`] }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [
        User,
        TravelDocument,
        Language,
        Currency,
        TransportType,
        TransportCompany,
        StayCat,
        Country,
        City,
        Photo,
        Itinerary,
      ],
      synchronize: false,
      logging: true,
    }),
    AuthModule,
    UserModule,
    TravelDocumentModule,
    LanguageModule,
    CurrencyModule,
    TransportTypeModule,
    TransportCompanyModule,
    StayCatModule,
    CountryModule,
    CityModule,
    PhotoModule,
    ItineraryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
