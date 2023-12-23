import { MdEdit, MdDeleteForever } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { GoCheckCircle } from 'react-icons/go';
import { GoCheckCircleFill } from 'react-icons/go';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

// 작성된 투두 상태 를 map 으로 li에 todos이라는 새 배열을 반환함. => 이게 작성되는 투두 내용
// 작성된 투두 목록에서 관리해야할 기능은? => 수정, 삭제, 보여주기 , 체크박스
// create (만들고 즉, 추가), read (추가한거 읽어오고), update(읽어온거 수정), delete (읽어온거 삭제)
// update 는 읽어온거를 수정해야하니까 읽어온 배열에서 수정한 새 배열을 반환해야함
// delete는 읽어온 배열에서 id 값이 일치하지 않는 것을 골라내면 됨
// onEditTodo 은 수정했을 때 새로운 배열을 받아 수정내용으로 변경해주는 기능!인거지 , 수정 완료 버튼 클릭했을 때!의 이벤트는 따로 처리해야함.
// 클릭했을 때 그 동작이 일어나게끔 하는 이벤트 처리와  어떤 변화가 있도록 기능을 만들어주는 건 다름..

function TodoItem({ todos, onRemoveTodo, onToggleChecked, onEditTodo }) {
  const { id, text, checked } = todos;
  const [edit, setEdit] = useState(false);
  const [updateText, setUpdateText] = useState(text);
  const inputRef = useRef();

  const toggleEdit = () => setEdit(!edit);

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handelEdit();
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  //수정 상태에서 수정 내용 작성하다가 취소를 누르고 다시 수정을 누르면 이전에 작성하다만 수정 내용이 그대로 담겨있게됨.
  //  const [updateText, setUpdateText] = useState(text); text가 담겨있는데, 결국 input을 관리하는건 updateText임.
  // 그러니까 덜 작성한 내용을 초기화해주기 위해서 아래 함수를 만듦.

  // 수정 상태에서 나가는 것
  const handleQuitEdit = () => {
    setEdit(false);
    setUpdateText(text);
  };

  // handleEdit 이 실행되면 onEditTodo를 실행해야함. 그래야 App.jsx가 데이터가 수정됨
  const handelEdit = (e) => {
    e.preventDefault();
    if (updateText.length < 1) {
      // 수정input에 아무것도 입력하지 않고 완료버튼을 누를 때 포커스
      inputRef.current.focus();
      return;
    }
    if (window.confirm('수정하시겠습니까?')) {
      onEditTodo(id, updateText);
      toggleEdit(); // 수정이 완료되면 닫아주기
    }
  };
  return (
    <>
      <li className=" flex items-center justify-between ">
        <form onSubmit={handelEdit}>
          <div type="button" className="flex gap-[10px]">
            <button type="button" onClick={() => onToggleChecked(id)}>
              {checked ? (
                <GoCheckCircleFill
                  size="28"
                  className="mr-[10px] inline-block"
                />
              ) : (
                <GoCheckCircle size="28" className="mr-[10px] inline-block" />
              )}
            </button>

            {edit ? (
              // <form onSubmit={handelEdit}>
              <input
                value={updateText}
                ref={inputRef}
                onChange={(e) => setUpdateText(e.target.value)}
              />
            ) : (
              // </form>
              <div>
                {checked ? (
                  <p className="line-through">{text}</p>
                ) : (
                  <p>{text}</p>
                )}
              </div>
            )}
          </div>
        </form>
        <div className="flex gap-[10px]">
          {!edit ? (
            <>
              <button type="button" onClick={toggleEdit}>
                <MdEdit size="28" />
              </button>
              <button type="button" onClick={() => onRemoveTodo(id)}>
                <MdDeleteForever size="28" />
              </button>
            </>
          ) : (
            <>
              <button
                type="submit"
                onClick={handelEdit}
                onKeyDown={handleEnter}
              >
                <FaCheck size="24" color="#228B22" />
              </button>
              <button type="button" onClick={handleQuitEdit}>
                <IoClose size="28" color="#ff0000" />
              </button>
            </>
          )}
        </div>
      </li>
    </>
  );
}

TodoItem.propTypes = {
  todos: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }),

  setTodo: PropTypes.func,
  handelDeleteTodo: PropTypes.func,
  onRemoveTodo: PropTypes.func,
  onToggleChecked: PropTypes.func,
  handelEdit: PropTypes.func,
  onEditTodo: PropTypes.func,
  handleEnter: PropTypes.func,
};

export default TodoItem;
