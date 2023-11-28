
import {Users} from "@/app/(main-layout)/users/components/Users";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Users'

}
const Page = () =>{

    return(<div>
        <Users/>
    </div>)
}

export default Page