export type DrawBasicInfo = {
    id : string;
    draw : string; 
    name : string; 
    drawDate : string; 
    isNewResult : boolean;
}

export interface DrawAPIResponse {
    map(arg0: (draw: DrawBasicInfo, index: import("react").Key) => JSX.Element): import("react").ReactNode;
    resultDraw: DrawBasicInfo[]
}