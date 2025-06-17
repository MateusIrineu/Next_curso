import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Logout from "@/components/Logout"; // ver esse @


export default async function Dashboard() {
    const session = await getServerSession(authOptions)

    if (!session) {
        return (
            // estilizar
            <div className="text-red-700"> 
                VOCÊ NÃO ESTÁ LOGADO
            </div>
        )
    }


    return (
        <div>
            <div>
                Olá, {session?.user?.name}
            </div>
            <p>Esta página é o Dashboard</p>

            <div>
                <Logout/>
            </div>
        </div>
    )


}