import { FormConfirmation } from "@/components/ui/FormConfirmation"


export const metadata = {
    title: 'Confirmacion',
    description: 'Se enviara un sms',
}

export default function confirmation() {
   
    return (
        <section className="bg-gradient-to-b from-gray-100 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <FormConfirmation />
            </div>
        </section>
    )
}
