import {FC, PropsWithChildren} from "react";
import {Providers} from "@/redux/Provider";

const Layout:FC<PropsWithChildren> = ({children}) => {
    return (
        <div>
            <Providers>{children}</Providers>
        </div>
    );
};

export default Layout;