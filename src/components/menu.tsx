import Link from "next/link";

export default function Menu(){

    const style = {

        icons: "w",
        menu: "flex flex-row justify-around absolute inset-x-0 bottom-0 shadow-2xl p-1",
        icone: "flex flex-col items-center"
        
    }

    return(
        
        <div className={style.menu}>
            <div className={style.icone}>
                <div className={style.icons}><span className="material-symbols-outlined">home</span></div>
                <h4>Home</h4>
            </div>

            <div className={style.icone}>
                <div><span className="material-symbols-outlined">calendar_today</span></div>
                <h4>Calendar</h4>
            </div>

            <div className={style.icone}>
                <div><span className="material-symbols-outlined">work</span></div>
                <h4>Work</h4>
            </div>

            <div className={style.icone}>
                <div><span className="material-symbols-outlined">favorite</span></div>
                <h4>Favorite</h4>
            </div>

            <div className={style.icone}>
                <div><span className="material-symbols-outlined">person</span></div>
                <h4>User</h4>
            </div>

        </div>
    
    )

}