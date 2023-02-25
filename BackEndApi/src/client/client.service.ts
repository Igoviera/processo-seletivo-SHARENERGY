import { Injectable } from '@nestjs/common';
import { UnprocessableEntityException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClientDto } from './client.dto';

@Injectable()
export class ClientService {
    constructor(@InjectModel('Client') private readonly clientModelo: Model<ClientDto>){}

    async create(client: ClientDto){
        const createClient = new this.clientModelo(client)
        return await createClient.save()
    }

    async findAll(){
        return await this.clientModelo.find().exec()
    }

    async findId(id: string){
        return await this.clientModelo.findById({_id: id}).exec()
    }

    async update(id: string, client: ClientDto){
        await this.clientModelo.updateOne({_id: id}, client).exec()
        return this.findId(id)
    }

    async delete(id: string){
        return await this.clientModelo.deleteOne({_id: id}).exec();
    }
}
