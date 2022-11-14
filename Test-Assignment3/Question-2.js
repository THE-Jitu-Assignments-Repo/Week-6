// 2.	Name two hooks that help in optimizing performance of a react app explain how they help in improving
//  performance. Write code to prove this.


// - Two typical problems that cause poor performance in applications:

//     1. Unnecessary re-renders.
//     2 .Heavy computational calculation in the components repeatedly.


•	useMemo

// For example in case where we need to perfom a complex 
// calculation within a component useMemo allows us too memorize a value in order to obtain it whenever we need it without re-calculating it until the dependancies 
// with which it was calculated changes.

import { useMemo } from "react";

const ListContainer = ({items, onClick}) =>{
    const memoizedValue = useMemo(()=>{
        //the code will only run on initial render and when "items changes"
        return items.filter(item => item.value < 5).map(item => item + 3);
    }, [items])

    return (...n)
}









•	useCallback


// Using useCallback hook can prevent unnecessary re-renders as seen in the example below the component will always receive 
// the same callback for handleClick until there is a change in the item or onclick Element.

import { useCallback } from "react"


const componentContatiner = ({item, onClick})=>{
const handleClick = useCallback(item =>{
    return onClick(item)
}, [item, onClick])

return(
    <Component handleClick={handleClick} />
)
};