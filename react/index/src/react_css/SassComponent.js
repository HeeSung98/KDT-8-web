import './SassComponent.scss'
import green from './img/잔디.png'

export default function SassComponent() {
  return (
    <>
      <div className="SassComponent">
        <div className="box red"></div>
        <div className="box orange"></div>
        <div className="box yellow"></div>
        <div className="box green"></div>
        <div className="box blue"></div>
        <div className="box navy"></div>
        <div className="box purple"></div>
      </div>
      <br />
      <br />
      <div className="LavaComponent parent">
        <div className="LavaComponent c1">
          <div className="LavaComponent c2">
            <div className="LavaComponent c3">
              <div className="LavaComponent c4">
                <div className="LavaComponent c5">
                  <div className="LavaComponent c6">
                    <img
                      src={green}
                      width="400px"
                      style={{ position: 'absolute', right: -150 }}
                      alt="어오"
                    />
                    <div className="LavaComponent c7"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="AniComponent c1"></div>
      <div className="AniComponent c2"></div>
      <div className="AniComponent c3"></div>
    </>
  )
}
