import { AbstractControl} from '@angular/forms';

export function matchKrde (control : AbstractControl) : {[key:string] : boolean} | null {

    var pwd = control.get('password');
    var confpwd = control.get('confirmPassword');
    if(pwd.dirty && confpwd.dirty && pwd.value != confpwd.value)
    {
        console.log(pwd.value + '===ssss===' + confpwd.value);
        return {comparePassword : true};
    }

    return null;
}
