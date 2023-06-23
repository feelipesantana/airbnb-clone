import Image from "next/image";

export function Avatar(){
  return(
    <Image 
      className="rounded-full"
      height={30}
      width={30}
      alt="Avatar"
      src="/assets/placeholder.jpg"
    />
  )
}