import { FC,ReactNode } from "react";
import Head from "next/head";

type Props = {
    title: string
    children: ReactNode
}

export const Layout: FC<Props> = ({children,title="NextPage"}) => {
    return <div className="flex min-h-screen ">
        <Head>
            <title>{title}</title>
        </Head>
        <p className="fixed left-0 top-0">備品管理システム</p>
        <main className=" w-screen">
            {children}
        </main>
     </div>
}
