import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport/dist/passport.module';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtModule } from '@nestjs/jwt/dist';
import { ConfigModule } from '@nestjs/config/dist';

@Module({
  imports:[
    ConfigModule.forRoot(), 
    UserModule, PassportModule, 
    JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: {
        expiresIn: '24h'
    }
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
