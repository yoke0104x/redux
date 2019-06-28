import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as carAction from '../../store/car.action'
class CarHeader extends Component {
    state={
        flag:false,
        text:'',
        dis:false
    }
  render() {
      let {flag,text,dis,flas} = this.state;
      let {pushSearch,data:{search}} = this.props;
      let a = this;
    return (
      <div className="car_header">
            <div className="car_tops">
                <span>汽车之家</span>
                <div>
                    <input type="text" value={text} onChange={(e)=>{
                        this.setState({text:e.target.value})
                    }} onFocus={()=>{
                        this.setState({dis:true})
                    }} onBlur={()=>{
                        this.setState({dis:false})
                    }}/>
                    <ul style={{display:dis?"block":"none"}}>
                        {
                            search.map((item,i)=><li key={i}>{item}</li>)
                        }
                    </ul>
                </div>
                <span onClick={()=>{
                    pushSearch(text)
                    this.setState({text:""})
                }}>搜索</span>
            </div>
            <div className="car_top" style={{position:flas?"fixed":"",top:0,left:0}}>
                <NavLink to='/index' activeClassName="attr">首页</NavLink>
                <NavLink to='lookingCar' activeClassName="attr">找车</NavLink>
                <NavLink to='forum' activeClassName="attr">论坛</NavLink>
                <span>二手车</span>
                <span style={{position:"relative"}} onClick={()=>{
                    this.setState({flag:!flag})
                }}>服务{flag?"↓":"↑"}
                <div style={{position:"absolute",top:"28px",right:"-25",border:"1px solid #ccc",width:"80px",background:"#fff",display:flag?"block":"none"}}><p>金融</p><p>车商城</p></div>
                </span>
            </div>
      </div>
    )
  }
}
export default connect(
    state=>{
        return state
    },
    dispatch=>bindActionCreators(carAction,dispatch)
)(CarHeader)
