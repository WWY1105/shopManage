const getters = {
    token: state => state.user.token,
    name: state => state.user.name,
    distributions:state=>state.distribution.distributions,
    title:state=>state.meta.title,
    branchs:state=>state.branchs.branch
  }
  export default getters
  