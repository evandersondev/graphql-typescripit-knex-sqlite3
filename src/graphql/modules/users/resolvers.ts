import connection from '../../../database/connection'
import {IData, IInputUser} from '../../../types/user';
import bcrypt from 'bcrypt'

export default {
  Query: {
    async getUser(_: any, { id }: { id: string }) {
      const user = await connection('users').where({ id }).first()
      
      return !user ? Promise.reject(new Error('User not found')) : user
    },

    async getUsers() {
      return await connection('users').select('*')
    },
  },
  Mutation: {
    async createUser(_: any, { data }: IData) {
      const result = await connection('users').insert({ 
        ...data,
        password: bcrypt.hashSync(data.password, 8)
       });

      const id = result[0];
      return await connection('users').where({ id }).first();
    },

    async updateUser(_: any, { id, data }: IInputUser) {

      if(data.password) {
        data.password = bcrypt.hashSync(data.password, 8)
      }

      await connection('users')
        .where({ id })
        .update({ ...data });

      return await connection('users').where({ id }).first();
    },

    async deleteUser(_: any, { id }: { id: string }) {
      const user = await connection('users').where({ id }).first()

      if(!user){
        return Promise.reject(new Error('User not exists'))
      }
  
      await connection('users').where({ id }).delete()
      return true
    },
  },
};