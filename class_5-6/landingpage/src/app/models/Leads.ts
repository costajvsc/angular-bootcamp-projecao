export class Leads {
    constructor(
        public id?: string,
        public name: string='',
        public email: string='',
        public phoneNumber: number=0,
        public message: string='',
        public hate: number=0,
        public observer: string='',
        public estimatedPrice: number=0,
        public status: string=''
    ){}
}