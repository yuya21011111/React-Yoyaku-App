import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import firestoreDatabase from "../firebaseConfig"


export const AddStores = async (payload) => {
    try {
        console.log(1)
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

export const GetStoreById = async (id) => {{
    try {
       const stores = await getDocs(
        query(collection(firestoreDatabase, "stores"), where("userId", "==", id))
       )
       if(stores.size > 0)
       {
        return {
            success: true,
            message: "正常に登録されています。"
        }
       }
       return {
        success: false,
        message: "データベースにデータがありません。"
       }
    } catch (error) {
        return {
            success: false,
            message: error.message,
        }
    }
}}