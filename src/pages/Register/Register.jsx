import React from 'react'

function Register() {
    return (
        <div className="mt-40 mx-20">
            <div className="flex justify-center mt-32 mx-10 mb-10">
                <form className="w-full max-w-2xl">
                    <p className="text-2xl text-black font-bold text-center mb-5">
                        新規登録
                    </p>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="inline-last-name"
                            >
                                姓
                                <text className="text-white bg-red-500 font-normal text-sm ml-2 p-0.5 rounded-md">
                                    必須
                                </text>
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="text"
                                defaultValue=""
                                placeholder="姓"
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="inline-first-name"
                            >
                                名
                                <text className="text-white bg-red-500 font-normal text-sm ml-2 p-0.5 rounded-md">
                                    必須
                                </text>
                            </label>
                        </div>

                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="text"
                                defaultValue=""
                                placeholder="名"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register