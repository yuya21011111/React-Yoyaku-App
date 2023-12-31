import firestoreDatabase from "../firebaseConfig"
import { addDoc,collection, doc, getDocs, query, where } from "firebase/firestore"

export const ShowDetail = async (payload) => {
    try {
        await addDoc(collection(firestoreDatabase, "showdetail"), payload)
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

export const GetShowDetail = async (storeId, date) => {
    try {
        console.log(storeId)
        console.log(date)
        const querySnapshot = await getDocs(
            query(
                collection(firestoreDatabase, "showdetail"),
                where("storeId", "==", storeId),
                where("date", "==", date)
            )
        )
        const data = []
        querySnapshot.forEach((doc) => {
            data.push(doc.data())
        })
      
        return {
            success: true,
            data,
        }
    } catch (error) {
        return {
            success: false,
            message: error.message,
        }
    }
}

export const GetUserDetail = async (userId) => {
    try {
        const querySnapshot = await getDocs(
            query(
                collection(firestoreDatabase, "showdetail"),
                where("userId", "==", userId)
            )
        )
        const data = []
        querySnapshot.forEach((user) => {
            data.push(user.data())
        })
        return {
            success: true,
            data
        }
    } catch (error) {
        return {
            success: false,
            message: error.message
        }
    }
}