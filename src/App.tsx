import 'regenerator-runtime/runtime'
import { World, Item } from 'react-dom-box2d'
import { useRef, useState } from 'react'
import { useCss } from 'kremling'
import { useWindowSize, useMouse } from 'react-use'
import { random, round } from 'lodash'

const toRadians = function (degrees: number) {
  return (degrees * Math.PI) / 180
}
const forceAtAngle = (force: number, angle: number) => {
  const rad = toRadians(angle)
  const x = force * Math.cos(rad)
  const y = force * Math.sin(rad)
  return [x, y]
}

const App = () => {
  const cssScope = useCss(css)

  const { width, height } = useWindowSize()
  const ref = useRef(null)
  const { docX, docY } = useMouse(ref)

  const [cannonBalls, setCannonBalls] = useState<{ force: number[] }[]>([])
  const [angle, setAngle] = useState<number>(45)
  const makeCannonBall = () => {
    setCannonBalls([{ force: forceAtAngle(1, angle) }])
    const ang = random(0, 360, true)
    setAngle(ang)
  }

  return (
    <div {...cssScope} className="root" ref={ref} onClick={makeCannonBall}>
      <World width={width} height={height} gravity={[0, 0]}>
        {cannonBalls.map((ball, i) => (
          <Item
            key={ball.force[1]}
            left={docX}
            top={docY}
            density={0.00001}
            friction={0}
            restitution={1}
            width={50}
            height={50}
            initialForce={ball.force}
            shape="circle"
          >
            <div className="cannon-ball" />
          </Item>
        ))}
        <div
          className="line"
          style={{
            top: docY,
            left: docX,
            backgroundColor: 'black',
          }}
        ></div>
        <div
          className="line"
          style={{
            top: docY,
            left: docX,
            transform: `rotate(${toRadians(angle)}rad)`,
            backgroundColor: 'green',
          }}
        >
          <span>{round(angle, 1)}°</span>
        </div>
      </World>
    </div>
  )
}

const css = /*css*/ `
* {
  margin: 0;
  padding: 0;
}

& .root {
  cursor: pointer;
}

& .line {
  position: absolute;
  height: 2px;
  width: 50px;
  transform-origin: left center;
  text-align: right;
}

& .line span {
  font-size: 10px;
}

& .cannon-ball {
  background-color: hotpink;
}
`

export default App
