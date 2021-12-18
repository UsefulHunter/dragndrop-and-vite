import React, {useState} from 'react'
import { Motivators } from '../../constants/motivators';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './index.css'
import './colors.css'
const DragNDropComponent = (props) => {
    const [motivators, updateMotivators] = useState(Motivators);
    const handleOnDragEnd = (result) => {
        if(!result.destination) return ;
        console.log(result)
        const items = Array.from(motivators);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        updateMotivators(items);
    }

    return <>
        <h1>Motivators</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="motivators" direction="horizontal">
                {(provided) => (
                    <ul className="motivators" {...provided.droppableProps} ref={provided.innerRef}>
                    {motivators.map(({title, subTitle, classname, imgsrc}, index) => {
                        return (
                            <Draggable key={title} draggableId={title} index={index}>
                                {(provided) => (
                                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <img src={imgsrc} alt={subTitle}/>
                                    </li>
                                )}
                                
                            </Draggable>
                                )
                    })
                    }
                    {provided.placeholder}
                </ul>
                )}
            </Droppable>
        
        </DragDropContext>
        
    </>

}

export default DragNDropComponent;