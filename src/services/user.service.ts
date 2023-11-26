import {IRes} from "@/types/axiosRes.type";
import {IUser} from "@/interfaces/user.interface";
import {apiService} from "@/services/api.service";
import {urls} from "@/urls/urls";

const userService = {
    getAll: (): IRes<IUser[]> => apiService.get(urls.users)
}

export {
    userService
}