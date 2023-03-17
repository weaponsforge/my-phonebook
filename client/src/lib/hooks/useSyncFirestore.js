import { FirebaseFirestore } from "../utils/firebase/firestore"
import { useSyncGlobalVariable } from "./useSync"

export const useSyncFirestore = (path) => {
    const [clientModel, setClientModel] = useState('clientModel')

    const setFirestore = (arg) => {
        FirebaseFirestore.
    }
    return [clientModel, setFirestore]
}