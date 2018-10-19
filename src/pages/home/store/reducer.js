import {
  fromJS
} from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false,
  writerList: [],
  writerPage: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList),
        totalPage: fromJS(action.totalPage)
      })
    case actionTypes.ADD_HOME_LIST:
      return state.merge({
        articleList: fromJS(state.get('articleList').concat(action.list)),
        articlePage: action.nextPage
      })
    case actionTypes.TOGGLE_SROLL_TOP:
      return state.merge({
        showScroll: action.show
      })
    case actionTypes.CAHNGE_WRITER_PAGE:
      return state.merge({
        writerPage: action.page
      })
    default:
      return state;
  }
}