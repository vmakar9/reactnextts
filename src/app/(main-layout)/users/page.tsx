import {Metadata} from "next";
import {userService} from "@/services/user.service";
import {Users} from "@/app/(main-layout)/users/components/Users";


export const metadata: Metadata = {
    title: 'Users'

}
const Page = async () => {
    const {data} = await userService.getAll();

    return (
        <div>
            <Users users={data}/>
        </div>
    );
};

export default Page;