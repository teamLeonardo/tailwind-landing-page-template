import { FormRegister } from "@/components/ui/FormRegister"

export const metadata = {
  title: 'Sign Up - Simple',
  description: 'Page description',
}

export default function SignUp() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Bienvenido. Existimos para facilitar el emprendimiento.</h1>
          </div>

          {/* Form */}
          <FormRegister />
        </div>
      </div>
    </section>
  )
}
