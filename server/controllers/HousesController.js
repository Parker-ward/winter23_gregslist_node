import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";

export class HousesController extends BaseController {
  constructor() {
    super('api/houses')
    this.router
      .get('', this.getHouses)
      .post('', this.createHouse)
      .get('/:houseId', this.getHouseById)
  }
  async getHouseById(req, res, next) {
    try {
      const houseId = req.params.houseId
      const house = await housesService.getHouseById(houseId)
      return res.send(house)
    } catch (error) {
      next(error)
    }
  }
  async getHouses(req, res, next) {
    try {
      const houses = await housesService.getHouses()
      return res.send(houses)
    } catch (error) {
      next(error)
    }
  }

  async createHouse(req, res, next) {
    try {
      const houseData = req.body
      const house = await housesService.createHouse(houseData)
      return res.send(house)
    } catch (error) {
      next(error)
    }
  }
}