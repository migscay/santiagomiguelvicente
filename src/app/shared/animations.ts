import { trigger,state,transition,style,animate,query,stagger, keyframes } from '@angular/animations';

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

      export let listAnimation =
      trigger('listAnimation', [
        transition('* => *', [ // each time the binding value changes
          query(':enter', style({opacity: 0}), {optional: true}),

          query(':enter', stagger('300ms', [
            animate('4s ease-in', keyframes([
              style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
              style({opacity: 1, transform: 'translateY(0)', offset: 1}),
            ]))
          ]) , {optional: true})        

        ])
      ])
        

  