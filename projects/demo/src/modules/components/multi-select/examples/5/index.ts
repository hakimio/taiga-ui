import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList} from '@taiga-ui/core';
import {TuiAsideItemDirective} from '@taiga-ui/layout';
import {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        TuiAsideItemDirective,
        TuiDataList,
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly jedi: readonly string[] = [
        'Luke Skywalker',
        'Princess Leia',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ];

    protected readonly sith: readonly string[] = ['Emperor', 'Darth Vader', 'Darth Maul'];

    protected value: readonly string[] = [this.jedi[0] ?? ''];
}
