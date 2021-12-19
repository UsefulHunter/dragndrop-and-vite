import React, {useState} from 'react'
import { Motivators } from '../../constants/motivators';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './index.css'
import './colors.css'
import Header from '../header';
import useWindowDimensions from '../../utils/useWindowDimensions';

const DragNDropComponent = (props) => {
    const {width} = useWindowDimensions();
    const [motivators, updateMotivators] = useState(Motivators);
    const handleOnDragEnd = (result) => {
        if(!result.destination) return ;
        console.log(result)
        const items = Array.from(motivators);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        updateMotivators(items);
        if(window.navigator.vibrate) {
            window.navigator.vibrate(100);
        }
    }
    const droppableDirection = () => width < 768 ? 'vertical' : 'horizontal';
    console.log(width)
    return <div className='container'>
        <Header />
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="motivators" direction={droppableDirection()}>
                {(provided) => (
                    <ul className="motivators" {...provided.droppableProps} ref={provided.innerRef}>
                    {motivators.map(({title, subTitle,  imgsrc}, index) => {
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
        
    </div>

}

export default DragNDropComponent;