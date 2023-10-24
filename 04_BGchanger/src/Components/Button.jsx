function Button({bgc,txt,onBtnClick}){
    return(
        <button className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:bgc}}
                onClick={()=> onBtnClick(bgc) }
        >
                    {txt}
                
        </button>

    )
}

export default Button