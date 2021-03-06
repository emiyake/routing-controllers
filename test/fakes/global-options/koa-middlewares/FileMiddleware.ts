import {MiddlewareGlobalBefore} from "../../../../src/decorator/decorators";
import {MiddlewareInterface} from "../../../../src/middleware/MiddlewareInterface";
import {defaultFakeService} from "../FakeService";

@MiddlewareGlobalBefore()
export class FileMiddleware implements MiddlewareInterface {

    use(context: any, next?: (err?: any) => Promise<any>): Promise<any> {
        defaultFakeService.fileMiddleware();
        return next();
    }

}