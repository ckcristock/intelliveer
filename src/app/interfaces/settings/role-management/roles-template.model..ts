export class RolesTemplate{
    name: any;
    description:any;
    type:any;
    businessGroups:Array<any> = [];
    permissions:Array<any> = [Section];
}
export class Section{
    section:any;
    permissions:Array<any> = [Permissions];
}
export class Permissions{
    name:any;
    enabled:boolean = false;
    locked:boolean = false;
    allowOverride:boolean = false
}