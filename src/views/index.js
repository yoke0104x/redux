import React, { Component } from 'react'
import CarHeader from './component/CarHeader'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as carAction from '../store/car.action'
import '../mock/index'
import Bscroll from 'better-scroll'
class Index extends Component {
    state={
        flag:false
    }
  render() {
      let {data:{dataIndex}} = this.props;
      let {flag} = this.state
      console.log(dataIndex)
    return (
      <div className="main" ref="attr">
          <div>
            <CarHeader flas={flag}/>
            <div className="mainapp" >
                    {
                        dataIndex.map(item=>{
                            return <dl key={item.id}>
                                <dd><img src={item.img} alt=""/></dd>
                                <dt>{item.title}</dt>
                            </dl>
                        })
                    }
            </div>
          </div>
      </div>
    )
  }
  componentDidMount(){
    let {dataIndex} = this.props;
    dataIndex('/api/index')
  }
  componentDidUpdate(){
    let {flag} = this.state;
    let Scroll = new Bscroll(this.refs.attr,{
        probeType:3,
        click:true
    })
    Scroll.on("scroll",(e)=>{
        console.log(e.y <-40)
        if(e.y <-40){
            this.setState({flag:true});
        }else{
            this.setState({flag:false})
        }
        console.log(flag)
    })
  }
}
export default connect(
    state=>{
        console.log(state)
        return state
    },
    dispatch=>bindActionCreators(carAction,dispatch)
)(Index)