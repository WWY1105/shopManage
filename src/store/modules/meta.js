const meta={
    state:{
        title:''
    },
    mutations: {
        SET_TITLE:(state,title)=>{
            state.title=title;
        }
    },
    actions: {
        setTitle({commit},query){
            return new Promise((resolve, reject) => {
                commit('SET_TITLE',query)
            })
        }
    }
}



export default meta;