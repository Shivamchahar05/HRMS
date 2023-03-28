import { AnimationTriggerMetadata, animate, state, style, transition, trigger } from "@angular/animations";


export class FlipAnimation {
    static animations = FlipAnimation.getAnimations();

    static getAnimations(): Array<AnimationTriggerMetadata> {
        return [
            trigger(
                'slideView',
                [
                    state('false', style({ transform: 'translateX(100%)', opacity: 0 })),
                    state('true', style({ transform: 'translateX(0)', opacity: 1 })),
                    transition('0 => 1', animate('500ms', style({ transform: 'translateX(0)', 'opacity': 1 }))),
                    transition('1 => 1', animate('500ms', style({ transform: 'translateX(100%)', 'opacity': 0 }))),
                ]),

            trigger('slideInOut', [
                transition('*<=>*', [
                    style({ transform: 'translateX(100%)', opacity: 0 }),
                    animate('600ms ease-in', style({ transform: 'translateX(0%)', 'opacity': 1 }))
                ]),

                // transition(':leave', [
                //   style({ transform: 'translateX(0%)', opacity: 1 }),
                //   animate('0ms ease-in', style({ transform: 'translateX(100%)', 'opacity': 0 }))
                // ])
            ])
        ]
    }
}

export class loginFlipAnimation {
    static animations = FlipAnimation.getAnimations();

    static getAnimations(): Array<AnimationTriggerMetadata> {
        return [
            trigger(
                'slideView',
                [
                  state('false', style({ transform: 'translateX(100%)', opacity: 0 })),
                  state('true', style({ transform: 'translateX(0)', opacity: 1 })),
                  transition('0 => 1', animate('500ms', style({ transform: 'translateX(0)', 'opacity': 1 }))),
                  transition('1 => 1', animate('500ms', style({ transform: 'translateX(100%)', 'opacity': 0 }))),
                ]),
          
              trigger('slideInOut', [
                transition(':enter', [
                  style({ transform: 'translateY(-100%)', opacity: 0 }),
                  animate('600ms ease-in', style({ transform: 'translateY(0%)', 'opacity': 1 }))
                ]),
                
               
              ])
        ]
    }
}