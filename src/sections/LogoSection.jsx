import { logoIconsList } from '../constants/index'

const LogoIcon = ({ icon }) => {
    return (
        <div className='flex-none flex-center marquee-item'>
            <img src={ icon.imgPath } alt={ icon.name } loading='lazy'/>
        </div>
    )
}

const LogoSection = () => {
  return (
    <div className='md: my-20 relative'>
        <div className='gradient-edge'/>
        <div className='gradient-edge'/>

        <div className='marquee h-40'>
            <div className='marquee-box md: gap-12 '>
                { logoIconsList.map((icon) => (
                    <LogoIcon key={ icon.name } icon={icon}/>
                ))}

                { logoIconsList.map((icon) => (
                    <LogoIcon key={ icon.name } icon={icon}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default LogoSection