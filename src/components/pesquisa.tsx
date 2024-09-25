import Link from "next/link";
import Image from "next/image";

import logo from "../../public/img/logo.png"


export default function Pesquisa(){

    const style = {

        back: "bg-[url('../../public/img/fundo.jpg')] bg-no-repeat flex flex-col items-center p-6",
        in: "rounded-full p-3 px-20 w-full ",
        imag: "w-2/5",
        h1: "text-3xl text-white mt-44",
        icone: "text-white flex flex-row p-2 justify-start bg-zinc-900/50 rounded-full text-xs my-8",
        loc: " text-sm ",
        localizacao: "flex w-full",
        rodape: "bg-amber-800 p-2 flex justify-around text-gray-50"
 
    }

    return(
        <>
        <div className={style.back}>
            <Image className={style.imag}src={logo} alt="Logo"></Image>
            <input className={style.in} type="text" placeholder="Where can you take you?"/>
            <h1 className={style.h1}>Discovery your next luxury escape</h1>
                <div className={style.localizacao}>
                    <div className={style.icone}>
                        <div><span className={style.loc + "material-symbols-outlined"}>location_on </span></div>
                        <h4>Rio de Janeiro</h4>
                    </div>
                </div>
        </div>
            
        <div className={style.rodape}>
            <h4>back</h4>
            <h4>back</h4>
            <h4>back</h4>
        </div>
        
        
        </>
    
    )

}