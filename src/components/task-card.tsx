import { getActiveFilterName } from "../store/filter-store";
import { TaskByTimeFrame } from "../types";


export const TaskCard = ({title, current, previous}: TaskByTimeFrame) => {
  const filterFirstLetter = getActiveFilterName()?.charAt(0);
  
  return (
        <div className={`w-full overflow-hidden flex-1 flex flex-col bg-${title.toLocaleLowerCase().replace(' ', '-')} rounded-lg shadow`}>
          <img className='flex-1 self-end -my-3 me-4' src={`/assets/images/icon-${title.toLocaleLowerCase().replace(' ', '-')}.svg`} alt="icon-work" />
          <div className='flex flex-col gap-6 text-start bg-dark-blue p-8 rounded-lg'>
            <div className='w-full flex justify-between align-middle font-semibold'>
              <h2>{title}</h2>
              <div>. . .</div>
            </div>
            <div className='flex gap-2 lg:flex-col justify-between items-center lg:items-start'>
            <div className="text-6xl">
              {current}hrs
            </div>
            <span className="text-pale-blue">{filterFirstLetter == 'd' ? 'Yesterday' : (filterFirstLetter == 'w' ? 'Last Week' : 'Last Month')} - {previous}hrs</span>
            </div>
          </div>
        </div>
    );
}