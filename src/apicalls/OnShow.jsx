import firestoreDatabase from "../firebaseConfig"
import { addDoc,collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"

export const ShowDetail = async (payload) => {
    try {
        console.log("shoedetak")
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
                where("storeId", "==", userId)
            )
        )
        const data = []
        querySnapshot.forEach((user) => {
            data.push({
            ...user.data(),
            id: user.id,
        })
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

export const GetAdminCommon = async (admincomonId) => {
    try {
        console.log("123")
        const querySnapshot = await getDocs(
            query(
                collection(firestoreDatabase, "showdetail"),
                where("userId", "==", admincomonId)
            )
        )
        const data = []
        querySnapshot.forEach((item) => {
            data.push(item.data())
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

export const updateUser = async (id, status) => {
    try {
        console.log("update123")
        await updateDoc(doc(firestoreDatabase, "showdetail", id),{
            status,
        })
        return {
            success: true,
            message: "正常に情報が更新されました。"
        }
    } catch (error) {
        return {
            success: false,
            message: error.message
        }
    }
}