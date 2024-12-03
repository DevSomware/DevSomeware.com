"use server"
import { cookies } from "next/headers"
import Users from "@/models/Users";
import jwt from "jsonwebtoken";
import ConnectDb from "@/middleware/connectDb";
const VerifyUser= async()=>{
    const cookie = cookies();
    await ConnectDb();
    const token = cookie.get("token") as { value: string } | undefined;
    if(token){
        interface DecodedToken {
            email: string;
            // add other properties if needed
        }
        const decoded: DecodedToken = jwt.verify(token.value, process.env.JWT_SECRET || "") as DecodedToken;
        const user = await Users.findOne({email: decoded.email}, { _id: 0, password: 0 });
        if(user!=null){
            
            return [true,JSON.stringify(user)];
        }
        return [false,["no user found"]];
    }
    return [false,["no token found"]];
}
export default VerifyUser;
