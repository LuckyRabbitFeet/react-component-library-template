import img, { ReactComponent as Svg } from '../../images/colors.svg'

export const Button: React.FC = () => {
  const xxx = new Promise<number>(resolve => {
    resolve(10)
  })
  let x = 0
  xxx.then(res => (x = res))
  return (
    <div>
      {x}
      {[1,2,3,4,5].includes(8)}
      <img src={img} alt="img" />
      <Svg />
    </div>
  )
}

export default Button
