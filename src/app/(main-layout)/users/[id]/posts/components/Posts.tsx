import {IPost} from "@/interfaces/post.interface";
import {FC, PropsWithChildren} from "react";
import {Post} from "@/app/(main-layout)/users/[id]/posts/components/Post";


interface IProps extends PropsWithChildren {
    posts: IPost[]
}

const Posts: FC<IProps> = ({posts}) => {
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};