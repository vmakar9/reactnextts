
import {FC, PropsWithChildren} from "react";
import {IUser} from "@/interfaces/user.interface";

interface IProps extends PropsWithChildren{
    user:IUser
}

const User:FC<IProps> = ({user})=>{
    const {id,name,username,email} = user
    return(<div>
        <h3>id:{id}</h3>
        <p>name:{name}</p>
        <p>username:{username}</p>
        <p>email:{email}</p>
    </div>)
}


export {User}