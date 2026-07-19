import Logo from '../../public/logo.svg'
import Moon from '../../public/icon-moon.svg'
import Sun from '../../public/icon-sun.svg'

type NavbarProps ={
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({isDark, setIsDark}:NavbarProps) {
  



  return (
    <div className="mt-6">
      <main className="p-4 flex justify-between items-center bg-white shadow rounded-2xl dark:bg-neutral-600">
        <div className='cursor-pointer'><img src={Logo} alt="Logo" /></div>
        <div  onClick={()=> setIsDark(!isDark)} className='bg-gray-100 rounded-md p-2 cursor-pointer flex items-center justify-center dark:bg-neutral-500'>
            {
                isDark ? <img src={Sun} /> : <img src={Moon} />
            }
        </div>
      </main>
    </div>
  )
}

export default Navbar
