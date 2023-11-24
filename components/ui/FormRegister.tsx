// @ts-nocheck
'use client'
import * as yup from "yup";
import "yup-phone-lite";
import { FormEvent, useState } from 'react';
import IntlTelInput, { CountryData } from 'react-intl-tel-input-18';
import 'react-intl-tel-input-18/dist/main.css';
import errorUtils from "@/utils/errorControll";
import { useLocalStorage } from "@/utils/useLocalStorage";
import { supabase } from "@/services/supabase";
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignupSchema = (selectedCountry: any) => yup.object().shape({
    name: yup.string()
        .min(2, 'muy corto')
        .max(70, 'muy largo!')
        .required('Required'),
    phone: yup.string()
        .phone(selectedCountry, "porfabor valida el formato de numero.")
        .required("El numero es requerido."),
    password: yup.string()
        .min(8, 'Contraseña de minimo de 8 caracteres.')
        .matches(/[0-9]/, 'Contraseña requiere numero')
        .matches(/[a-z]/, 'Contraseña requiere letras en minuscula.')
        .matches(/[A-Z]/, 'Contraseña requiere letras en Mayuscula.')
        .matches(/[^\w]/, 'Contraseña requiere simbolos.'),
    confirmPasswords: yup.string()
        .oneOf([yup.ref('password'), null], 'Contraseñas no coinciden.'),
});


export const FormRegister = () => {

    const [fullPhone, setFullPhone] = useState("")

    const { push } = useRouter()
    const [selectedCountry, setSelectedCountry] = useState("PE")

    const defaultFetch = {
        isLoad: false,
        isError: false,
        isSuccess: false
    }
    const [stateFetch, setStateFetch] = useState(defaultFetch)

    const { setItem } = useLocalStorage()

    const defaultObjFormError = {
        name: "",
        phone: "",
        password: "",
        confirmPasswords: ""
    }

    const [objForm, setObjForm] = useState(defaultObjFormError)

    const [objFormError, setObjFormError] = useState(defaultObjFormError)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        validateFormulario()
    }

    const supaSingnUp = async (newUser: any) => {
        if (typeof newUser.phone === "string" && newUser.phone.length > 0) {

            let { error } = await supabase.auth.signUp({
                phone: newUser.phone,
                password: newUser.password,
                options: {
                    data: {
                        name: newUser.name,
                        phone: newUser.phone
                    }
                }
            });


            if (error) {
                throw error;
            }


        }
    }

    const validateFormulario = async () => {
        setStateFetch({ ...defaultFetch, isLoad: true })
        try {
            const value = await SignupSchema(selectedCountry).validate(objForm)
            const newUser = {
                ...value,
                phone: fullPhone
            }
            await supaSingnUp(newUser)
            setObjForm(newUser)
            setObjFormError(defaultObjFormError)
            setItem("newUser", JSON.stringify(newUser))
            setStateFetch({ ...defaultFetch, isSuccess: true })

            toast.success("¡Listo! Le hemos enviado un SMS con el código.", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            setTimeout(() => {
                push("/confirmation")
            }, 2000);

        } catch (error) {
            toast.error("Lo sentimos, paso un error inesperado.", {
                position: toast.POSITION.TOP_RIGHT
            });
            setStateFetch({ ...defaultFetch, isError: true })

            errorUtils
                .buildError(error)
                .then((data) => {
                    setObjFormError({ ...defaultObjFormError, ...data })
                })
        }


    }

    const handleChange = (newValue: any) => {
        setObjForm((state) => ({ ...state, ...newValue }))
    }


    return <div className="max-w-sm mx-auto">
        <ToastContainer />
        <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">
                        Nombre <span className="text-red-600">*</span>
                    </label>
                    <input
                        id="name"
                        name='name'
                        type="text"
                        className="form-input w-full text-gray-800"
                        placeholder="Introduce tu nombre"
                        required
                        defaultValue={objForm.name}
                        value={objForm.name}
                        onChange={(event) => handleChange({ [event.target.name]: event.target.value })}
                    />
                    {objFormError.name?.length > 0 && <span className="text-red-600">
                        {objFormError.name}
                    </span>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                    <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="phone"
                    >
                        Celular <span className="text-red-600">*</span>
                    </label>
                    <IntlTelInput
                        fieldId='phone'
                        fieldName='phone'
                        onSelectFlag={(_, selectedCountry) => {
                            setSelectedCountry(selectedCountry.iso2?.toUpperCase())
                        }}
                        containerClassName="intl-tel-input w-full"
                        inputClassName="form-input w-full text-gray-800"
                        preferredCountries={['PE']}
                        defaultValue={objForm.phone}
                        value={objForm.phone}
                        onPhoneNumberChange={(isValid: boolean, value: string, selectedCountryData: CountryData, fullNumber: string, extension: string) => {
                            handleChange({ phone: value })
                            setFullPhone(fullNumber)
                            setSelectedCountry(selectedCountryData.iso2?.toUpperCase())
                        }}
                        onPhoneNumberBlur={(isValid: boolean, value: string, selectedCountryData: CountryData, fullNumber: string, extension: string) => {
                            handleChange({ phone: value })
                            setFullPhone(fullNumber)
                            setSelectedCountry(selectedCountryData.iso2?.toUpperCase())
                        }}
                    />
                    {objFormError.phone?.length > 0 && <span className="text-red-600">
                        {objFormError.phone}
                    </span>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3 relative">
                    <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="password"
                    >
                        <div className="block relative lg:absolute lg:left-full lg:top-0">
                            <div className="shadow-xl border mb-4 border-gray-300 w-full lg:w-[300px] max-h-xl overflow-auto p-1">
                                La contraseña tiene que contener al menos 1 numero, 1 Mayuscula, 1 Minuscula, 1 Simbolo y tener un minimo de 8 caracteres. <br />
                                <div className="inline-flex gap-2  text-xs">
                                    Ejem: <pre className="text-green-600 font-bold text-sm">@Lucho123</pre>
                                </div>
                            </div>
                        </div>
                        Contraseña <span className="text-red-600">*</span>

                    </label>
                    <input
                        id="password"
                        type="password"
                        name='password'
                        className="form-input w-full text-gray-800"
                        placeholder="Ejemplo: @Lucho123"
                        required
                        defaultValue={objForm.password}
                        value={objForm.password}
                        onChange={(event) => handleChange({ [event.target.name]: event.target.value })}
                    />
                    {
                        objFormError.password?.length > 0 && (
                            <span className="text-red-600">
                                {objFormError.password}
                            </span>
                        )
                    }

                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                    <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="confirm-password"
                    >
                        Confirmacion de Contraseña <span className="text-red-600">*</span>
                    </label>
                    <input
                        id="confirm-password"
                        type="password"
                        name='confirmPasswords'
                        className="form-input w-full text-gray-800"
                        placeholder="Repita Ejemplo: @Lucho123"
                        required
                        defaultValue={objForm.confirmPasswords}
                        value={objForm.confirmPasswords}
                        onChange={(event) => handleChange({ [event.target.name]: event.target.value })}
                    />
                    {objFormError.confirmPasswords?.length > 0 && <span className="text-red-600">
                        {objFormError.confirmPasswords}
                    </span>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                    <button
                        disabled={stateFetch.isLoad || stateFetch.isSuccess ? true : false}
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
                        ¡Comencemos!
                    </button>
                </div>
            </div>
            <div className="text-sm text-gray-500 text-center mt-3">
                Al crear una cuenta, aceptas los <a className="underline" href="#0">términos y condiciones</a>, así como nuestra <a className="underline" href="#0">política de privacidad.</a>
            </div>
        </form>

    </div>

}