"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateToString = void 0;
const dateToString = (str) => {
    const nums = str.split('/').map((str) => +str);
    return new Date(nums[2], nums[1] + 1, nums[0]);
};
exports.dateToString = dateToString;
