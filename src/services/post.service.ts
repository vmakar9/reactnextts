import {IRes} from "@/types/axiosRes.type";
import {IPost} from "@/interfaces/post.interface";
import {apiService} from "@/services/api.service";
import {urls} from "@/urls/urls";

const postService = {
    getByUserId: (id: number|string): IRes<IPost[]> => apiService.get(urls.posts.byUserId(id))
}

export {
    postService
}