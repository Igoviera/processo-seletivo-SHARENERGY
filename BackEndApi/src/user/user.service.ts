import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('user') private readonly userModelo: Model<userDto>) { }

    async create(user: userDto) {
        const createUser = new this.userModelo(user)
        return await createUser.save()
    }
    
    async findUserByUsername(username: string) {
        return await this.userModelo.findOne({ username: username })
    }
}
