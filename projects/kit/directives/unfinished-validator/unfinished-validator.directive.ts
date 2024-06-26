import {Directive} from '@angular/core';
import type {Validator} from '@angular/forms';
import {NG_VALIDATORS} from '@angular/forms';
import {tuiInjectElement, tuiProvide} from '@taiga-ui/cdk';

import {tuiCreateUnfinishedValidator} from './unfinished.validator';

@Directive({
    standalone: true,
    selector: 'input[tuiUnfinishedValidator]',
    providers: [tuiProvide(NG_VALIDATORS, TuiUnfinishedValidatorDirective, true)],
})
export class TuiUnfinishedValidatorDirective implements Validator {
    public readonly validate = tuiCreateUnfinishedValidator(
        tuiInjectElement(),
        tuiInjectElement().getAttribute('tuiUnfinishedValidator') || '',
    );
}
