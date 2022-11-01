"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = exports.Config = exports.name = void 0;
const koishi_1 = require("koishi");
exports.name = 'moyu';
exports.Config = koishi_1.Schema.object({});

function apply(ctx) {
    // write your plugin here
    ctx.command('lc', "摸鱼人日历")
    .action(async ({ options }) => {
        try {
            const data = await ctx.http.get('https://api.vvhan.com/api/moyu', {responseType: 'arraybuffer'})
            return koishi_1.segment.image(data);
        } catch (error) {
            ctx.logger('tools').warn(error);
            return '请求失败。';
        }
    })

}

exports.apply = apply;