"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var info_details_service_1 = require("./info-details.service");
describe('InfoDetailsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [info_details_service_1.InfoDetailsService]
        });
    });
    it('should be created', testing_1.inject([info_details_service_1.InfoDetailsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=info-details.service.spec.js.map