import {IsNotEmpty} from 'class-validator';

export class ClientDto {
    @IsNotEmpty({message:'O nome é obrigatorio'})
    name: string;

    @IsNotEmpty({message:'O email é obrigatorio'})
    email: string;

    @IsNotEmpty({message:'O telefone é obrigatorio'})
    phone: number;

    @IsNotEmpty({message:'O endereço é obrigatorio'})
    address: string;

    @IsNotEmpty({message:'O CPF é obrigatorio'})
    cpf: string;
}