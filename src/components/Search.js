import React, { useState } from 'react'

export default function Search(props) {
    const {item,title,page_no}=props
    const [state,setstate]=useState("")
    const onchanges=(e)=>{
        setstate(e.target.value)
    }
    const handleevent=()=>{
      page_no(1)
        item(state)
    }
    const handleevents=(e)=>{
      if(e.keyCode==13){
        e.preventDefault()
        page_no(1)
        item(state)
      }
    }
  return (
    <div className=" mt-2 mb-3">
      <div className="relative justify-center flex w-full flex-wrap items-stretch">
        <input
          type="search"
          className="relative m-0 text-white -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder={`Search ${title}...`}
          aria-label="Search"
          aria-describedby="button-addon3"
          onChange={onchanges}
          
          onKeyDown={handleevents}
        />

        <button
          className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          type="button"
          id="button-addon3"
          data-te-ripple-init
          onClick={handleevent}
        
        >
          Search
        </button>
      </div>
    </div>
  )
}
