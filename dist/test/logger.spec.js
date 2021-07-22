"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
const fs = require("fs");
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fs.promises.writeFile('logs/all.log', '', 'utf-8');
        yield fs.promises.writeFile('logs/error.log', '', 'utf-8');
    }
    catch (err) {
        console.error(err);
    }
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fs.promises.rm('logs', {
            recursive: true,
            force: true
        });
    }
    catch (err) {
        console.error(err);
    }
}));
describe('logger.info', () => {
    index_1.logger.info('Test run log information using winston logger.');
    it('should be able to log info to "all.log" file', () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield fs.promises.readFile('logs/all.log', 'utf8');
        expect(data).toEqual(expect.stringContaining('Test run log information using winston logger.'));
    }));
    it('should NOT be able to log info to "error.log" file', () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield fs.promises.readFile('logs/error.log', 'utf8');
        expect(data).toEqual(expect.not.stringContaining('Test run log information using winston logger.'));
    }));
});
//# sourceMappingURL=logger.spec.js.map