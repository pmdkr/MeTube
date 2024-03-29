import Button from "./Button";
const ButtonList = ()=>{
    const btnList=["All","Mixes","Movies","Music","Live","News","Namaste Javascript","Bollywood Music","T-Series","React","Python","Thrillers"];
    

    return(
        <div className="flex justify-center">
          {btnList.map((btn)=>
          <Button key={btn.toString()}
          name={btn}/>)}
            
        </div>
    )
}

export default ButtonList;
