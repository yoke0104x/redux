import Mock from 'mockjs'
import data from './data.json'
Mock.mock('/api/index',{
    "data|20-30":[
        {
            'title':'@ctitle',
            'img':'@img(100x100,"red",1611B)',
            'id|+1':0
        }
    ]
})

Mock.mock('/api/lookindCar',{
    data
})