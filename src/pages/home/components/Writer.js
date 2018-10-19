import React, {
  PureComponent
} from 'react'
import {
  WriterWrapper,
  Title,
  WriterSwitch,
  WriterItem
} from '../style'
import {
  actionCreators
} from '../store'
import {
  connect
} from 'react-redux'

class Writer extends PureComponent {
  render() {
    const {
      handleChangeWritter,
      list,
      page,
      totalPage
    } = this.props
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for (let i = (page - 1) * 5; i < page * 5; i++) {
        if (newList[i]) {
          pageList.push(newList[i])
        }
      }
    }
    return (
      <WriterWrapper>
        <Title>
          <span>推荐作者</span>
          <WriterSwitch
            onClick={()=>handleChangeWritter(page,totalPage, this.spinIcon)}
          >
            <i ref={(icon) => {this.spinIcon=icon}}  className="iconfont spin">&#xe851;</i>换一批
          </WriterSwitch>
        </Title>
        {
          pageList.map((item)=>{
            return (
              <WriterItem key={item.id}>
                <img className='avatar' src={item.avatar_source} alt=''/>
                <i className='like'>关注</i>
                <p className='nickname'>{item.nickname}</p>
                <p className='desc'>写了{Math.ceil(item.total_wordage / 1000)}k字·{item.total_likes_count}喜欢</p>
              </WriterItem>
            )
          })
        }
      </WriterWrapper>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'writerList']),
  page: state.getIn(['home', 'writerPage']),
  totalPage: state.getIn(['home', 'totalPage'])
})

const mapDispath = (dispatch) => {
  return {
    handleChangeWritter(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
      if (page < totalPage) {
        dispatch(actionCreators.changeWriterPage(page + 1))
      } else {
        dispatch(actionCreators.changeWriterPage(1))
      }
    }
  }
}

export default connect(mapState, mapDispath)(Writer)