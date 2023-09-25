import { Component } from 'react'
import PropTypes from 'prop-types'

class ClassComponent extends Component {
  render() {
    const { food } = this.props
    return (
      <>
        <div>
          안녕하세요 제가 좋아하는 음식은{' '}
          <span style={{ color: 'red' }}>{food}</span>
          입니다
        </div>
      </>
    )
  }
}

ClassComponent.defaultProps = {
  food: '기본음식',
}
ClassComponent.propTypes = {
  food: PropTypes.string,
}
export default ClassComponent
