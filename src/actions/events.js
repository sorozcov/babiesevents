//Silvio Orozco
//Acciones de events

import * as types from '../types/events';


export const addEvent = ({id,type,notes,date}) => ({
  type: types.EVENT_ADDED,
  payload:{
    id,
    type,
    notes,
    date
  }
});

export const deleteEvent = (id) => ({
  type: types.EVENT_DELETED,
  payload:{id}
});


// estado = {
//       babies:{
//         order:[VVV3],
//         babiesById:{
//           VVV3:{silvio, orozco}
//         },
//         selectedBaby: null
//       },
//       event{
//         byBabiesId:{
//           VVV3:{
//             id1:{ notes, type, date},
//             id2:{ notes, type, date},
//             id3:{ notes, type, date},
//           }
//         },
//         byBabiesIdOrder:{
//           id:[id1,id2,id3]
//         },
//         byOrder:[],
//         byId:{

//         }
//       },
//   }

