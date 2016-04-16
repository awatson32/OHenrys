import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');
    
    // constructor(navbar: platui.Navbar) {
    //     super();
    // }

    // context: any = {};
    
    // navbar.setLeft({
    //     content: '<i class="facebook"></i>',
    //     action() => {
    //         alert('Going to Facebook');
    //     }
    // });
}

register.viewControl('home-vc', HomeViewControl);
