import { Coponent } from 'react'

class LavaComponent extends Coponent {
  render() {
    const parent = {
      position: 'relative',
    }
    const circle = {
      width: 100,
      height: 100,
      borderRadius: 50,
      position: 'absolute',
    }
    const circle1 = {
      backgroundColor: 'red',
    }
    const circle2 = {
      backgroundColor: 'white',
      left: 20,
      top: 20,
      width: 40,
      height: 40,
    }
    const circle3 = {
      backgroundColor: 'black',
      top: 7,
      width: 25,
      height: 25,
    }
    const circle4 = {
      backgroundColor: 'green',
      left: 60,
    }
    const circle5 = {
      backgroundColor: 'blue',
      left: 50,
      top: 50,
    }
    const circle6 = {
      backgroundColor: 'navy',
      left: 50,
    }
    const circle7 = {
      backgroundColor: 'purple',
      left: 50,
    }
    return (
      <div style={parent}>
        <div style={(circle, circle1)}>
          <div style={(circle, circle2)}>
            <div style={(circle, circle3)}>
              <div style={(circle, circle4)}>
                <div style={(circle, circle5)}>
                  <div style={(circle, circle6)}>
                    <img
                      src="./img/잔디.png"
                      width="400px"
                      style={{ position: 'absolute', right: -150 }}
                      alt="어오"
                    />
                    <div style={(circle, circle7)}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LavaComponent
