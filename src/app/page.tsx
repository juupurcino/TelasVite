import Link from "next/link";

export default function Home() {

  const style = {
    loc: "text-5xl text-amber-800",
    cartao:"rounded-lg border-4 border-inherit shadow-2xl"
    
  }

  return (

    
    <>
      <div className={style.cartao}>
        <span className={style.loc + " material-symbols-outlined"}>credit_card</span>
        <h4> Credit Cards</h4>
      </div>
      
    </>
  );
}
