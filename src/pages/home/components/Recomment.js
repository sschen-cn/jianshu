import React, {
  PureComponent
} from 'react'
import {
  RecommentWrapper,
  RecommentItem
} from '../style'
import {
  connect
} from 'react-redux'

class Recomment extends PureComponent {
  render() {
    return (
      <RecommentWrapper>
        {
          this.props.list.map((item)=>{
            return <RecommentItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>
          })
        }
      </RecommentWrapper>
    );
  }
}

const mapstate = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})

export default connect(mapstate, null)(Recomment)