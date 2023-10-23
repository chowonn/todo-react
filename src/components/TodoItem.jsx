import { MdEdit } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { GoCheckCircle } from 'react-icons/go';
import { GoCheckCircleFill } from 'react-icons/go';

function TodoItem() {
  return (
    <>
      <li className=" flex items-center justify-between ">
        <div className="flex gap-[10px]">
          <GoCheckCircle size="28" className="mr-[10px] inline-block" />
          <p>코딩테스트 2문제 풀기</p>
        </div>
        <div className="flex gap-[10px]">
          <button className="">
            <MdEdit size="28" />
          </button>
          <button>
            <IoClose size="28" />
          </button>
        </div>
      </li>
    </>
  );
}

export default TodoItem;
