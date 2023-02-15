import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class HousesService {
  async getHouseById(houseId) {
    const house = await dbContext.Houses.findById(houseId)
    if (!house) {
      throw new BadRequest('Bad Id')
    }
    return house
  }

  async getHouses() {
    const houses = await dbContext.Houses.find()
    return houses
  }

  async createHouse(houseData) {
    const house = await dbContext.Houses.create(houseData)
    return house
  }
}


export const housesService = new HousesService()