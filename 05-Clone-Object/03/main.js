const permission = {}
const permission1 = { canView: false, canDelete: false };
const permission2 = { canUpdate: true, canCreate: true };
const permission3 = { canCreate: false, canDelete: true };
const permission4 = { canView: true };

Object.assign(permission, permission1,permission2,permission3,permission4,)

console.log(permission);