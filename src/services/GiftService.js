import { api } from "./AxiosService"

class GiftService {
    async getGift() {
        const response = await api.get('/gifts')
    }
}

export const giftService = new GiftService()