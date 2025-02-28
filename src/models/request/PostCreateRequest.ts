export class PostCreateRequest {
    public type: string;
    public data: string;
    public filename: string;
    public campaignId: number;

    constructor(param: any) {
        this.type = param.type;
        this.data = param.data;
        this.filename = param.filename;
        this.campaignId = param.campaignId;
    }

    public getAll() {
        return{
            type: this.type,
            data: this.data,
            filename: this.filename,
            campaign_id: this.campaignId,
        };
    }
}
