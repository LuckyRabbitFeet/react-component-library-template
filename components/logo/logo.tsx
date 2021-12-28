import img, { ReactComponent as Svg } from '../../public/images/logo.svg'

export const Logo: React.FC = () => {
  return (
    <div className="bg">
      <img src={img} alt="img" />
      <Svg />
    </div>
  )
}

export default Logo
