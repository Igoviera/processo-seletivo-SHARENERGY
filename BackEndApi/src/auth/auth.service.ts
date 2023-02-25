import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { userDto } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ){}

    async validateUser(username: string, password: string){
        const user = await this.userService.findUserByUsername(username)
        if(user && user.password === password){
            const {password, ...userResult} = user;
            return userResult
        }
        return null
    }

    async login(user: userDto){
        const payload = {
            username: user.username
        }
        const token = this.jwtService.sign(payload)
        return {
            access_token: token
        }
    }
}
