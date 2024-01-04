import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore"
import firestoreDatabase from "../firebaseConfig"
import { message } from "antd"


export const AddStores = async (payload) => {
    try {
        await setDoc(doc(firestoreDatabase, "stores", payload.userId), payload)

        await updateDoc(doc(firestoreDatabase, "users",payload.userId),{
            role: "common"
        })
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
            message: "正常に登録されています。",
            data : stores.docs.map((store) => {
                return {
                    ...store.data(),
                    id: doc.id
                }
            })[0]
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

export const GetAllStores = async () => {
   try {
    const stores = await getDocs(collection(firestoreDatabase, "stores"))
    return {
        success: true,
        data: stores.docs.map((store) =>{
          return {
            ...store.data(),
            id: store.id,
          }
        })
    }
   } catch (error) {
    return {
        success: false,
        message: error.message,
    }
   }
}

export const UpdateStore = async (payload) => {
    try {
        await setDoc(doc(firestoreDatabase, "stores", payload.id),payload)
        return {
            success: true,
            message: "情報を更新しました。",
        }
    } catch (error) {
        return {
            success: false,
            message: error.message,
        }
    }
}

export const GetStoreId = async (id) => {
    try {
        const store = await getDoc(doc(firestoreDatabase, "stores", id))
        return {
            success: true,
            data: store.data()
        }
    } catch (error) {
        return {
            success: false,
            message: error.message,
        }
    }
}