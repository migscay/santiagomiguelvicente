import { trigger,state,transition,style,animate } from '@angular/animations';

    export let fade =
    //void => * means when the element is added to the DOM
    trigger('fade', [
        state('void',style({ opacity: 0})),
        //void => * means when the element is added to the DOM
        //style is immediate while animate is done with the time supplied 3000 (2 seconds)
        //void <=> * means it's bi directional, from void to default and from default to void
        //:enter is equivalent to 'void => *'
        //:leave is equivalent to '* => void' 
        transition(':enter,:leave',[
          animate(3000)
        ]),
      ])
  