import {FC, PropsWithChildren} from "react";
import {IPost} from "@/interfaces/post.interface";

interface IProps extends PropsWithChildren {
    post: IPost
}

const Post: FC<IProps> = ({post: {id, userId, title, body}}) => {

    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Post};