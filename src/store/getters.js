const getters = {
    token: state => state.user.token,
    name: state => state.user.name,
    branch: state => state.user.branch,
    distributions:state=>state.distribution.distributions,
    title:state=>state.meta.title
  }
  export default getters
  