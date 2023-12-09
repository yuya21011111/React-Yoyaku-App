import { addDoc, collection } from "firebase/firestore"
import firestoreDatabase from "../firebaseConfig"


export const AddStores = async (payload) => {
    try {
        console.log(4)
        await addDoc(collection(firestoreDatabase, "stores"), payload)
        return {
            success: true,
            message: "正常に登録されました。"
        }
    } catch (error) {
        return {
            success: false,
            message: error.message
        }
    }
}