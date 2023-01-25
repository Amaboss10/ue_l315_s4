import { Users, UserSchema } from './shema/user.schema';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
//import { User } from './entities/user.entity';
import { CreateUserInput, CreateUserDto } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => CreateUserDto)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  

  @Query(() => [CreateUserDto], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

 /* @Mutation(() => Users)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }*/
}