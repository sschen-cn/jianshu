import axios from 'axios'
import * as actionTypes from './actionTypes'
import {
  fromJS
} from 'immutable'

const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
  writerList: result.users,
  totalPage: Math.ceil(result.users.length / 5)
})

const addHomeList = (list, nextPage) => ({
  type: actionTypes.ADD_HOME_LIST,
  list: fromJS(list),
  nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      const action = changeHomeData(result)
      dispatch(action)
    }).catch((error) => {
      console.log(error);
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data
      dispatch(addHomeList(result, page + 1))
    }).catch((error) => {
      console.log(error);
    })
  }
}

export const toggleTopShow = (show) => ({
  type: actionTypes.TOGGLE_SROLL_TOP,
  show
})

export const changeWriterPage = (page) => ({
  type: actionTypes.CAHNGE_WRITER_PAGE,
  page
})