"use client"
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks/reduxHooks";
import {userActions} from "@/redux/slices/usersSlice";
import {User} from "@/app/(main-layout)/users/components/User";


const Users =()=>{
    const {users} =useAppSelector(state => state.users)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(userActions.getAll())
    }, [dispatch]);


    return(<div>
        {users.map(user=><User key={user.id} user={user}/>)}
    </div>)
}

export {Users}