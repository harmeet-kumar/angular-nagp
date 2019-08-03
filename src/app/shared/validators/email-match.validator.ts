import { AbstractControl} from '@angular/forms'

export function matchKrde (control : AbstractControl) : {[key:string] : boolean} | null {

    var pass1 = control.get('password');
    var pass2 = control.get('confirmPassword');
    console.log(pass1.value + '===========' + pass2.value)
    if(pass1.dirty && pass2.dirty && pass1.value != pass2.value)
    {
        console.log(pass1.value + '======ssss=====' + pass2.value)
        return {comparePassword : true};
    }

    return null;
}
