import firestoreDatabase from "../firebaseConfig"
import { collection, addDoc, getDocs, query, where } from "firebase/firestore"
import CryptoJS from "crypto-js"

export const CreateUser = async (payload) => {
    try {
        const qry = query(
            collection(firestoreDatabase, "users"), 
            where("email", "==", payload.email))
        const querySnapshot = await getDocs(qry)
        if(querySnapshot.size > 0)
        {
            throw new Error("このユーザーは既に存在しています。")
        }

        const hashedPassword = CryptoJS.AES.encrypt(
            payload.password,
            'sheyjobs-lite'
        ).toString()
        payload.password = hashedPassword
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