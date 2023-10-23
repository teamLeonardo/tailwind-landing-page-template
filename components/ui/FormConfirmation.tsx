'use client'

import { supabase } from "@/services/supabase";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const FormConfirmation = () => {

    const defaultValues = {
        phone: "",
        name: "",
        password: ""
    }

    const objUser = JSON.parse(localStorage.getItem("newUser") || JSON.stringify(defaultValues));

    const number = objUser?.phone || null;


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (typeof number === "string" && number.length > 0) {

            const { codigo }: any = Object.fromEntries(new FormData(e.currentTarget));

            let { data, error } = await supabase.auth.verifyOtp({
                phone: number,
                token: codigo || "",
                type: 'sms'
            });

            if (error) {

                toast.error("Lo sentimos, paso un error inesperado.", {
                    position: toast.POSITION.TOP_LEFT
                });

                return error
            }

            localStorage.removeItem("newUser");

        }
    }
    return <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <ToastContainer />
        {/* Page header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Validemos el numero.</h1>
            <h1 className="h2">{number ? number : "Numero no ingresado."}</h1>
            <h1 className="h3">{number ? "Se envio un SMS." : ""}</h1>
        </div>

        {/* Form */}
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>

            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">
                        Cogido <span className="text-red-600">*</span>
                    </label>
                    <input
                        id="codigo"
                        name='codigo'
                        type="text"
                        className="form-input w-full text-gray-800"
                        placeholder="Introduce tu codigo"
                        required
                    />

                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                    <button
                        className="btn
                            w-full
                            bg-gradient-to-tl from-lime-200 to-green-600
                            hover:bg-gradient-to-tl
                            border-none
                            [box-shadow:2px_2px_6px_#c2c2c2,_-2px_-2px_6px_#ffffff]
                            active:bg-gradient-to-tl
                            active:from-green-600
                            active:to-lime-200
                            active:[box-shadow:inset_5px_5px_10px_#117f3a,_inset_-2px_-2px_10px_#fcffb6]
                            text-white
                            "
                        type="submit"
                    >
                        ¡validar!
                    </button>
                </div>
            </div>

        </form>

    </div>

}