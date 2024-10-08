import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollable, TuiScrollbar} from '@taiga-ui/core';
import {TuiFade} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiFade, TuiScrollable, TuiScrollbar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
