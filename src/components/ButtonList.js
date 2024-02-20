import Button from "./Button";
const ButtonList = ()=>{
    const btnList=["All","Mixes","Movies","Music","Live","News","Namaste Javascript","Bollywood Music","React"];
    

    return(
        <div className="flex">
          {btnList.map((btn)=>
          <Button key={btn.toString()}
          name={btn}/>)}
            
        </div>
    )
}

export default ButtonList;
