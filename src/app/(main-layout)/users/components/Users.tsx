"use client"
import {User} from "@/app/(main-layout)/users/components/User";
import {FC, PropsWithChildren, useEffect} from "react";
import {IUser} from "@/interfaces/user.interface";
import {useAppDispatch, useAppSelector} from "@/hooks/reduxHooks";
import {userActions} from "@/redux/slices/usersSlice";



const Users= ()=>{
     const dispatch = useAppDispatch();
     const {users} = useAppSelector(state => state.users)
    useEffect(() => {
        dispatch(userActions.getAll())
    }, [dispatch]);


    return(<div>
        {users.map(user=><User key={user.id} user={user}/>)}
    </div>)
}

export {Users}