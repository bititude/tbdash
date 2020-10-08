import React from 'react'
import { sortable } from 'react-sortable'
import './Sortable.css'
class Item extends React.Component {
    render() {
        return(
            <div className="s-item" {...this.props}>
                {this.props.children}
            </div>
        )
    }
}

var SortableItem = sortable(Item);

class SortableList extends React.Component { 
    state = {
        items: this.props.items
    };

    onSortItems = (items) => {
        this.setState({
        items: items
        });
    }

    render() {
        const { items } = this.state;
        var listItems = items.map((item, i) => {
            return (                     
                <SortableItem
                key={i}
                onSortItems={this.onSortItems}
                items={items}
                sortId={i}>{item}</SortableItem>            
            );
        });

        return (
        <ul className='sortable-list d-flex flex-row flex-wrap'>
            {listItems}
        </ul>
        )
    }
};

export default SortableList

