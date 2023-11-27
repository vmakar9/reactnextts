import {IRes} from "@/types/axiosResponse.type";
import {IUser} from "@/interfaces/user.interface";
import {apiService} from "@/services/api.service";
import {urls} from "@/urls/urls";

const usersService={
    getAll:():IRes<IUser[]> => apiService.get(urls.users)
}

export {usersService}