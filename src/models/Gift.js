
export class Gift {
    constructor(data) {
        this.creatorId = data.creatorId
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened
        this.profileIsOpened = data.profileIsOpened
    }
}