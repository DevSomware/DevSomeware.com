"use server"
import { cookies } from "next/headers"
const Logout = async () => {
    const cookie = cookies();
    cookie.delete("token");
    return true;

}
export default Logout;