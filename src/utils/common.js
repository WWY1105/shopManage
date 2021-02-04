
import { Message } from 'element-ui'

let isEmpty = (val, name)=> {
    if (!val) {
        Message({
            showClose: true,
            message: '请输入' + name,
            duration: 3 * 1000,
            type: 'error'
        })
        return false;
    } else {
        return true;
    }

}


export {
    isEmpty
}