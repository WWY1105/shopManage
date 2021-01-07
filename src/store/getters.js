const getters = {
    token: state => state.user.token,
    name: state => state.user.name,
    branch: state => state.user.branch,
    distributions:state=>state.distribution.distributions
  }
  export default getters
  