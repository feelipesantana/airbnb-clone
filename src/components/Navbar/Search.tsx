import {BiSearch} from 'react-icons/bi'
export function Search(){
  return(
    <div
      className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer"

    >
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">
          teste
        </div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center ">
          test2
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block"> Add guess</div>
          <div className="bg-rose-500 rounded-full text-white p-2">
            <BiSearch size={18}/>
          </div>
        </div>
      </div>
    </div>
  )
}