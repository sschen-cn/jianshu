import styled from 'styled-components'

export const HomeWrapper = styled.div `
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div `
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
    border-radius: 6px;
  }
`;

export const HomeRight = styled.div `
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div `
  overflow: hidden;
  padding: 20px 0 10px 0;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div `
  float: left;
  height: 32px;
  line-height: 32px;
  margin-right: 18px;
  margin-bottom: 10px;
  padding-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic{
    display: block;
    float: left;
    width: 32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div `
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div `
  overflow: hidden;
  width: 500px;
  float: right;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 18px;
    font-size: 13px;
    color: #999;
  }
`;

export const RecommentWrapper = styled.div `
  margin: 30px 0;
  width: 280px;
`;

export const RecommentItem = styled.div `
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;

export const WriterWrapper = styled.div `
  margin-bottom: 20px;
  padding-top: 0;
  font-size: 13px;
  text-align: center;
`;

export const LoadMore = styled.div `
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  margin: 30px 0;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

export const BackTop = styled.div `
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #ccc;
  cursor: pointer;
  .iconfont{
    font-weight: 700;
  }
`;

export const Title = styled.div `
  text-align: left;
  font-size: 14px;
  color: #969696;
`;

export const WriterSwitch = styled.span `
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-out;
    transform-origin: center center;
  }
`;

export const WriterItem = styled.div `
  overflow: hidden;
  margin: 20px 0;
  text-align: left;
  .avatar {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
  .like {
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
  }
  .nickname {
    padding-top: 5px;
    margin: 0px 60px 10px;
    font-size: 14px;
    display: block;
  }
  .desc {
    margin: 2px 0 10px;
    font-size: 12px;
    color: #969696;
  }
`;