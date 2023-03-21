import { useQueryUser } from "../hooks/useQueryUser";
import { Loader } from "@mantine/core";

export const UserInfo = () => {
    const {data:user, status} = useQueryUser()
    if (status === "loading") return <Loader/>
    const userName = user?.email.split("@",1)

    return <p className="fixed top-0 right-0 text-sm">ログインユーザー:{userName}</p>
}
