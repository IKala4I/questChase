export interface ILaunchAppForm {
    mode: AppModes;
    remember: boolean;
}

export enum AppModes {
    Ordinary,
    Crypto
}
