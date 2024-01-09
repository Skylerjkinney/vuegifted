import { AppState } from "../AppState"
import { api } from "./AxiosService"
import { Gift } from "../models/Gift"


class GiftService {
    async getGift() {
        const response = await api.get('api/gifts')
        console.log('getting gifts from api', response.data)
        AppState.gifts = response.data.map(gift => new Gift(gift))

    }
    async openGift(giftId) {
        const response = await api.get(`gift/${giftId}`)
        console.log('opening one gift', response.data);
        AppState.activeGift = new Gift(response.data);
        console.log(AppState.activeGift)

    }
}

export const giftService = new GiftService()