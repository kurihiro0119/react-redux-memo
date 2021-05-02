import {createStore} from 'redux';

const initData = {
    data:[{
        message:'sample data',
        created: new Date()
    }],
    message:'please type message',
    mode:'default',
    fdata:[]
};

//レデューサー
