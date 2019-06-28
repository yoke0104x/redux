import React, { Component } from 'react'
import CarHeader from './component/CarHeader'
import {connect} from 'react-redux'
class forum extends Component {
  render() {
      console.log(this.props)
      let {data:{dataIndex}} = this.props;
    return (
      <div className="main">
          <CarHeader/>
          <div className="mainapp">
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
    )
  }
}
export default connect(
    state=>{
        return state
    }
)(forum)