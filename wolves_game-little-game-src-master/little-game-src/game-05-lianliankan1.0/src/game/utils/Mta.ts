// TypeScript file
module Mta {
    export function clickStar2(id, args) {
        var MtaH5 = window['MtaH5'];
        if (MtaH5) {
            MtaH5.clickStat(id, args);
        }
    }

    export function getMathH5() {
        var MtaH5 = window['MtaH5'];
        return MtaH5;
    }

}