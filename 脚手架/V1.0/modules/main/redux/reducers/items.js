const initialState = [{
    text: 'Use Redux'
}]

export default function items(state = initialState, action) {
    switch (action.type) {
        case "ADD":
            //如果这里直接返回 state，则不触发 render 方法，需要返回一个新的对象，才会触发render
            //和 在组件中 使用  this.setState 效果一样。如果直接 this.state.items = xxx; 这样不会触发render
            console.log('reducers:==>ADD',state)
            var newState = [...state];
            newState.push({text:action.id})
            return newState;

        case "REMOVE":
            console.log('reducers:==>REMOVE')
            return state;

        default:
            return state;
    }
}
