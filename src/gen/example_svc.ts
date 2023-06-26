import { User } from "./example_pb.js";

import axios from "axios";

export async function CreateBootstrapToken(input:User): Promise<User> {
   const result = (await axios.request({
    method: "post",
    url: '/opni/Management/tokens',
    data: input.toJson()
   })).data;

   return User.fromJson(result);
}


export async function RevokeBootstrapToken(input:User): Promise<User> {
   const result = (await axios.request({
    method: "get",
    url: '/opni/Management',
    data: input.toJson()
   })).data;

   return User.fromJson(result);
}


