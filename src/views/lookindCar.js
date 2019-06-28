import React, { Component } from 'react'
import CarHeader from './component/CarHeader'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as carAction from '../store/car.action'
import '../mock/index'
import LookingUi from './component/lookingUi'
class lookindCar extends Component {
    state={
        flag:false
    }
  render() {
      let {data:{dataLook,soleData}} = this.props
      console.log(this.props)
      let {flag} = this.state;
    return (
      <div className="main" onScroll={()=>{
          this.setState({flag:false})
      }}>
          <CarHeader/>
          <div className="mainapp">
                <ul style={{display:flag?"none":"block"}}>
                    {
                         dataLook.map(item=>{
                                return <div key={item.id}><h2>{item.title}</h2>
                                    {
                                        item.arr.map((items,key) =>{
                                            return <p key={key}><span><img src={items.img} alt=""/></span><span>{items.title}</span></p>
                                        })
                                    }
                                </div>
                         })
                    }
                </ul>
                <ol style={{display:flag?"block":"none"}}>
                        <div><h2>{soleData.title}</h2>
                            {
                                soleData.arr && soleData.arr.map((items,key) =>{
                                    return <p key={key}><span><img src={items.img} alt=""/></span><span>{items.title}</span></p>
                                })
                            }
                        </div>    
                </ol>
          </div>
          <LookingUi dataLook={dataLook} flag={flag} call={this.call.bind(this)}/>
      </div>
    )
  }
  componentDidMount(){
      let {dataLook} = this.props;
      dataLook("/api/lookindCar")
  }
  call(id,flag){
    let {getSoleData} = this.props
    getSoleData(id)
    this.setState({flag})
  }
}
export default connect(
    state=>{
        return state
    },
    dispatch=>bindActionCreators(carAction,dispatch)
)(lookindCar)