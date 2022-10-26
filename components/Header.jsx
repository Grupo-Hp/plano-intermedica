import { Link } from "react-scroll";
import { FiPhone } from "react-icons/fi";
import Nav from '../components/Nav'

export default function Header() {
    return (
        <div className="contatoImage2">
            <div className="rgba-10">
                <Nav />
                <div className="sm:h-[80vh] flex items-center">
                    <div className="grid grid-cols-2 w-10/12 mx-auto">
                        <div className="col-span-2 xl:col-span-1 text-white p-5 rounded-xl lg:mb-12 lg:mt-0 my-16">
                            <h3 className="text-6xl font-light mb-5">Reduza o valor do seu plano de saúde</h3>
                            <p className="text-xl">Em até</p>
                            <h1 className="font-bold text-9xl xl:text-super px-10 mb-5">40%</h1>
                            <ul>
                                <li className="flex mb-3"><FiPhone className={`text-primary-10 text-4xl`} /><p className="text-4xl">&ensp; 21 4040-4148</p></li>
                                <li><p className="text-xl lg:text-2xl">Cotação com nossa equipe e 100% Online.</p></li>
                            </ul>
                            <div className="grid sm:flex gap-x-4 text-center">
                                <a href="./contato" className="mt-2 px-10 cursor-pointer py-3 font-medium text-md text-white border-2 hover:border-secondary border-white rounded-xl leading-tight uppercase hover:bg-secondary transition duration-300 ease-in-out">simulador online</a>
                                <Link
                                    to="contato"
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                    className="mt-2 px-10 cursor-pointer py-3 font-medium text-md border-2 border-white text-white hover:border-secondary hover:bg-secondary rounded-xl leading-tight uppercase transition duration-300 ease-in-out"
                                >
                                    preço rápido
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}