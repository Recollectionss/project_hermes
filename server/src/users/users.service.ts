import {Injectable} from '@nestjs/common';
import {User} from "../database/user.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User) {}

    async selectUser(id):Promise<User>{
        return await this.userRepository.findByPk(id);
    }

    async createUser(dto:CreateUserDto){
        return await this.userRepository.create(dto);
    }

    async updateUser(dto: UpdateUserDto): Promise<User> {
        const user = await this.userRepository.findByPk(dto.id);

        user.username = dto.username;
        user.email = dto.email;
        user.password = dto.password;

        await user.save();
        return user;
    }


    async deleteUser(id: number): Promise<void> {
        const user = await this.userRepository.findByPk(id);

        user.isDelete = true;
        await user.save();
    }


}
