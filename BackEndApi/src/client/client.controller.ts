import { Body, Controller, Delete, Get, Param, Post, Put, UnprocessableEntityException } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ClientDto } from './client.dto';
import { ClientService } from './client.service';

@UseGuards(JwtAuthGuard)
@Controller('client')
export class ClientController {
    constructor(private readonly clientService: ClientService){}

    @Post()
    async create(@Body() client: ClientDto){
        return await this.clientService.create(client)
    }

    @Get()
    async findAll(){
        return await this.clientService.findAll()
    }

    @Get(':id')
    async findId(@Param('id') id: string){
        return await this.clientService.findId(id)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() client: ClientDto){
        return await this.clientService.update(id, client)
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return await this.clientService.delete(id)
    }
}
