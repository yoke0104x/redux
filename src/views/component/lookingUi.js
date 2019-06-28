import React, { Component } from 'react'

export default class lookingUi extends Component {
  render() {
    let {dataLook,flag,call} = this.props
    console.log(this.props)
    return (
        <div className="left" >
            <ul>
                {
                    dataLook.map(item=>{
                        return <li key={item.id} onClick={()=>{
                            flag=true
                            call(item.id,flag)
                        }}>{item.title}</li>
                    })
                }
            </ul>
        </div>
    )
  }
}
