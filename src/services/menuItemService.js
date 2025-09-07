import api from './api'

export default {
  async getMenuItems() {
    try {
      const response = await api.get('/menuitem')
      if (response.data.isSuccess) {
        return response.data.result
      } else {
        throw new Error(response.data.message)
      }
    } catch (error) {
      console.log('Error fetching menu items: ', error)
      throw error
    }
  },
  async getMenuItemById(id) {
    try {
      const response = await api.get(`/menuitem/${id}`)
      if (response.data.isSuccess) {
        return response.data.result
      } else {
        throw new Error(response.data.message)
      }
    } catch (error) {
      console.log('Error fetching menu item: ', error)
      throw error
    }
  },
  async createMenuItem(data) {
    try {
      const response = await api.post('/menuitem', data)
      if (response.data.isSuccess) {
        return response.data.result
      } else {
        throw new Error(response.data.message)
      }
    } catch (error) {
      console.log('Error creating menu items: ', error)
      throw error
    }
  },
  async updateMenuItem(id, data) {
    try {
      const response = await api.put(`/menuitem?id=${id}`, data)
      if (response.data.isSuccess) {
        return response.data.result
      } else {
        throw new Error(response.data.message)
      }
    } catch (error) {
      console.log('Error updating menu item: ', error)
      throw error
    }
  },

  async deleteMenuItem(id) {
    try {
      const response = await api.delete(`/menuitem?id=${id}`)
      if (response.data.isSuccess) {
        return response.data.result
      } else {
        throw new Error(response.data.message)
      }
    } catch (error) {
      console.log('Error deleting menu item: ', error)
      throw error
    }
  },
}
