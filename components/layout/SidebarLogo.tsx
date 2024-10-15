import { useRouter } from "next/router";


const SidebarLogo = () => {
  const router = useRouter();
  
  return (
    <div 
      onClick={() => router.push('/')}
      className="
        rounded-full 
        h-14
        w-14
        p-4 
        flex 
        items-center 
        justify-center 
        hover:bg-red-900 
        hover:bg-opacity-10 
        cursor-pointer
    ">
      
    </div>
  );
};

export default SidebarLogo;