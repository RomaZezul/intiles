export const actions = {
    async getIncidents1() {
      const response = await this.$axios.get('/api/account')
      console.log(response) 
      return response;
    }
  }