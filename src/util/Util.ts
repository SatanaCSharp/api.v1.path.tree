export class Util {
    private isHandlerAsyncExceptionsHooked: boolean;
    constructor() {
        this.isHandlerAsyncExceptionsHooked = false;
    }
    public handleAsyncExceptions() {
        if(!this.isHandlerAsyncExceptionsHooked){
            process.on('unhandledRejection', (err) => {
                throw err;
            });
        }
        this.isHandlerAsyncExceptionsHooked = true;
    }
}
export const util = new Util();
