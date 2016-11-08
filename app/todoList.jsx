const React = require('react');

class todoList extends React.Component {
    render() {
        return (
            <div class="todoList" style="background:{{props.color}}">
                <span>Hello</span>
            </div>
        );
    }
}

export default todoList;