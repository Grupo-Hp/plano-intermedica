import Image from "next/image";
import { Link } from "react-scroll";

export default function Info1() {
    return (
        <div className="bg-gray-50">
            <div className="grid grid-cols-2 gap-x-4">
                <div className="col-span-2 lg:col-span-1 bg-right text-center">
                    <Image
                        src="/images/imageInfo1.png"
                        //layout='responsive'
                        width={420}
                        height={700}
                        alt="Logo homem de braço cruzado"
                    />
                </div>
                <div className="col-span-2 lg:col-span-1 w-3/4 mx-auto text-center py-16">

                    <p className="uppercase border-b-4 text-secondary pb-2 text-lg border-primary text-center lg:text-left">simulador de planos Intermédica saúde rio</p>
                    <h1 className="text-3xl mt-10 font-light lg:text-left text-primary">Planos a partir de</h1>

                    <div className="text-primary font-bold text-center">
                        <span className="text-3xl">R$</span><span className="text-9xl sm:text-super">189</span>
                        <span className="relative bottom-16 sm:bottom-28 text-3xl">,63</span>
                    </div>

                    <p className="text-3xl font-light lg:text-center mb-5 lg:pr-3">Reduza o valor do seu plano em até 40%*</p>
                    <p className="text-gray-600 text-sm text-center">*Valores para o plano de saúde na linha empresarial Intermédica.</p>
                    <p className="text-gray-600 text-sm text-center">De 0 à 18 Anos para o Rio de Janeiro</p>

                    <div className="mt-10">
                        <Link

                            to="contato"
                            smooth={true}
                            offset={50}
                            duration={1000}
                            className="px-10 cursor-pointer py-3 font-medium text-md border-2 bg-primary hover:bg-white border-primary text-white hover:text-primary rounded-xl uppercase transition duration-300 ease-in-out">preço rápido
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}