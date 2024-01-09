import React, { useEffect, useState } from 'react'
import { Form, Row, Col, message } from 'antd'
import 'antd/dist/antd.css'
import { useDispatch } from 'react-redux'
import { ShowLoader } from '../../redux/loaderSlice'
import { AddStores, GetStoreById, UpdateStore } from '../../apicalls/Stores'
import { useNavigate } from 'react-router-dom'

function AppFromMenu() {
    const [form] = Form.useForm()
    const [alreadyApproved, setAlreadyApproved] = useState(false)
    const [days, setDays] = useState([])
    const [alreadyApplied, setAlreadyApplied] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const onFinish = async (values) => {
        console.log(values)
        console.log(days)
      try {
        dispatch(ShowLoader(true))
        const payload = {
            ...values,
            days,
            userId: JSON.parse(localStorage.getItem("user")).id,
            status: "pending",
            role: "common"
        }
        let response = null
        if(alreadyApproved)
        {
            payload.id = JSON.parse(localStorage.getItem("user")).id
            payload.status = "approved"
            response = await UpdateStore(payload)
        }else{
            response = await AddStores(payload)
        }

        if(response.success)
        {
            message.success(response.message)
            navigate("/profile")
        } else
        {
            message.error(response.message)
        }
        dispatch(ShowLoader(false))
      } catch (error) {
        dispatch(ShowLoader(false))
        message.error(error.message)
      }
    } 

    const checkIfAlreadyApplied = async () => {
        try {
            dispatch(ShowLoader(true))
            const response = await GetStoreById(
                JSON.parse(localStorage.getItem("user")).id
                )
                console.log(response.data.status)
            if(response.success)
            {
                setAlreadyApplied(true)
                if(response.data.status === "approved")
                {
                    setAlreadyApproved(true)
                    form.setFieldsValue(response.data)
                    setDays(response.data.days)
                }
            }
            dispatch(ShowLoader(false))
        } catch (error) {
            dispatch(ShowLoader(true))
            message.error(error.message)
        }
    }

    useEffect(() => {
        checkIfAlreadyApplied()
    }, [])
  return (
    <>
    <div class="relative w-full mt-4 bg-white p-4">
       { !alreadyApplied || alreadyApproved  && (
        <>
          {alreadyApproved ?  <h2 className='text-gray-500 font-medium text-3xl'>更新画面</h2> :  <h2 className='text-gray-500 font-medium text-3xl'>新規登録</h2>}
          <div class="w-full border-b border-gray-300 border-2"></div>
        <Form layout='vertical' onFinish={onFinish} form={form}>
        <Row className='flex justify-center'>
            <Col span={8}>
                <Form.Item className='mt-4' label="姓:" name="firstName"
                rules={[
                    {
                        required: true,
                        message: "姓は必ず入力してください。"
                    }
                ]}>
                    <input type='text' className='border border-gray-500 rounded-lg px-8 py-2 w-80' />
                </Form.Item>
                <Form.Item className='mt-4' label="名前:" name="lastName"
                rules={[
                    {
                        required: true,
                        message: "名前は必ず入力してください。"
                    }
                ]}>
                    <input type='text' className='border border-gray-500 rounded-lg px-8 py-2 w-80' />
                </Form.Item>

                <Form.Item className='mt-4' label="性別:" name="gender"
                rules={[
                    {
                        required: true,
                        message: "性別は必ず入力してください。"
                    }
                ]}>
                    <select className='border border-gray-500'>
                        <option value="男性">男性</option>
                        <option value="女性">女性</option>
                        <option value="その他">その他</option>
                    </select>
                </Form.Item>


                <Form.Item className='mt-4' label="メールアドレス:" name="email"
                rules={[
                    {
                        required: true,
                        message: "メールアドレスは必ず入力してください。"
                    }
                ]}>
                    <input type='text' className='border border-gray-500 rounded-lg px-8 py-2 w-80' />
                </Form.Item>

                <Form.Item className='mt-4' label="電話番号:" name="phone"
                rules={[
                    {
                        required: true,
                        message: "電話番号は必ず入力してください。"
                    }
                ]}>
                    <input type='text' className='border border-gray-500 rounded-lg px-8 py-2 w-80' />
                </Form.Item>

                <Form.Item className='mt-4' label="Webサイト:" name="website"
                rules={[
                    {
                        required: true,
                        message: "Webサイトは必ず入力してください。"
                    }
                ]}>
                    <input type='text' className='border border-gray-500 rounded-lg px-8 py-2 w-80' />
                </Form.Item>

                <Form.Item className='mt-4' label="住所:" name="address"
                rules={[
                    {
                        required: true,
                        message: "住所は必ず入力してください。"
                    }
                ]}>
                    <textarea type='text' className='border border-gray-500 rounded-lg px-8 py-2' />
                </Form.Item>

                <Form.Item className='mt-4' label="開始時間:" name="startime"
                rules={[
                    {
                        required: true,
                        message: "開始時間は必ず入力してください。"
                    }
                ]}>
                    <input type='time' className='border border-gray-500 rounded-lg px-8 py-2' />
                </Form.Item>


                <Form.Item className='mt-4' label="終了時間:" name="endtime"
                rules={[
                    {
                        required: true,
                        message: "終了時間は必ず入力してください。"
                    }
                ]}>
                    <input type='time' className='border border-gray-500 rounded-lg px-8 py-2' />
                </Form.Item>


                <Form.Item className='mt-4' label="日付:" name="days"
                rules={[
                    {
                        required: true,
                        message: "日付は必ず入力してください。"
                    }
                ]}>
                    <div className='flex justify-between'>
                     {["月","火","水","木","金","土","日"].map((day, index) => (
                        <div>
                            <label>{day}</label>
                        <input type="checkbox" key={index} value={day} checked={days.includes(day)}
                        onChange={(e) => {
                            if(e.target.checked)
                            {
                                setDays([...days, e.target.value])
                            } else 
                            {
                                setDays(days.filter((item) => item !== e.target.value))
                            }
                        }} />
                        </div>
                     ))}
                    </div>
                </Form.Item>
            </Col>
        </Row>
        <div className='flex justify-end'>
            <button type='button' className='mr-4 border border-blue-red bg-red-800 text-white px-2 py-2 rounded-lg'>キャンセル</button>
            <button type='submit' className='border border-blue-400 bg-blue-800 text-white px-2 py-2 rounded-lg'>送信</button>
        </div>
      </Form>
        </>
       )}

       {alreadyApplied && !alreadyApproved && (
       <div className='flex justify-center'>
          <h3 className='text-red-500 text-2xl font-medium'>既に登録済みになります。</h3>
        </div>)}
    </div>
    </>
  )
}

export default AppFromMenu