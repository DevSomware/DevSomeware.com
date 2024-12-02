"use server";
import { cookies } from "next/headers"
import Users from "@/models/Users";
import jwt from "jsonwebtoken";
import ConnectDb from "@/middleware/connectDb";
const VerifyUser= async()=>{
    const cookie = cookies();
    await ConnectDb();
    const token:any = cookie.get("token");
    if(token){
        const decoded:any = jwt.verify(token.value, process.env.JWT_SECRET || "");
        const user = await Users.findOne({email: decoded.email});
        if(user!=null){
            return [true,user];
        }
        return [false,["no user found"]];
    }
    return [false,["no token found"]];
}
export default VerifyUser;
