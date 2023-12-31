import firestoreDatabase from "../firebaseConfig"
import { collection, addDoc, getDocs, query, where, getDoc, doc } from "firebase/firestore"
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

export const LogiinUser = async (payload) => {
    try {

        const qry = query(
            collection(firestoreDatabase, "users"),
            where("email", "==", payload.email)
        )

        const userSnapshots = await getDocs(qry)
        if(userSnapshots.size === 0) 
        {
            throw new Error("このユーザーは存在しません。")
        }

        const user = userSnapshots.docs[0].data()
        console.log(userSnapshots.docs[0])
        user.id = userSnapshots.docs[0].id
        const bytes = CryptoJS.AES.decrypt(user.password, "sheyjobs-lite")
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8)

        if(originalPassword !== payload.password)
        {
            throw new Error("パスワードまたはメールアドレスが間違っています。")
        }

        return {
            success: true,
            message: "ユーザーログインが正常に成功しました。",
            data: user
        }
        
    } catch (error) {
        return error
    }
}

export const GetAllusers = async () => {
    try {
     const stores = await getDocs(collection(firestoreDatabase, "users"))
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

 export const GetUserById = async (id) => {
    try {
        const user = await getDoc(doc(firestoreDatabase, "users", id))
        return {
            success: true,
            data: {
                ...user.data(),
                id: user.id,
            }
        }
       } catch (error) {
        return error
       }
 }