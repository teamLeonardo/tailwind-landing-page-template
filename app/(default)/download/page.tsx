import { TabsDonwload } from "@/components/ui/tabsDonwload";

export default function Donwload() {

    return <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

            {/* Hero content */}
            <div className="pt-32 pb-12 md:pt-15 md:pb-20">

                {/* Section header */}
                <div className="text-center">
                    <TabsDonwload />
                </div>
                <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-[45%,55%]  gap-4">
                    <div className="relative flex flex-col justify-center">
                        <div className="mt-20">
                            <div className="grid grid-cols-[80px,1fr] gap-2">
                                <div className="wt-col-inline">
                                    <img src={"images/icon-bot-master.png"} alt="" />
                                </div>
                                <div className="flex items-center">
                                    <h1 className="font-bold text-4xl text-slate-700">
                                        WAMbot BETA
                                    </h1>
                                </div>
                            </div>
                            <p className="font-light text-slate-800 text-2xl">
                                Version enfocada a buscar la comodidad.
                            </p>
                        </div>
                        <div className="mt-8 ">
                            <a
                                href="/ejecutables/wambot-beta-1.0.0-setup.exe"
                                download
                                className="btn
                                w-[200px]
                                rounded-full
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
                            >
                                Descargar .exe
                            </a>
                        </div>
                    </div>
                    <div className="relative grid grid-rows-[1fr,auto]">
                        <div className="max-w-[200%] md:max-w-2xl fixed -rotate-12 md:relative mx-auto my-10 drop-shadow-2xl">
                            <div className="w-full h-11 rounded-t-lg bg-gray-200 flex justify-start items-center space-x-1.5 px-3">
                                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                            </div>
                            <div className="relative bg-gray-700 border-t-0 rounded-b-lg w-full h-96">
                                <img
                                    src="/images/wambot-walp.png"
                                    alt="IntelliJ IDEA Ultimate"
                                    className="w-[200%] md:w-auto md:h-full relative"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <div className="wt-row wt-row_size_s rs-text-3 rs-text-3_theme_light">
                                <div className="wt-col-inline wt-col-sm-12 wt-offset-top-12">
                                    <p className="jb-text-nowrap">Version: 2024.1.8</p>
                                    <p className="jb-text-nowrap">Build: 0.1.4</p>
                                    <p className="jb-text-nowrap">8 Enero 2023</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
}