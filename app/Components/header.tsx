import Link from 'next/link'
import {UserIcon,CartIcon,SearchIcon} from './icons'
export default function Header(){
    return(
        <div className='bg-white  '>
            <div className='flex justify-between ml-8 mr-8 items-center'>
                <div><SearchIcon/></div>
                <div className="headline-two text-custom-purple-dark">Avion</div>
                <div className='flex justify-between gap-4'>
                    <div><CartIcon/></div>
                    <div><UserIcon/></div>
                </div>
            </div>
            <hr/>
            <div className='flex justify-center items-center h-[3rem] list-none'>
                <div className='flex justify-between  gap-8 headline-six text-custom-purple-dark' style={{ color: '#4E4D93' }}>
                    <Link href="#">Plant Pots</Link>
                    <Link href="#">Cermaics</Link>
                    <Link href="#">Tables</Link>
                    <Link href="#">Chairs</Link>
                    <Link href="#">Crockery</Link>
                    <Link href="#">Tableware</Link>
                    <Link href="#">Cutlery</Link>
                </div>
            </div>
        </div>
    )
} 