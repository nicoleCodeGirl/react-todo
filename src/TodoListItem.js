// import React from "react";

// function TodoListItem(props) {
//   return (
//     <div>
//       <li>{item.title}</li>
//     </div>
//   );
// }

// export default TodoListItem;


import React from "react";

function TodoListItem(props) {
const { todo } = props;
return (
<div>
<li>{todo.title}</li>
</div>
);
}

export default TodoListItem;