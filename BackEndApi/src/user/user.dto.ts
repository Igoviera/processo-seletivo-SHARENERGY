import {IsNotEmpty} from 'class-validator';

export class userDto  {
    @IsNotEmpty({message:'O nome é obrigatorio'})
    username: string;

    @IsNotEmpty({message:'A senha é obrigatoria'})
    password: string;
}