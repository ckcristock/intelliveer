import {
    animate,
    animation,
    query,
    sequence,
    stagger,
    style
  } from "@angular/animations";

 export const animationParams = {
	menuWidth: "200px",
	animationStyle: "500ms ease-in"
  };
  
  export const SidebarOpenAnimation = animation([
    style({ left: "-{{menuWidth}}" }),
    query(".row", [style({ transform: "translateX(-{{menuWidth}})" })]),
    sequence([
      animate("200ms", style({ left: "0" })),
      query(".row", [
        stagger(50, [animate("{{animationStyle}}", style({ transform: "none" }))])
      ])
    ])
  ]);
  
//   export const SidebarCloseAnimation = animation([
//     style({ left: '0' }),
//     query('.row', [style({ transform: 'none' })]),
//     sequence([
//       query('.row', [
//         stagger(50, [
//           animate(
//             '{{animationStyle}}',
//             style({ transform: 'none' })
//           ),
//         ]),
//       ]),
//       animate('200ms', style({ left: '-{{menuWidth}}' })),
//     ]),
//   ]);