import { TaskByTimeFrame } from "../types";

export const TaskCard = ({title, current, previous}: TaskByTimeFrame) => {
    return (
        <div className={`w-full overflow-hidden flex-1 flex flex-col max-w-sm bg-${title.toLocaleLowerCase().replace(' ', '-')} rounded-lg shadow`}>
          <img className='flex-1 self-end -my-3 me-4' src={`/src/assets/images/icon-${title.toLocaleLowerCase().replace(' ', '-')}.svg`} alt="icon-work" />
          <div className='flex flex-col gap-4 text-start max-w-sm bg-dark-blue p-8 rounded-lg'>
            <div className='w-full flex justify-between align-middle font-semibold'>
              <h2>{title}</h2>
              <div>. . .</div>
            </div>
            <div className="text-6xl">
              {current}hrs
            </div>
            <span className="text-pale-blue">Previous - {previous}hrs</span>
          </div>
        </div>
    );
}