// 2.	Name two hooks that help in optimizing performance of a react app explain how they help in improving
//  performance. Write code to prove this.


// - Two typical problems that cause poor performance in applications:

//     1. Unnecessary re-renders.
//     2 .Heavy computational calculation in the components repeatedly.


•	useMemo














•	useCallback


// Using useCallback hook can prevent unnecessary re-renders as seen in the example below the component will alwas receive 
// the same callback for handleClick until there is a chande in the item or onclick ElementInternals.

import { useCallback } from "react"


const componentContatiner = ({item, onClick})=>{
const handleClick = useCallback(item =>{
    return onClick(item)
}, [item, onClick])

return(
    <Component handleClick={handleClick} />
)
};