import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const icons = [
  <FaRegThumbsUp />,
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
  <GiTreeDoor />,
];

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h2 className={style.title}> {title}</h2>}
      <ul className={style.list}>
        {stats.map(({ id, title, total }, index) => {
          return (
            <li className={style.item} key={id}>
              <StatisticsItem total={total} title={title} icon={icons[index]} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
