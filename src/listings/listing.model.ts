export class Message{
   

    constructor(public title: string,
                public substitle: string,
                public category: string,
                public added: string,
                public description: string,
                public cost: number,
                public user: string,
                public listingId: string,
                public userId: string,
                public ono?: boolean,
                public postage?: number,
                public postageCost?: number,) {}
}