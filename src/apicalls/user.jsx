import firestoreDatabase from "../firebaseConfig"
import { collection, addDoc } from "firebase/firestore"

export const CreateUser = async (payload) => {
    try {
        const docRef = collection(firestoreDatabase, "users")
        await addDoc(docRef, payload)
        return {
            success: true,
            message: "ユーザーが登録されました。"
        }
    } catch (error) {
        return error
    }
}